export const BASE_URL = "https://proapi.snapp.market/mart/v1";

export const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-type": "application/json",
};

export const endpoints = {
  auth: {
    otp: "/user/loginMobileWithNoPass",
    validate: "/user/loginMobileWithToken",
  },
};
