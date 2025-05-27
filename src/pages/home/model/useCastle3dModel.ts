import { useState } from "react";

export const useCastle3dModel = () => {
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

  const [castleScale, castlePosition, castleRotation] = adjustCastleForScreenSize();

  return {
    isRotating,
    castleScale,
    currentStage,
    setIsRotating,
    castlePosition,
    castleRotation,
    setCurrentStage,
  };
};
