import { api } from "./ky-api-client";

export interface CompanyInterface {
   cnpj: string;
   cpf: string;
   companyName: string;
   fantasyName: string;
}

export interface ValidateCompanyInfoRequest {
   companyInfo: CompanyInterface;
}

export async function validateGeneralInformations(
   data: ValidateCompanyInfoRequest,
) {
   const companyInfo = data.companyInfo;
   await api.post("auth/sign-up/validate/company-info", {
      json: {
         ...companyInfo,
      },
   });
}

