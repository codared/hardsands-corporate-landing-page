export type SignUpUserType = {
  firstName: string;
  email: string;
  lastName: string;
  country: string;
  password: string;
  sendMarketingEmails: boolean;
};

export type VerifyEmailType = {
  verifyText: string;
  identifier: number;
};
