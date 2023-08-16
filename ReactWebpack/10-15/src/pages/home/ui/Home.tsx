import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("main");

  return <div>{t("home")}</div>;
};

export default Home;
