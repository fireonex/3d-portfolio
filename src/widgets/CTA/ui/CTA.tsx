import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { tKeys } from "@/shared";

export const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className={"cta"}>
      <p className={"cta-text"}>
        {t(tKeys.CTA.title1)} <br className={"sm:block hidden"} />
        {t(tKeys.CTA.title2)}
      </p>
      <Link to={"/contact"} className={"btn"}>
        {t(tKeys.CTA.contact)}
      </Link>
    </section>
  );
};
