import { AxiosResponse } from "axios";
import http from ".";
import { endpoints } from "./endpoints";

export interface loginMobileResponse {
  status: boolean;
  data: Data;
}

export interface Data {
  user: User;
  time: number;
  vipDiscountPlans: any[];
  vipDeliveryDiscount: number;
  vip_badge: string;
  jwt_token: string;
  jwt_refresh_token: string;
}

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  cellphone: string;
  email: string;
  birthday: string;
  addresses: any[];
  credit: number;
  vipDiscount: number;
  profilePicture: string;
  point: number;
  levelName: string;
  levelNumber: number;
  memberships: any[];
  nationalCode: string;
  hash: string;
}

export const sendOtpRequest = (cellphone: string) => {
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
