import { api } from "./ky-api-client";

export interface UserInterface {
   name: string;
   email: string;
   phone: string;
   password: string;
   confirmPassword: string;
   terms: boolean;
}

export interface ValidateRegisterRequest {
   user: UserInterface;
}

export async function validateInformation(data: ValidateRegisterRequest) {
   const userInfo = data.user;
   await api.post("auth/sign-up/validate/user-info", {
      json: { ...userInfo },
   });
}
