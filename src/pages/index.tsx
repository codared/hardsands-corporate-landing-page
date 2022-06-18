import WithLayout from "components/WithLayout";
import { HomePage } from "modules/hardsands";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <WithLayout
      pageTitle={t("title:home-page", "Hardsands - One time Business Card")}
    >
      <HomePage />
    </WithLayout>
  );
};

export default Home;
