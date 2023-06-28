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
