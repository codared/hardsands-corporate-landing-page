export type SignUpUserType = {
  firstName: string;
  email: string;
  lastName: string;
  country: string;
  password: string;
  sendMarketingEmails: boolean;
};

export type CardActivationType = {
  cardSerial: string;
  productId: string;
  activationCode: number | null;
  email: string;
  password?: string;
};

export type SignupCardActivationType = CardActivationType & SignUpUserType;

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

export type VerifyGoogleAuthType = {
  token: string
}
