import {useGLTF} from "@react-three/drei";
// @ts-ignore
import skyScene from "../../assets/skybox2.glb"
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

type Props = { isRotating: boolean }
export const Sky = ({isRotating}: Props) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()
    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.05 * delta; // Adjust the rotation speed as needed
        }
    })
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    );
};