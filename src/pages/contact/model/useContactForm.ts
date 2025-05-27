import { useState, FormEvent, ChangeEvent } from "react";
import { useAlert } from "../../../shared";
import emailjs from "@emailjs/browser";
import { FormState } from "./types.ts";

export const useContactForm = (setAnimationSpeed: (speed: number) => void) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAnimationSpeed(1.7);
    const templateParams = {
      to_name: "Maria",
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
      from_email: form.email,
      time: new Date().toLocaleString(),
      to_email: "mariakrulikovskaa869@gmail.com",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);

        showAlert({ show: true, type: "success", text: "Message sent successfully!" });
        setTimeout(() => {
          hideAlert();
          setAnimationSpeed(0);
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setAnimationSpeed(0);
        console.error(err);
        showAlert({ show: true, type: "danger", text: "I didnt receive your message" });
      });
  };

  const handleFocus = () => {
    setAnimationSpeed(0.9);
  };

  const handleBlur = () => {
    setAnimationSpeed(0.5);
  };

  return { form, alert, isLoading, handleBlur, handleFocus, handleSubmit, handleChange };
};
