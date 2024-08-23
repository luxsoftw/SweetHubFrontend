"use client";

import { AuthBackground } from "@/app/components/auth-background";
import { AuthButton } from "@/app/components/auth-button";
import { HeaderRegister } from "@/app/components/header-register";
import { Input } from "@/app/components/input-form/index";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

const GeneralInformationRegisterPage = () => {
   const router = useRouter();

   function handleGoTo(event: FormEvent) {
      event.preventDefault();
      router.push("/register/address");
   }

   return (
      <AuthBackground>
         <HeaderRegister title="Registrar" text="Informações Gerais" />
         <form
            onSubmit={handleGoTo}
            className="flex flex-col items-center gap-6"
         >
            <Input.Root>
               <Input.Form type="text" placeholder="CNPJ" />
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
               <Input.Form name="corporate-name" placeholder="Razão Social" />
            </Input.Root>

            <Input.Root>
               <Input.Form name="brand-name" placeholder="Nome Fantasia" />
            </Input.Root>

            <AuthButton type="submit" title="Continuar" />
         </form>
      </AuthBackground>
   );
};

export default GeneralInformationRegisterPage;
