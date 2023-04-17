import WithLayout from "components/WithLayout";
import ActivateDeviceForm from "modules/account/AccessMembershipDashboard/ActivateDeviceForm";
import type { NextPage } from "next";

const ActivateDevice: NextPage = () => {
  return (
    <WithLayout isCheckout pageTitle="Device Activation | Hardsands">
      <ActivateDeviceForm />
    </WithLayout>
  );
};

export default ActivateDevice;
