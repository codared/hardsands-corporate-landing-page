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
      Typing one nonsense to make it make sense which will eventually
      be replaced when the copywriter is ready
    `
      ),
    },
    {
      step: t("common:step-2", "Step 2:"),
      title: t("common:step-2-title", "Design your Card"),
      instruction: t(
        "common:step-2:instruction",
        `
      Typing one nonsense to make it make sense which will eventually
      be replaced when the copywriter is ready
    `
      ),
    },
    {
      step: t("common:step-3", "Step 3:"),
      title: t("common:step-3-title", "Review"),
      instruction: t(
        "common:step-3:instruction",
        `
      Typing one nonsense to make it make sense which will eventually
      be replaced when the copywriter is ready
    `
      ),
    },
    {
      step: t("common:step-4", "Step 4:"),
      title: t("common:step-4-title", "Tap & Share"),
      instruction: t(
        "common:step-4:instruction",
        `
      Typing one nonsense to make it make sense which will eventually
      be replaced when the copywriter is ready
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
