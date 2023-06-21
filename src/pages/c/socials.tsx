import WithoutLayout from "components/WithoutLayout";
import BankDetailDisplay from "modules/account/components/ActionsDisplay/BankDetailsDisplay";
import LinkTreeDisplay from "modules/account/components/ActionsDisplay/LinkTree/LinkTreeDisplay";
import SocialProfile from "modules/account/components/ActionsDisplay/ProfileCardDisplay";

const Socials = () => {
  return (
    <WithoutLayout pageTitle="Card Tap | Hardsands">
      {/* <SocialProfile /> */}
      <LinkTreeDisplay />
    </WithoutLayout>
  );
};

export default Socials;
