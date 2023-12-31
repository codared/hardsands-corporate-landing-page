import {
  CardActivationType,
  CorperateCardActivationType,
  LoginUserType,
  ResetUserPasswordFormType,
  ResetUserPasswordType,
  SignupCardActivationType,
  SignUpUserType,
  VerifyCorperateEmailType,
  VerifyEmailType,
  VerifyGoogleAuthType,
  VerifyGoogleAuthTypeAndCreateCard,
} from "../types";
import { storefrontApiJsonFetch } from "../../api";
import { BackendResponseType } from "utils/types";
import { requestJsonHeaders } from "utils/functions";

export const registerUser = async (data: SignUpUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/signup`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const loginUser = async (data: LoginUserType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/login`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const resetUserPassword = async (data: ResetUserPasswordType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/reset-password-link`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const resetPassword = async (data: ResetUserPasswordFormType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/reset-password`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const loginActivateCard = async (data: CardActivationType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/login-activate`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const loginCorperateActivateCard = async (
  data: CorperateCardActivationType
) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/corp/login-activate`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const loginAccessCorperateActivateCard = async (
  data: CorperateCardActivationType
) => {
  const res = (await storefrontApiJsonFetch(
    `/api/cards/access-corp/login-activate`,
    {
      method: "POST",
      headers: requestJsonHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};

export const signupActivateCard = async (data: SignupCardActivationType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/signup-activate`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const activateCard = async (data: CardActivationType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/activate-initialize`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const getCard = async (serial: string, deviceId?: string) => {
  const res = (await storefrontApiJsonFetch(
    deviceId
      ? `/api/cards/${serial}?deviceId=${deviceId}`
      : `/api/cards/${serial}`
  )) as BackendResponseType;

  return res;
};

export const verifyEmail = async (data: VerifyEmailType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/email/verify`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const verifyCorperateEmail = async (data: VerifyCorperateEmailType) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/corp/verify-email`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const verifyAccessCorperateEmail = async (
  data: VerifyCorperateEmailType
) => {
  const res = (await storefrontApiJsonFetch(
    `/api/cards/access-corp/verify-email`,
    {
      method: "POST",
      headers: requestJsonHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};

export const verifyGoogleAuth = async (data: VerifyGoogleAuthType) => {
  const res = (await storefrontApiJsonFetch(`/api/auth/google/login`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const verifyGoogleAuthAndActivateCard = async (
  data: VerifyGoogleAuthTypeAndCreateCard
) => {
  const res = (await storefrontApiJsonFetch(`/api/cards/google-activate`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};
