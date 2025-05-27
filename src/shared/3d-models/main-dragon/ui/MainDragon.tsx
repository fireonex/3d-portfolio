import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Dragon } from "@/assets/3d-models-optimized";

type Props = {
  isRotating: boolean;
  rotation: number | number[];
  dragonScale: number | number[];
  dragonPosition: number | number[];
};

export const MainDragon = ({ rotation, isRotating, dragonScale, dragonPosition }: Props) => {
  const ref = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(Dragon);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <primitive
      ref={ref}
      object={scene}
      rotation={rotation}
      scale={dragonScale}
      position={dragonPosition}
    />
  );
};
