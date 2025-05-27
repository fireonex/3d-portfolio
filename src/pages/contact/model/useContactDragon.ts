import { useState } from "react";
import { modelValues } from "./types.ts";

export const useContactDragon = () => {
  const [animationSpeed, setAnimationSpeed] = useState(0.5);
  const adjustDragonForScreenSize = (): modelValues[] => {
    let screenScale: modelValues = [2.1, 2.1, 2.1];
    let screenPosition: modelValues = [0.3, -1.8, -0.3];
    let rotation: modelValues = [0, -0.5, 0];

    if (window.innerWidth < 1024) {
      screenPosition = [0.3, -0.4, -0.3];
      rotation = [0.3, -0.7, 0];
    }
    if (window.innerWidth < 768) {
      screenScale = [2.3, 2.3, 2.3];
      screenPosition = [0.3, -1, 0];
      rotation = [0.2, -0.6, 0.0];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [dragonScale, dragonPosition, dragonRotation] = adjustDragonForScreenSize();

  return { dragonScale, dragonPosition, dragonRotation, animationSpeed, setAnimationSpeed };
};
