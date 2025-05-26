import { Suspense, useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Alert, Loader, useAlert, DragonForContact } from "../shared";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type modelValues = [number, number, number];

export const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //const formRef = useRef<HTMLFormElement>(null);
  const [animationSpeed, setAnimationSpeed] = useState(0.5);
  const { alert, showAlert, hideAlert } = useAlert();
  const adjustDragonForScreenSize = (): modelValues[] => {
    let screenScale: modelValues = [2.1, 2.1, 2.1];
    let screenPosition: modelValues = [0.3, -1.8, -0.3];
    let rotation: modelValues = [0, -0.5, 0];

    if (window.innerWidth < 1024) {
      screenPosition = [0.3, -0.4, -0.3];
      rotation = [0.3, -0.7, 0];
    }
    if (window.innerWidth < 768) {
      screenScale = [2.3, 2.3, 2.3];
      screenPosition = [0.3, -1, 0];
      rotation = [0.2, -0.6, 0.0];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [dragonScale, dragonPosition, dragonRotation] = adjustDragonForScreenSize();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAnimationSpeed(1.7);
    const templateParams = {
      to_name: "Maria",
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
      from_email: form.email,
      time: new Date().toLocaleString(),
      to_email: "mariakrulikovskaa869@gmail.com",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);

        showAlert({ show: true, type: "success", text: "Message sent successfully!" });
        setTimeout(() => {
          hideAlert();
          setAnimationSpeed(0);
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setAnimationSpeed(0);
        console.error(err);
        showAlert({ show: true, type: "danger", text: "I didnt receive your message" });
      });
  };

  const handleFocus = () => {
    setAnimationSpeed(0.9);
  };

  const handleBlur = () => {
    setAnimationSpeed(0.5);
  };

  return (
    <section
      className={"relative flex lg:flex-row flex-col max-container h-full lg:h-[100vh] gap-5"}
    >
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className={"flex-1 min-w-[50%] flex flex-col"}>
        <h1 className={"head-text"}>Get in Touch</h1>
        <form onSubmit={handleSubmit} className={"w-full flex flex-col gap-7 mt-14"}>
          <label className={"text-black-500 font-semibold"}>
            Name
            <input
              required
              type={"text"}
              name={"name"}
              value={form.name}
              className={"input"}
              onBlur={handleBlur}
              placeholder={"John"}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </label>
          <label className={"text-black-500 font-semibold"}>
            Email
            <input
              required
              type={"email"}
              name={"email"}
              value={form.email}
              className={"input"}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              placeholder={"john@gmail.com"}
            />
          </label>
          <label className={"text-black-500 font-semibold"}>
            Your message
            <textarea
              rows={4}
              required
              name={"message"}
              onBlur={handleBlur}
              value={form.message}
              onFocus={handleFocus}
              className={"textarea"}
              onChange={handleChange}
              placeholder={"Let me know how I can help you!"}
            />
          </label>
          <button
            type={"submit"}
            className={"btn"}
            onBlur={handleBlur}
            disabled={isLoading}
            // onChange={handleChange}
            onFocus={handleFocus}
            onSubmit={() => handleSubmit}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <div className={"lg:w-1/2 w-full lg:h-auto h-[350px]"}>
        <Canvas className={"bg-transparent"} camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <DragonForContact
              scale={dragonScale}
              position={dragonPosition}
              rotation={dragonRotation}
              animationSpeed={animationSpeed}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
