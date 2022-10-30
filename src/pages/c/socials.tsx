import WithoutLayout from "components/WithoutLayout";
import BankDetailDisplay from "modules/account/components/BankDetailsDisplay";
import SocialProfile from "modules/account/components/ProfileCardDisplay";

const Socials = () => {
  return (
    <WithoutLayout pageTitle="Card Tap | Hardsands">
      <SocialProfile />
    </WithoutLayout>
  );
};

export default Socials;
