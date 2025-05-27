import { useGLTF } from "@react-three/drei";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Skybox } from "@/assets/3d-models-original";

type Props = { isRotating: boolean };

export const Sky = ({ isRotating }: Props) => {
  const sky = useGLTF(Skybox);
  const skyRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
