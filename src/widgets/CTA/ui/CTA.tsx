import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className={"cta"}>
      <p className={"cta-text"}>
        Have a project in mind? <br className={"sm:block hidden"} />
        Let&#39;s build something together!
      </p>
      <Link to={"/contact"} className={"btn"}>
        Contact
      </Link>
    </section>
  );
};
