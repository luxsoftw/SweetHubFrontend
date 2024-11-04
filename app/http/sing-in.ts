import { api } from "./ky-api-client";
import { CompanyInterface } from "./validate-general-informations";
import { UserInterface } from "./validate-register";

export interface AddressInterface {
   cep: string;
   state: string;
   city: string;
   neighborhood: string;
   fullAddress: string;
   addressNumber: string;
}

interface SignInRequest {
   address: AddressInterface;
   company: CompanyInterface;
   user: UserInterface;
}

export async function SignIn(data: SignInRequest) {
   const address = data.address;
   const company = data.company;
   const user = data.user;

   const response = await api.post("auth/sign-up", {
      json: {
         ...address,
         ...company,
         ...user,
      },
   });

   return response;
}
