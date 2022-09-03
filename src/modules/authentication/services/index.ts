import { SignUpUserType, VerifyEmailType } from "../types";
import { storefrontApiJsonFetch } from "../../api";

export const registerUser = async (data: SignUpUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/signup`, {
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
