import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { ContactDragonGLTFResult } from "./types.ts";
import { LowPolyDragon } from "@/assets/3d-models-optimized";

export const useContactDragon = (animationSpeed: number) => {
  const currentAnimation = "cyclewalk";
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(LowPolyDragon) as ContactDragonGLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => {
      action?.stop?.();
    });

    const action = actions[currentAnimation as keyof typeof actions];
    if (action) {
      action.setEffectiveTimeScale(animationSpeed);
      action.play();
    }
  }, [actions, currentAnimation, animationSpeed]);
  return { group, nodes, materials, animations };
};
