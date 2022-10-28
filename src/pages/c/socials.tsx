import WithoutLayout from "components/WithoutLayout";
import BankDetailDisplay from "modules/account/components/BankDetailsDisplay";
import SocialProfile from "modules/account/components/ProfileCardDisplay";

const Socials = () => {
  return (
    <WithoutLayout pageTitle="Card Tap | Hardsands">
      <BankDetailDisplay
        bankName={"Providus Bank"}
        bankAccountName={"Samuel, Peter J."}
        bankAccountNumber={"0054367890"}
      />
    </WithoutLayout>
  );
};

export default Socials;
