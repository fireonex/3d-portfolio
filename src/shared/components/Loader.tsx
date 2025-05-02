import {cn} from "../libs";
import {Html} from "@react-three/drei";

type Props = {};
export const Loader = ({}: Props) => {
    return (
        <Html>
            <div className={'flex items-center justify-center'}>
                <div
                    className={cn(['w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'])}>

                </div>
            </div>
        </Html>
    );
};