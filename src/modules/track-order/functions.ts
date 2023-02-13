import { STEPS } from "./constants";

// days from now given a date
export const daysFromNowByDate = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
};

// days from now given a number
export const daysFromNowByNumber = (days: number) => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
};

export const buildDeliverySteps = (
  delaysAt: string | null,
  deliveredAt: string | null,
  dispatchedAt: string | null
) => {
  const conditionalSteps = [1];
  if (dispatchedAt) {
    conditionalSteps.push(2);
  }
  if (delaysAt) {
    conditionalSteps.push(3);
  }
  if (deliveredAt) {
    conditionalSteps.push(4);
  }

  return conditionalSteps[conditionalSteps.length - 1];
};
