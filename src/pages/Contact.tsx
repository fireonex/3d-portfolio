import {ChangeEvent, FormEvent, Suspense, useState} from "react";
import emailjs from '@emailjs/browser'
import {Canvas} from "@react-three/fiber";
import {Loader} from "../shared/components";
import {DragonForContact} from "../shared/3d-models";
import {Alert, useAlert} from "../shared/components/alert";

type FormState = {
    name: string;
    email: string;
    message: string;
};
export const Contact = () => {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    //const formRef = useRef<HTMLFormElement>(null);
    const [animationSpeed, setAnimationSpeed] = useState(0.5)
    const {alert, showAlert, hideAlert} = useAlert()
    // const position = useControls('Dragon Position', {
    //     x: { value: 0.5, min: -5, max: 5, step: 0.1 },
    //     y: { value: 0.35, min: -5, max: 5, step: 0.1 },
    //     z: { value: 0, min: -5, max: 5, step: 0.1 },
    // });
    //
    // const rotation = useControls('Dragon Rotation', {
    //     rotX: { value: 12, min: -Math.PI, max: Math.PI, step: 0.1 },
    //     rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    //     rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    // });
    //
    // const scale = useControls('Dragon Scale', {
    //     scaleX: { value: 0.5, min: 0.1, max: 5, step: 0.1 },
    //     scaleY: { value: 0.5, min: 0.1, max: 5, step: 0.1 },
    //     scaleZ: { value: 0.5, min: 0.1, max: 5, step: 0.1 },
    // });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setAnimationSpeed(1.7)
        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            to_name: "Maria",
            to_email: "mariakrulikovskaa869@gmail.com",
            message: form.message,
            time: new Date().toLocaleString()
        };

        console.log("Отправляемые параметры:", templateParams);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);

            showAlert({show: true, text: 'Message sent successfully!', type: 'success'})
            setTimeout(() => {
                hideAlert()
                setAnimationSpeed(0)
                setForm({name: '', email: '', message: ''});
            }, 3000)
        }).catch((err) => {
            setIsLoading(false);
            setAnimationSpeed(0)
            console.error(err);
            showAlert({show: true, text: 'I didnt receive your message', type: 'danger'})
        });
    };

    const handleFocus = () => {
        setAnimationSpeed(0.9)
    };

    const handleBlur = () => {
        setAnimationSpeed(0.5)
    };
    return (
        <section className={'relative flex lg:flex-row flex-col max-container h-[100vh]'}>
            {alert.show && <Alert type={alert.type} text={alert.text}/>}
            <div className={'flex-1 min-w-[50%] flex flex-col'}>
                <h1 className={'head-text'}>Get in Touch</h1>
                <form className={'w-full flex flex-col gap-7 mt-14'} onSubmit={handleSubmit}>
                    <label className={'text-black-500 font-semibold'}>
                        Name
                        <input type={'text'}
                               name={'name'}
                               placeholder={'John'}
                               className={'input'}
                               required
                               value={form.name}
                               onChange={handleChange}
                               onFocus={handleFocus}
                               onBlur={handleBlur}
                        />
                    </label>
                    <label className={'text-black-500 font-semibold'}>
                        Email
                        <input type={'email'}
                               name={'email'}
                               placeholder={'john@gmail.com'}
                               className={'input'}
                               required
                               value={form.email}
                               onChange={handleChange}
                               onFocus={handleFocus}
                               onBlur={handleBlur}
                        />
                    </label>
                    <label className={'text-black-500 font-semibold'}>
                        Your message
                        <textarea
                            name={'message'}
                            rows={4}
                            placeholder={'Let me know how I can help you!'}
                            className={'textarea'}
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button type={'submit'}
                            className={'btn'}
                            disabled={isLoading}
                            // onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onSubmit={() => handleSubmit}
                    >
                        {isLoading ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </div>
            <div className={'lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'}>
                <Canvas camera={{position: [0, 0, 5]}} className={'bg-transparent'}>
                    {/*<directionalLight*/}
                    {/*    intensity={0.5}*/}
                    {/*    position={[3, 3, 3]}*/}
                    {/*    castShadow*/}
                    {/*/>*/}
                    <ambientLight intensity={0.5}/>
                    {/*<pointLight position={[2, 2, 2]} intensity={1.5}/>*/}
                    {/*<spotLight*/}
                    {/*    position={[5, 5, 5]}*/}
                    {/*    angle={0.3}*/}
                    {/*    penumbra={1}*/}
                    {/*    intensity={7}*/}
                    {/*    castShadow*/}
                    {/*/>*/}
                    <Suspense fallback={<Loader/>}>
                        {/*<DragonForContact position={[0.5, 0.35, 0]} rotation={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}/>*/}
                        {/*<DragonForContact*/}
                        {/*    currentAnimation={currentAnimation}*/}
                        {/*    animationSpeed={animationSpeed}*/}
                        {/*    position={[position.x, position.y, position.z]}*/}
                        {/*    rotation={[rotation.rotX, rotation.rotY, rotation.rotZ]}*/}
                        {/*    scale={[scale.scaleX, scale.scaleY, scale.scaleZ]}*/}
                        {/*/>*/}
                        <DragonForContact
                            animationSpeed={animationSpeed}
                            position={[-0.6, -1.1, -0.3]}
                            rotation={[0, -0.5, 0]}
                            scale={[1.6, 1.6, 1.6]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};