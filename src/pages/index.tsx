import WithLayout from "components/WithLayout";
import HandPickedForYou from "modules/hardsands/HandPickedForYou";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <HandPickedForYou />
    </WithLayout>
  );
};

export default Home;
