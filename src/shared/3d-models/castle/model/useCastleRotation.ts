import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export const useCastleRotation = (
  castleRef: React.RefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (v: boolean) => void,
  // setCurrentStage: (stage: number) => void,
) => {
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.85;

  useEffect(() => {
    const handlePointerDown = (e: TouchEvent | PointerEvent) => {
      setIsRotating(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;
    };

    const handlePointerMove = (e: TouchEvent | PointerEvent) => {
      if (!isRotating || !castleRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      const sensitivity = window.innerWidth < 768 ? 0.05 : 0.01;
      castleRef.current.rotation.y += delta * sensitivity * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    };

    const handlePointerUp = () => setIsRotating(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!castleRef.current) return;
      if (e.key === "ArrowLeft") {
        setIsRotating(true);
        castleRef.current.rotation.y += 0.01 * Math.PI;
      } else if (e.key === "ArrowRight") {
        setIsRotating(true);
        castleRef.current.rotation.y -= 0.01 * Math.PI;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setIsRotating(false);
      }
    };

    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener(
      "pointermove",
      handlePointerMove as EventListener,
      {
        passive: false,
      } as any,
    );
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener,
        {
          passive: false,
        } as any,
      );
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, isRotating]);

  return {
    rotationSpeed,
    dampingFactor,
  };
};
