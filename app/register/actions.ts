"use server";

import { validateInformation } from "@/app/http/validate-register";
import { HTTPError } from "ky";
import { z } from "zod";
import { cookies } from "next/headers";

const userSchema = z
   .object({
      name: z
         .string({ required_error: "É necessário preecher o seu nome" })
         .min(3, "O nome deve ter no mínimo 3 caracteres")
         .max(255, "O nome deve ter no máximo 255 caracteres"),
      email: z.string().email("Insira um email válido"),
      phone: z
         .string()
         .transform((phone) => phone.replace(/\D/g, ""))
         .pipe(z.string().length(11, "Insira um número válido")),
      password: z
         .string()
         .min(8, "A senha deve ter no mínimo 8 caracteres")
         .max(16, "A senha deve ter no máximo 16 caracteres"),
      confirmPassword: z.string(),
      terms: z.preprocess((value) => value === "on", z.boolean()),
   })
   .required()
   .refine((data) => data.password === data.confirmPassword, {
      message: "Senhas não conferem",
      path: ["confirmPassword"],
   })
   .refine((data) => data.terms, {
      message: "É necessário aceitar os termos para realizar login",
      path: ["terms"],
   })
   .refine(
      (data) => {
         const cleanedPhone = data.phone.replace(/\D/g, "");
         return cleanedPhone.length === 11;
      },
      {
         message: "Insira um telefone válido com 11 dígitos",
         path: ["phone"],
      },
   )
   .transform((data) => ({
      ...data,
      phone: data.phone.replace(/\D/g, ""),
   }));

export type UserSchema = z.infer<typeof userSchema>;

export async function validateRegister(_: unknown, data: FormData) {
   const registerInfo = Object.fromEntries(data);
   const resultParse = userSchema.safeParse(registerInfo);

   if (!resultParse.success) {
      const errors = resultParse.error.flatten().fieldErrors;

      return { success: false, message: null, errors };
   }

   const { name, email, password, confirmPassword, phone, terms } =
      resultParse.data;

   try {
      await validateInformation({
         user: {
            name,
            email,
            password,
            confirmPassword,
            phone,
            terms,
         },
      });

      cookies().set(
         "userInfo",
         JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
            phone,
            terms,
         }),
         { maxAge: 3600, httpOnly: true }, // Cookie expira em 1 hora
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
   // redirect("/register/informations");
}
