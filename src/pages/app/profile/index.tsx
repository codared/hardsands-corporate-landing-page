import HardsandsAccountsApp from "modules/account";
import MainAccountContent from "modules/account/MainAccountContent";

const ProfilePage = () => {
  return (
    <HardsandsAccountsApp active={3}>
      <MainAccountContent />
    </HardsandsAccountsApp>
  );
};

export default ProfilePage;
