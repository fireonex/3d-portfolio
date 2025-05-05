import dragonScene from "../../assets/dragon.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
    isRotating: boolean;
    rotation: [number, number, number];
    dragonplaneScale: [number, number, number];
    dragonplanePosition: [number, number, number];
};

export const Dragon = ({
                           isRotating,
                           rotation,
                           dragonplaneScale,
                           dragonplanePosition,
                       }: Props) => {
    const ref = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF(dragonScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions["Take 001"]?.play();
        } else {
            actions["Take 001"]?.stop();
        }
    }, [actions, isRotating]);

    return (
        <>
            <ambientLight intensity={0.5}/>
            <primitive
                object={scene}
                ref={ref}
                scale={dragonplaneScale}
                position={dragonplanePosition}
                rotation={rotation}
            />
        </>

    );
};
