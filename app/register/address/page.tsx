"use client";

import { AuthButton } from "@/app/components/auth-button";
import { AuthRightSide } from "@/app/components/auth-right-side";
import { useRouter } from "next/router";
import { Input } from "@/app/components/input-form/index";
import { FormEvent, useState } from "react";
import { AuthLayout } from "@/app/components/auth-layout";
import { AuthLeftSide } from "@/app/components/auth-left-side";

const AddressRegisterPage = () => {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
      router.back();
   };

   const handleToggleMenu = () => {
      setIsOpen(!isOpen);
   };

   function handleGoTo(event: FormEvent) {
      event.preventDefault();
      router.push("/register/validation");
   }

   return (
      <AuthLayout>
         <AuthLeftSide handleClose={handleClose} />
         <AuthRightSide isOpen={isOpen} handleToggleMenu={handleToggleMenu}>
            <div className="flex flex-row items-center justify-center gap-5">
               <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               <h4 className="text-nowrap font-light text-black/50">
                  Informações de Localidade
               </h4>
               <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
            </div>
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
         </AuthRightSide>
      </AuthLayout>
   );
};

export default AddressRegisterPage;
