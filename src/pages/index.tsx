import WithLayout from "components/WithLayout";
import { HomePage } from "modules/hardsands";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <HomePage />
    </WithLayout>
  );
};

export default Home;
