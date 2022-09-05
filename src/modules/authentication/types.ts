export type SignUpUserType = {
  firstName: string;
  email: string;
  lastName: string;
  country: string;
  password: string;
  sendMarketingEmails: boolean;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type ResetUserPasswordType = {
  email: string;
};

export type ResetUserPasswordFormType = {
  identifier: number;
  passwordToken: string;
  password: string;
};

export type VerifyEmailType = {
  verifyText: string;
  identifier: number;
};
