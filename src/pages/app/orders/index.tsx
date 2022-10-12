import HardsandsAccountsApp from "modules/account";
import MainAccountContent from "modules/account/MainAccountContent";

const OrdersPage = () => {
  return (
    <HardsandsAccountsApp active={2}>
      <MainAccountContent />
    </HardsandsAccountsApp>
  );
};

export default OrdersPage;
