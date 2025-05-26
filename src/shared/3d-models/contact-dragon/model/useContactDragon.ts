import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
// @ts-ignore
import scene from "../../../../assets/low_poly_dragon.glb";
import { ContactDragonGLTFResult } from "./types.ts";

export const useContactDragon = (animationSpeed: number) => {
  const currentAnimation = "cyclewalk";
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(scene) as ContactDragonGLTFResult;
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
  return {group, nodes, materials, animations};
};