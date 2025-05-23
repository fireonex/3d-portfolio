import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import {Loader} from "../shared";
import {Castle, Dragon, Sky} from "../shared"
import {cn} from "../shared";
import {HomeInfo} from "../components";

export const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const adjustCastleForScreenSize = () => {
        let screenScale;
        let screenPosition = [-3, -10.5, -26];
        let rotation = [0.1, 3.14, 0]
        if (window.innerWidth < 768) {
            screenScale = 0.12;
            screenPosition = [-3, -11.5, -26];
        } else {
            screenScale = 0.19;
        }
        return [screenScale, screenPosition, rotation];
    }

    const adjustDragonForScreenSize = () => {
        let screenScale = 3;
        let screenPosition = [-9, -11, 0];
        let rotation = [0, 0.1, 0.08]
        if (window.innerWidth < 768) {
            screenScale = 2;
            screenPosition = [-4, -8, 0];
            rotation = [0, -0.1, 0.1]
        }
        return [screenScale, screenPosition, rotation];
    }


    const [castleScale, castlePosition, islandRotation] = adjustCastleForScreenSize()
    const [dragonplaneScale, dragonplanePosition, dragonplaneRotation] = adjustDragonForScreenSize()
    return (
        <section className={'w-full h-screen relative'}>
            <div className={'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'}>
                {currentStage && <HomeInfo currentStage={currentStage}/>}
            </div>
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
                    <Dragon
                        isRotating={isRotating}
                        rotation={dragonplaneRotation}
                        dragonplaneScale={dragonplaneScale}
                        dragonplanePosition={dragonplanePosition}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};


