import { useGLTF } from "@react-three/drei";
// @ts-ignore
import skyScene from "@/assets/skybox2.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type Props = { isRotating: boolean };

export const Sky = ({ isRotating }: Props) => {
  const sky = useGLTF(skyScene);
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
