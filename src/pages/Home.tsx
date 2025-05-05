import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import {Loader} from "../shared/components";
import {Castle, Dragon, Sky} from "../shared/3d-models"
import {cn} from "../shared";
import {useControls} from "leva";
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
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
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
    // const adjustDragonPlaneForScreenSize = () => {
    //     let screenScale, screenPosition;
    //     if (window.innerWidth < 768) {
    //         screenScale = [1.5, 1.5, 1.5];
    //         screenPosition = [0, -1.5, 0];
    //     } else {
    //         screenScale = [3, 3, 3];
    //         screenPosition = [0, -4, -4];
    //     }
    //
    //     return [screenScale, screenPosition];
    // }
    // const { position, scale, rotation } = useControls('Dragon', {
    //     scale: {
    //         value: { x: 6, y: 6, z: 6 },
    //         min: 0.01,
    //         max: 10,
    //         step: 0.01
    //     },
    //     position: {
    //         value: { x: 0, y: -19, z: -1 },
    //         min: -100,
    //         max: 100,
    //         step: 0.1
    //     },
    //     rotation: {
    //         value: { x: 0, y: Math.PI, z: 0 },
    //         min: -Math.PI * 2,
    //         max: Math.PI * 2,
    //         step: 0.01
    //     }
    //
    // })

    const [castleScale, castlePosition, islandRotation] = adjustCastleForScreenSize()
    // const [dragonplaneScale, dragonplanePosition] = adjustDragonPlaneForScreenSize()
    return (
        <section className={'w-full h-screen relative'}>
            <Canvas className={cn([isRotating ? 'cursor-grabbing' : 'cursor-grab', 'w-full h-screen bg-transparent'])}
                    camera={{near: 0.1, far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10, 1, 1]} intensity={1}/>
                    <ambientLight intensity={0.5}/>
                    {/*<pointLight/>*/}
                    {/*<spotLight/>*/}
                    <hemisphereLight groundColor={"#000"} intensity={1}/>
                    <Sky isRotating={isRotating}/>
                    {/*<OrbitControls />*/}
                    <Castle position={castlePosition} scale={castleScale} rotation={islandRotation}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentStage={setCurrentStage}
                    />
                    {/*<Dragon isRotating={isRotating} rotation={[0, 20, 0]} dragonplaneScale={dragonplaneScale}*/}
                    {/*        dragonplanePosition={dragonplanePosition}/>*/}
                    {/*<Dragon*/}
                    {/*    isRotating={isRotating}*/}
                    {/*    rotation={[rotation.x, rotation.y, rotation.z]}*/}
                    {/*    dragonplaneScale={[scale.x, scale.y, scale.z]}*/}
                    {/*    dragonplanePosition={[position.x, position.y, position.z]}*/}
                    {/*/>*/}
                    <Dragon
                        isRotating={isRotating}
                        rotation={[0, 0.10, 0.08]}
                        dragonplaneScale={[3, 3, 3]}
                        dragonplanePosition={[-9, -11, 0]}
                    />

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