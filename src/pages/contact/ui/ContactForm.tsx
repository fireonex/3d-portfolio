import { FormState } from "../model";
import { tKeys } from "@/shared";
import { useTranslation } from "react-i18next";

type Props = {
  form: FormState;
  isLoading: boolean;
  handleBlur: () => void;
  handleFocus: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const ContactForm = ({
  form,
  isLoading,
  handleBlur,
  handleFocus,
  handleSubmit,
  handleChange,
}: Props) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit} className={"w-full flex flex-col gap-7 mt-14"}>
      <label className={"text-black-500 font-semibold"}>
        Name
        <input
          required
          type={"text"}
          name={"name"}
          value={form.name}
          className={"input"}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          placeholder={t(tKeys.contact.placeholders.name)}
        />
      </label>
      <label className={"text-black-500 font-semibold"}>
        Email
        <input
          required
          type={"email"}
          name={"email"}
          value={form.email}
          className={"input"}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          placeholder={t(tKeys.contact.placeholders.email)}
        />
      </label>
      <label className={"text-black-500 font-semibold"}>
        Your message
        <textarea
          rows={4}
          required
          name={"message"}
          onBlur={handleBlur}
          value={form.message}
          onFocus={handleFocus}
          className={"textarea"}
          onChange={handleChange}
          placeholder={t(tKeys.contact.placeholders.message)}
        />
      </label>
      <button
        type={"submit"}
        className={"btn"}
        onBlur={handleBlur}
        disabled={isLoading}
        // onChange={handleChange}
        onFocus={handleFocus}
        onSubmit={() => handleSubmit}
      >
        {isLoading ? t(tKeys.contact.sending) : t(tKeys.contact.send)}
      </button>
    </form>
  );
};
