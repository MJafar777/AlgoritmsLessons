import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      {t("about")}
      <h1>{t("hello")}</h1>
      <h1>{t("helloo")}</h1>
    </div>
  );
};

export default About;
