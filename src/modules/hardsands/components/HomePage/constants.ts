import FiPenTool from "design/svg/FiPenTool";
import Bag from "design/svg/Bag";
import FiShare from "design/svg/FiShare";

type SimpleSteps = {
  title: string;
  subTitle: string;
  icon: typeof FiPenTool | typeof FiShare | typeof Bag;
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
