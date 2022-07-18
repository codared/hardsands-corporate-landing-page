import HardsandsAccountsApp from "modules/account";
import MainAccountContent from "modules/account/MainAccountContent";

const AccountApp = () => {
  return (
    <HardsandsAccountsApp active={1}>
      <MainAccountContent />
    </HardsandsAccountsApp>
  );
};

export default AccountApp;
