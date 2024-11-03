"use server";

import { SignIn } from "@/app/http/sing-in";
import { HTTPError } from "ky";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { z } from "zod";
import { UserSchema } from "../actions";
import { CompanySchema } from "../informations/actions";

const addressSchema = z
   .object({
      cep: z
         .string()
         .transform((cep) => cep.replace(/\D/g, ""))
         .pipe(z.string().length(8, "O CEP deve ter 8 caracteres")),
      state: z.string().min(2, "O estado deve ter no mínimo 2 caracteres"),
      city: z.string().min(3, "A rua deve ter no mínimo 3 caracteres"),
      neighborhood: z
         .string()
         .min(3, "O bairro deve ter no mínimo 3 caracteres"),
      fullAddress: z
         .string()
         .min(3, "O endereço deve ter no mínimo 3 caracteres"),
      addressNumber: z.string(),
   })
   .required();

export type AddressSchema = z.infer<typeof addressSchema>;

export async function singUpUser(_: unknown, data: FormData) {
   const addressInfo = Object.fromEntries(data);
   const resultParse = addressSchema.safeParse(addressInfo);

   if (!resultParse.success) {
      const errors = resultParse.error.flatten().fieldErrors;
      return { success: false, message: null, errors };
   }

   const { cep, state, city, neighborhood, fullAddress, addressNumber } =
      resultParse.data;

   const companyInfoCookie: RequestCookie | undefined =
      cookies().get("companyInfo");
   const userInfoCookie: RequestCookie | undefined = cookies().get("userInfo");

   if (!companyInfoCookie || !userInfoCookie) {
      return {
         success: false,
         message: "Missing company or user information",
         errors: null,
      };
   }

   const companyInfo: CompanySchema = JSON.parse(companyInfoCookie.value);
   const userInfo: UserSchema = JSON.parse(userInfoCookie.value);

   try {
      await SignIn({
         address: {
            cep,
            state,
            city,
            neighborhood,
            fullAddress,
            addressNumber,
         },
         company: {
            ...companyInfo,
         },
         user: {
            ...userInfo,
         },
      });

      cookies().set(
         "addressInfo",
         JSON.stringify({
            cep,
            state,
            city,
            neighborhood,
            fullAddress,
            addressNumber,
         }),
         { maxAge: 60 * 60, httpOnly: true },
      );
   } catch (err) {
      if (err instanceof HTTPError) {
         const { message } = await err.response.json();
         console.error(message);
         return { success: false, message, errors: null };
      }
      return {
         success: false,
         message: "An unexpected error occurred",
         errors: null,
      };
   }

   return { success: true, message: null, errors: null };
}
