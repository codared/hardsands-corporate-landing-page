import { LoginUserType, ResetUserPasswordFormType, ResetUserPasswordType, SignUpUserType, VerifyEmailType } from "../types";
import { storefrontApiJsonFetch } from "../../api";

export const registerUser = async (data: SignUpUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as { isError: boolean; result?: any; message?: string; name?: string };

  return res;
};

export const loginUser = async (data: LoginUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as { isError: boolean; result?: any; message?: string; name?: string };

  return res;
};

export const resetUserPassword = async (data: ResetUserPasswordType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/reset-password-link`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as { isError: boolean; result?: any; message?: string; name?: string };

  return res;
};

export const resetPassword = async (data: ResetUserPasswordFormType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/reset-password`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as { isError: boolean; result?: any; message?: string; name?: string };

  return res;
};

export const verifyEmail = async (data: VerifyEmailType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/email/verify`, {
    method: "POST",
    body: JSON.stringify(data),
  })) as {
    isError: boolean;
    result?: { token?: string; message: string };
    message?: string;
    name?: string;
  };

  return res;
};
