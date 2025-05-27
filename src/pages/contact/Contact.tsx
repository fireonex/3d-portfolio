import { Alert } from "@/shared";
import { ContactForm, ContactDragonComponent } from "./ui";
import { useContactForm, useContactDragon } from "./model";

export const Contact = () => {
  const { dragonScale, dragonPosition, dragonRotation, animationSpeed, setAnimationSpeed } =
    useContactDragon();

  const { form, alert, isLoading, handleBlur, handleFocus, handleSubmit, handleChange } =
    useContactForm(setAnimationSpeed);

  return (
    <section
      className={"relative flex lg:flex-row flex-col max-container h-full lg:h-[100vh] gap-5"}
    >
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className={"flex-1 min-w-[50%] flex flex-col"}>
        <h1 className={"head-text"}>Get in Touch</h1>
        <ContactForm
          form={form}
          isLoading={isLoading}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <ContactDragonComponent
        dragonScale={dragonScale}
        dragonRotation={dragonRotation}
        dragonPosition={dragonPosition}
        animationSpeed={animationSpeed}
      />
    </section>
  );
};
