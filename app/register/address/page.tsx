"use client";

import { AuthBackground } from "@/app/components/auth-background";
import { HeaderRegister } from "@/app/components/header-register";
import { Input } from "../../components/input-form/index";
import { AuthButton } from "@/app/components/auth-button";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

const AddressRegisterPage = () => {
   const router = useRouter();

   function handleGoTo(event: FormEvent) {
      event.preventDefault();
      router.push("/register/validation");
   }

   return (
      <AuthBackground>
         <HeaderRegister title="Registrar" text="Informações de Endereço" />
         <form
            onSubmit={handleGoTo}
            className="flex flex-col items-center gap-6"
         >
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
            <AuthButton type="submit" title="Continuar" />
         </form>
      </AuthBackground>
   );
};

export default AddressRegisterPage;
