import { AxiosResponse } from "axios";
import http from ".";
import { endpoints } from "./endpoints";
import { loginMobileResponse } from "@/types/LoginMobileResponse";
import { sendOtpResponse } from "@/types/SendOtpResponse";

export const sendOtpRequest = (
  cellphone: string
): Promise<AxiosResponse<sendOtpResponse>> => {
  return http.post({
    url: endpoints.auth.otp,
    data: {},
    params: { cellphone: cellphone },
  });
};

export const loginMobile = (
  otp: string,
  cellphone: string | string[] | undefined
): Promise<AxiosResponse<loginMobileResponse>> => {
  return http.post({
    url: endpoints.auth.validate,
    data: {},
    params: {
      cellphone: cellphone,
      code: otp,
      client: "PWA",
      platform: "PWA",
      deviceType: "Browser",
      appVersion: "2.0.0",
    },
  });
};
