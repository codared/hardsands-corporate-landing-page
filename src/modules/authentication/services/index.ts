import {
  CardActivationType,
  LoginUserType,
  ResetUserPasswordFormType,
  ResetUserPasswordType,
  SignupCardActivationType,
  SignUpUserType,
  VerifyEmailType,
} from "../types";
import { storefrontApiJsonFetch } from "../../api";

export type ResponseType = {
  isError: boolean;
  result?: any;
  message?: string;
  name?: string;
  data?: {
    nextStep: string;
    data: any;
  };
};

export const registerUser = async (data: SignUpUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const loginUser = async (data: LoginUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const resetUserPassword = async (data: ResetUserPasswordType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/reset-password-link`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const resetPassword = async (data: ResetUserPasswordFormType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/reset-password`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const loginActivateCard = async (data: CardActivationType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/login-activate`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const signupActivateCard = async (data: SignupCardActivationType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/signup-activate`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const activateCard = async (data: CardActivationType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/activate-initialize`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};

export const getCard = async (serial: string) => {
  const res = (await storefrontApiJsonFetch(
    `/api/cards/${serial}`
  )) as ResponseType;

  return res;
};

export const verifyEmail = async (data: VerifyEmailType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/email/verify`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as ResponseType;

  return res;
};
