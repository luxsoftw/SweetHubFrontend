"use client";

import { AuthButton } from "@/app/components/auth-button";
import { AuthLayout } from "@/app/components/auth-layout";
import { AuthLeftSide } from "@/app/components/auth-left-side";
import { AuthRightSide } from "@/app/components/auth-right-side";
import { Input } from "@/app/components/input-form/index";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

const GeneralInformationRegisterPage = () => {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);

   function handleGoTo(event: FormEvent) {
      event.preventDefault();
      router.push("/register/address");
   }

   const handleClose = () => {
      router.back();
   };

   const handleToggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <AuthLayout>
         <AuthLeftSide handleClose={handleClose} />
         <AuthRightSide isOpen={isOpen} handleToggleMenu={handleToggleMenu}>
            <form
               onSubmit={handleGoTo}
               className="flex flex-col items-center gap-10"
            >
               <div className="flex flex-row items-center justify-center gap-5">
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
                  <h4 className="text-nowrap font-light text-black/50">
                     Informações gerais
                  </h4>
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               </div>
               <Input.Root>
                  <Input.Form
                     type="text"
                     placeholder="CNPJ"
                     className="flex-grow"
                  />
                  <Input.IconSearch
                     onClick={() => {
                        console.log("Search for CNPJ");
                     }}
                  />
               </Input.Root>

               <Input.Root>
                  <Input.Form name="cpf" placeholder="CPF" />
               </Input.Root>

               <Input.Root>
                  <Input.Form
                     name="corporate-name"
                     placeholder="Razão Social"
                  />
               </Input.Root>

               <Input.Root>
                  <Input.Form name="brand-name" placeholder="Nome Fantasia" />
               </Input.Root>

               <AuthButton title="CONTINUAR" />
            </form>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default GeneralInformationRegisterPage;
