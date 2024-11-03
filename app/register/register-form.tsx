"use client";

import { Input } from "../components/input-form/index";
import { AuthButton } from "../components/auth-button";
import { withMask } from "use-mask-input";
import { CheckBoxTerm } from "../components/checkbox-term";
import { VscLoading } from "react-icons/vsc";
import { validateRegister } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import InvolveInputError from "../components/involve-input-error";
import InputErrorMessage from "../components/input-error-message";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const initialState = {
   success: false,
   message: null,
   errors: null,
};

export function RegisterUserForm() {
   const router = useRouter();

   const [{ success, message, errors }, formAction] = useFormState(
      validateRegister,
      initialState,
   );

   const { pending } = useFormStatus();

   useEffect(() => {
      if (success) {
         router.push("/register/informations");
      }
   }, [success, router]);

   return (
      <form
         className="mt-4 flex w-full flex-grow flex-col space-y-8 md:mt-8"
         action={formAction}
      >
         {/* TODO: make a alert or something else to show message error */}
         {!success && message && <h1>{message}</h1>}

         <div className="flex flex-row items-center justify-center gap-5">
            <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
            <h4 className="text-nowrap font-light text-black/50">
               Registrar por email
            </h4>
            <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
         </div>
         <a
            className="cursor-pointer text-center text-blue-600 md:hidden"
            // TODO: fix button to navigate for login
            onClick={() => console.log("Navigate to login page")}
         >
            Já possui conta? Entre aqui!
         </a>

         <div className="relative space-y-2">
            <Input.Root>
               <Input.Form
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Nome"
               />
            </Input.Root>

            {errors?.name && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.name[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         <div className="relative space-y-2">
            <Input.Root>
               <Input.Form
                  name="email"
                  id="email"
                  // required
                  type="email"
                  placeholder="E-mail"
               />
            </Input.Root>
            {errors?.email && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.email[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         <div className="relative space-y-2">
            <Input.Root>
               <Input.Form
                  ref={withMask("(99) 99999-9999")}
                  name="phone"
                  id="phone"
                  // required
                  type="tel"
                  placeholder="Número"
                  title="Please enter a valid phone number (10-11 digits)"
               />
            </Input.Root>
            {errors?.phone && (
               <InvolveInputError>
                  <InputErrorMessage>{errors.phone[0]}</InputErrorMessage>
               </InvolveInputError>
            )}
         </div>

         <div className="flex gap-4">
            <div className="relative w-full space-y-2">
               <Input.Root>
                  <input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Senha"
                     className="h-10 w-28 rounded-md bg-transparent px-5 outline-none"
                  />
               </Input.Root>
               {errors?.password && (
                  <InvolveInputError>
                     <InputErrorMessage>{errors.password[0]}</InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>

            <div className="relative w-full space-y-2">
               <Input.Root>
                  <input
                     name="confirmPassword"
                     id="confirmPassword"
                     type="password"
                     placeholder="Repita a senha"
                     className="flex h-10 w-28 flex-grow rounded-md bg-transparent px-5 outline-none"
                  />
               </Input.Root>
               {errors?.confirmPassword && (
                  <InvolveInputError>
                     <InputErrorMessage>
                        {errors.confirmPassword[0]}
                     </InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>
         </div>

         <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-2">
            <div className="relative space-y-2">
               <CheckBoxTerm id="terms" name="terms" type="checkbox">
                  Aceito os termos de uso
               </CheckBoxTerm>
               {errors?.terms && (
                  <InvolveInputError>
                     <InputErrorMessage>{errors.terms[0]}</InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>

            {pending ? (
               <button
                  disabled
                  className="flex w-full items-center justify-center gap-2 rounded bg-orange-400 p-2 text-white transition-colors hover:bg-orange-500 md:max-w-48 md:self-end md:rounded-3xl md:text-base"
               >
                  <VscLoading className="size-4 animate-spin" />
                  Enviando...
               </button>
            ) : (
               <AuthButton type="submit" title="Continuar" />
            )}
         </div>
      </form>
   );
}
