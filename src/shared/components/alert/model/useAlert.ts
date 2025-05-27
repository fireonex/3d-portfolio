import { useState } from "react";
import { AlertType } from "./types";

type Alert = {
  text: string;
  show: boolean;
  type?: AlertType;
};
export const useAlert = () => {
  const [alert, setAlert] = useState<Alert>({ text: "", show: false, type: "danger" });

  const showAlert = (alertObj: Alert) => {
    setAlert(alertObj);
  };

  const hideAlert = () => {
    setAlert({ text: "", show: false, type: "danger" });
  };

  return { alert, showAlert, hideAlert };
};
