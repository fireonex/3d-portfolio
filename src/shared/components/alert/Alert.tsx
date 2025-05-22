import {cn} from "../../libs";
import {AlertType} from "./useAlert.ts";

type Props = {
    type: AlertType | undefined;
    text: string
};
export const Alert = ({text, type = 'danger'}: Props) => {
    return (
        <div className={'absolute top-14 left-0 right-0 flex justify-center items-center'}>
            <div
                className={cn([type === 'danger' ? 'bg-red-800' : 'bg-blue-800',
                    'p-2 text-indigo-100 leading-none items-center rounded-full flex lg:inline-flex'])}
                role="alert"
            >
                <p className={cn([
                    type === 'danger' ? 'bg-red-500' : 'bg-blue-500',
                    'flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs'])}>
                    {type === 'danger' ? 'Failed' : 'Success'}
                </p>
                <p className={'mr-2 text-left'}>{text}</p>
            </div>
        </div>
    );
};