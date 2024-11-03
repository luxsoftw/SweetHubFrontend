"use server";

import { validateGeneralInformations } from "@/app/http/validate-general-informations";
import { HTTPError } from "ky";
import { cookies } from "next/headers";
import { z } from "zod";

const CompanySchema = z
   .object({
      cnpj: z
         .string()
         .transform((val) => val.replace(/\D/g, ""))
         .pipe(z.string().length(14, "O CNPJ deve ter 14 caracteres")),
      cpf: z
         .string()
         .transform((val) => val.replace(/\D/g, ""))
         .pipe(z.string().length(11, "O CPF deve ter 11 caracteres")),
      companyName: z
         .string()
         .min(3, "A razão social deve ter no mínimo 3 caracteres"),
      fantasyName: z
         .string()
         .min(3, "O nome fantasia deve ter no mínimo 3 caracteres"),
   })
   .required();

export type CompanySchema = z.infer<typeof CompanySchema>;

export async function validateGeneralInformation(_: unknown, data: FormData) {
   const companyInfo = Object.fromEntries(data);
   const resultParse = CompanySchema.safeParse(companyInfo);

   if (!resultParse.success) {
      const errors = resultParse.error.flatten().fieldErrors;
      return { success: false, message: null, errors };
   }

   const { cpf, cnpj, companyName, fantasyName } = resultParse.data;

   try {
      await validateGeneralInformations({
         companyInfo: {
            cpf,
            cnpj,
            companyName,
            fantasyName,
         },
      });

      cookies().set(
         "companyInfo",
         JSON.stringify({
            cpf,
            cnpj,
            companyName,
            fantasyName,
         }),
         { httpOnly: true, maxAge: 3600 },
      );
   } catch (err) {
      if (err instanceof HTTPError) {
         const { message } = await err.response.json();

         return { success: false, message, errors: null };
      }

      console.error(err);

      return {
         success: false,
         message: "Unexpected error, try again in a few minutes.",
         errors: null,
      };
   }

   return { success: true, message: null, errors: null };
}
