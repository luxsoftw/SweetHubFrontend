"use client";

import { CheckBoxTerm } from "./components/checkbox-term";
import { Input } from "../components/input-form/index";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthLayout } from "../components/auth-layout";
import { AuthLeftSide } from "../components/auth-left-side";
import { AuthRightSide } from "../components/auth-right-side";
import { AuthButton } from "../components/auth-button";

const RegisterPage = () => {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
      router.back();
   };

   const handleToggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <AuthLayout>
         <AuthLeftSide
            title="Prazer em conhece-lo :)"
            subtitle="Basta se registrar para se juntar a nós"
            handleClose={handleClose}
         />
         <AuthRightSide isOpen={isOpen} handleToggleMenu={handleToggleMenu}>
            <form
               className="mt-4 flex w-full flex-grow flex-col space-y-8 md:mt-8"
               onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form submitted");
               }}
            >
               <div className="flex flex-row items-center justify-center gap-5">
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
                  <h4 className="text-nowrap font-light text-black/50">
                     Registrar por email
                  </h4>
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               </div>
               <a
                  className="cursor-pointer text-center text-blue-600 md:hidden"
                  onClick={() => console.log("Navigate to login page")}
               >
                  Já possui conta? Entre aqui!
               </a>

               <Input.Root>
                  <Input.Form type="text" placeholder="nome" required />
               </Input.Root>

               <Input.Root>
                  <Input.Form type="email" placeholder="E-mail" required />
               </Input.Root>

               <Input.Root>
                  <Input.Form
                     type="tel"
                     placeholder="Número"
                     pattern="[0-9]{10,11}"
                     title="Please enter a valid phone number (10-11 digits)"
                     required
                  />
               </Input.Root>

               <div className="flex gap-4">
                  <label className="flex w-1/2 flex-row items-center rounded-md border border-black/40 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1">
                     <input
                        type="password"
                        placeholder="Senha"
                        required
                        className="h-10 w-28 rounded-md bg-transparent px-5 outline-none"
                     />
                  </label>
                  <label className="flex w-1/2 flex-row items-center rounded-md border border-black/40 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1">
                     <input
                        type="password"
                        placeholder="Repita a senha"
                        required
                        className="flex h-10 w-28 flex-grow rounded-md bg-transparent px-5 outline-none"
                     />
                  </label>
               </div>

               <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-2">
                  <CheckBoxTerm text="Aceito receber contato no Whatsapp" />

                  <AuthButton title="CONTINUAR" />
               </div>
            </form>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default RegisterPage;
