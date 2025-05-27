import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader, ContactDragon } from "@/shared";
import { modelValues } from "../model";

type Props = {
  animationSpeed: number;
  dragonScale: modelValues;
  dragonPosition: modelValues;
  dragonRotation: modelValues;
};

export const ContactDragonComponent = ({
  dragonScale,
  dragonRotation,
  dragonPosition,
  animationSpeed,
}: Props) => {
  return (
    <div className={"lg:w-1/2 w-full lg:h-auto h-[350px]"}>
      <Canvas className={"bg-transparent"} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <ContactDragon
            scale={dragonScale}
            position={dragonPosition}
            rotation={dragonRotation}
            animationSpeed={animationSpeed}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
