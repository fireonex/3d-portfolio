import {useState} from "react";

export type AlertType = 'success' | 'danger';
type Alert = {
    show: boolean
    text: string
    type?: AlertType;
}
export const useAlert = () => {
    const [alert, setAlert] = useState<Alert>({show: false, text: '', type: 'danger'});

    const showAlert = (alertObj: Alert) => {
        setAlert(alertObj);
    };

    const hideAlert = () => {
        setAlert({show: false, text: '', type: 'danger'});
    };

    return {alert, showAlert, hideAlert};
};
