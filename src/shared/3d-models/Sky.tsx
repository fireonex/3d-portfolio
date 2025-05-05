import {useGLTF} from "@react-three/drei";
// @ts-ignore
import skyScene from "../../assets/skybox2.glb"
export const Sky = ({}) => {
    const sky = useGLTF(skyScene)
    return (
        <mesh>
            <primitive object={sky.scene}/>
        </mesh>
    );
};