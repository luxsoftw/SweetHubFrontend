"use client";

import { AuthBackground } from "@/app/components/auth-background";
import { HeaderRegister } from "@/app/components/header-register";
import { Input } from "../../components/input-form/index";
import { AuthButton } from "@/app/components/auth-button";

const AddressRegisterPage = () => {
   return (
      <AuthBackground>
         <HeaderRegister title="Registrar" text="Informações de Endereço" />

         <Input.Root>
            <Input.Form type="text" placeholder="CEP" name="cep" />
            <Input.IconSearch />
         </Input.Root>

         <Input.Root>
            <Input.Form type="text" placeholder="ESTADO" name="state" />
         </Input.Root>

         <Input.Root>
            <Input.Form type="text" placeholder="CIDADE" name="city" />
         </Input.Root>

         <Input.Root>
            <Input.Form
               type="text"
               placeholder="ENDEREÇO COMPLETO"
               name="complete-address"
            />
         </Input.Root>

         <AuthButton title="FINALIZAR" onClick={() => {}} />
      </AuthBackground>
   );
};

export default AddressRegisterPage;
