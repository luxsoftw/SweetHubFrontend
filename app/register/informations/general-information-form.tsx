"use client";

import { AuthButton } from "@/app/components/auth-button";
import InputErrorMessage from "@/app/components/input-error-message";
import { Input } from "@/app/components/input-form/index";
import InvolveInputError from "@/app/components/involve-input-error";
import { VscLoading } from "react-icons/vsc";
import { withMask } from "use-mask-input";
import { useFormState, useFormStatus } from "react-dom";
import { validateGeneralInformation } from "./actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const initialState = {
   success: false,
   message: null,
   errors: null,
};

export function GeneralInformationForm() {
   const router = useRouter();

   const [{ success, message, errors }, formAction] = useFormState(
      validateGeneralInformation,
      initialState,
   );

   const { pending } = useFormStatus();

   useEffect(() => {
      if (success) {
         router.push("/register/address");
      }
   }, [success, router]);

   return (
      <form action={formAction} className="flex flex-col items-center gap-10">
         {/* TODO: make a alert or something else to show message error */}
         {!success && message && <h1 className="text-red-500">{message[0]}</h1>}
         <div className="flex flex-row items-center justify-center gap-5">
            <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
            <h4 className="text-nowrap font-light text-black/50">
               Informações gerais
            </h4>
            <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
         </div>
         <div className="relative w-full">
            <Input.Root>
               <Input.Form
                  ref={withMask("cnpj")}
                  type="text"
                  placeholder="CNPJ"
                  className="flex-grow"
                  name="cnpj"
                  id="cnpj"
               />
            </Input.Root>

            {errors?.cnpj && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.cnpj[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         <div className="relative w-full">
            <Input.Root>
               <Input.Form
                  ref={withMask("cpf")}
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="CPF"
               />
            </Input.Root>

            {errors?.cpf && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.cpf[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         <div className="relative w-full">
            <Input.Root>
               <Input.Form
                  name="companyName"
                  id="companyName"
                  placeholder="Razão Social"
               />
            </Input.Root>

            {errors?.companyName && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.companyName[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         <div className="relative w-full">
            <Input.Root>
               <Input.Form
                  name="fantasyName"
                  id="fantasyName"
                  placeholder="Nome Fantasia"
               />
            </Input.Root>

            {errors?.fantasyName && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.fantasyName[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         {pending ? (
            <button
               disabled={pending}
               className="flex w-full items-center justify-center gap-2 rounded bg-orange-400 p-2 text-white transition-colors hover:bg-orange-500 md:max-w-48 md:self-end md:rounded-3xl md:text-base"
            >
               <VscLoading className="size-4 animate-spin" />
               Enviando...
            </button>
         ) : (
            <AuthButton type="submit" title="Continuar" />
         )}
      </form>
   );
}
