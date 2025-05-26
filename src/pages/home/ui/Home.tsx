import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { cn, Sky, Loader, Castle, MainDragon } from "../../../shared";
import { HomeInfo } from "../../../components";

export const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustCastleForScreenSize = () => {
    let screenScale;
    let screenPosition = [-3, -10.5, -26];
    const rotation = [0.1, 3.14, 0];
    if (window.innerWidth < 768) {
      screenScale = 0.12;
      screenPosition = [-3, -11.5, -26];
    } else {
      screenScale = 0.19;
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustDragonForScreenSize = () => {
    let screenScale = 3;
    let screenPosition = [-9, -11, 0];
    let rotation = [0, 0.1, 0.08];
    if (window.innerWidth < 768) {
      screenScale = 2;
      screenPosition = [-4, -8, 0];
      rotation = [0, -0.1, 0.1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [castleScale, castlePosition, islandRotation] = adjustCastleForScreenSize();
  const [dragonplaneScale, dragonplanePosition, dragonplaneRotation] = adjustDragonForScreenSize();
  return (
    <section className={"w-full h-screen relative"}>
      <div className={"absolute top-28 left-0 right-0 z-10 flex items-center justify-center"}>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={cn([
          isRotating ? "cursor-grabbing" : "cursor-grab",
          "w-full h-screen bg-transparent",
        ])}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={1} position={[10, 1, 1]} />
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={1} groundColor={"#000"} />
          <Sky isRotating={isRotating} />
          <Castle
            scale={castleScale}
            isRotating={isRotating}
            position={castlePosition}
            rotation={islandRotation}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <MainDragon
            isRotating={isRotating}
            rotation={dragonplaneRotation}
            dragonScale={dragonplaneScale}
            dragonPosition={dragonplanePosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
