"use client";

import { AuthBackground } from "@/app/components/auth-background";
import { AuthButton } from "@/app/components/auth-button";
import { HeaderRegister } from "@/app/components/header-register";
import { Input } from "@/app/components/input-form/index";

const GeneralInformationRegisterPage = () => {
   return (
      <AuthBackground>
         <HeaderRegister title="Registrar" text="Informações Gerais" />
         <form action="">
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
