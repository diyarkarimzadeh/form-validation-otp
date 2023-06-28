export interface sendOtpResponse {
  status: boolean;
  data: Data;
}

export interface Data {
  result: Result;
}

export interface Result {
  isRegistered: boolean;
  hasPassword: boolean;
  result: boolean;
  message: string;
}
