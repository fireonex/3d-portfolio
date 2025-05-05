import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Loader} from "../shared/components";
import {Castle, Sky} from "../shared/3d-models"
// import { useControls } from 'leva'

{/*<div className={'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'}>*/
}
{/*    POPUP*/
}
{/*</div>*/
}

export const Home = () => {
    // const { scale, position, rotation } = useControls('Castle2', {
    //     scale: { value: 0.9, min: 0.1, max: 3, step: 0.01 },
    //     position: {
    //         value: { x: -2, y: -5.5, z: -43 },
    //         min: -100,
    //         max: 100,
    //         step: 0.1
    //     },
    //     rotation: {
    //         value: { x: 0.1, y: 4.7, z: 0 },
    //         min: -Math.PI,
    //         max: Math.PI,
    //         step: 0.01
    //     }
    // })

    const adjustCastleForScreenSize = () => {
        let screenScale;
        let screenPosition = [-3, -10.5, -26];
        let rotation = [0.1, 3.14, 0]
        if (window.innerWidth < 768) {
            screenScale = 0.01;
        } else {
            screenScale = 0.19;
        }
        return [screenScale, screenPosition, rotation];
    }

    const [castleScale, castlePosition, islandRotation] = adjustCastleForScreenSize()
    return (
        <section className={'w-full h-screen relative'}>
            <Canvas className={'w-full h-screen bg-transparent'} camera={{near: 0.1, far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10, 1, 1]} intensity={1}/>
                    <ambientLight intensity={0.5}/>
                    {/*<pointLight/>*/}
                    {/*<spotLight/>*/}
                    <hemisphereLight  groundColor={"#000"} intensity={1}/>
                    <Sky/>
                    {/*<OrbitControls />*/}
                    <Castle position={castlePosition} scale={castleScale} rotation={islandRotation}/>
                    {/*<Castle2*/}
                    {/*    scale={[scale, scale, scale]}*/}
                    {/*    position={[position.x, position.y, position.z]}*/}
                    {/*    rotation={[rotation.x, rotation.y, rotation.z]}*/}
                    {/*/>*/}

                </Suspense>
            </Canvas>
        </section>
    );
};