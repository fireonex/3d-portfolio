import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { cn, Sky, Loader, Castle, MainDragon } from "../../shared";
import { HomeInfo } from "./ui";
import { useCastle3dModel, useDragon3dModel } from "./model";

export const Home = () => {
  const {
    isRotating,
    castleScale,
    currentStage,
    setIsRotating,
    castlePosition,
    castleRotation,
    setCurrentStage,
  } = useCastle3dModel();

  const { dragonScale, dragonPosition, dragonRotation } = useDragon3dModel();

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
            rotation={castleRotation}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <MainDragon
            isRotating={isRotating}
            rotation={dragonRotation}
            dragonScale={dragonScale}
            dragonPosition={dragonPosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
