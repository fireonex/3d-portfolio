import {Html} from "@react-three/drei";

type Props = {};
export const Loader = ({}: Props) => {
    return (
        <Html transform scale={1}>
            <div className="flex items-center justify-center">
                <div className="loader" />
            </div>
        </Html>
    );
};
