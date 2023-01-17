import WithoutLayout from "components/WithoutLayout";
import BankDetailDisplay from "modules/account/components/ActionsDisplay/BankDetailsDisplay";
import SocialProfile from "modules/account/components/ActionsDisplay/ProfileCardDisplay";

const Socials = () => {
  return (
    <WithoutLayout pageTitle="Card Tap | Hardsands">
      <SocialProfile />
    </WithoutLayout>
  );
};

export default Socials;
