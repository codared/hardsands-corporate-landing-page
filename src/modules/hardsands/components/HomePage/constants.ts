import FiPenTool from "design/svg/FiPenTool";
import Bag from "design/svg/Bag";
import FiShare from "design/svg/FiShare";
import { TFunction } from "react-i18next";

type SimpleSteps = {
  title: string;
  subTitle: string;
  icon: typeof FiPenTool | typeof FiShare | typeof Bag;
};

export const getSteps = (t: TFunction) => {
  return [
    {
      step: t("common:step-1", "Step 1:"),
      title: t("common:step-1-title", "Purchase your card"),
      instruction: t(
        "common:step-1:instruction",
        `
        Choose a hardsand product that suits your needs; it might be a pre-designed hardsand card or a custom card that you can design to your specifications.
    `
      ),
    },
    {
      step: t("common:step-2", "Step 2:"),
      title: t("common:step-2-title", "Card Activation"),
      instruction: t(
        "common:step-2:instruction",
        `
        Activate your card when it arrives. No worries, activation is a seamless process and would take only a few seconds.
    `
      ),
    },
    {
      step: t("common:step-3", "Step 3:"),
      title: t("common:step-3-title", "Setup Your Profile"),
      instruction: t(
        "common:step-3:instruction",
        `
        Add, edit, and enable what you want to share with your network.
    `
      ),
    },
    {
      step: t("common:step-4", "Step 4:"),
      title: t("common:step-4-title", "Tap to Share"),
      instruction: t(
        "common:step-4:instruction",
        `
        Start sharing your identity and what you do with a single tap on any smartphone.  
    `
      ),
    },
  ];
};

export const SIMPLE_STEPS: SimpleSteps[] = [
  {
    title: "Choose",
    subTitle:
      "Choose a card from our varieties of Hardsands Cards that suites your business.",
    icon: Bag,
  },
  {
    title: "Customize",
    subTitle:
      "Choose a card from our varieties of Hardsands Cards that suites your business.",
    icon: FiPenTool,
  },
  {
    title: "Share & Connect",
    subTitle:
      "Choose a card from our varieties of Hardsands Cards that suites your business.",
    icon: FiShare,
  },
];
