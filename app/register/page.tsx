"use client";

import { AuthBackground } from "../components/auth-background";
import { AuthButton } from "../components/auth-button";
import { HeaderRegister } from "../components/header-register";
import InputForm from "../components/input-form";
import { CheckBoxTerm } from "./components/checkbox-term";

const RegisterPage = () => {
   return (
      <AuthBackground>
         <HeaderRegister title="Registrar" text="Registrar com E-mail" />
         <form action="">
            <InputForm name="name" placeholder="Nome" />
            <InputForm name="email" placeholder="Email" />
            <InputForm type="tel" name="cellphone" placeholder="Número" />

            <div className="flex flex-row gap-3">
               <label className="flex w-36 rounded-md border border-black/50 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1">
                  <input
                     placeholder="Senha"
                     type="password"
                     className="h-10 w-32 rounded-md bg-transparent px-5 text-start outline-none"
                  />
               </label>

               <label className="flex w-36 items-center rounded-md border border-black/50 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1">
                  <input
                     type="password"
                     placeholder="Repetir Senha"
                     className="h-10 w-32 rounded-md bg-transparent px-3 text-start outline-none"
                  />
               </label>
            </div>
            <CheckBoxTerm text="Aceito receber contato no Whatsapp" />
            <AuthButton type="submit" title="CONTINUAR" />
         </form>
      </AuthBackground>
   );
};

export default RegisterPage;
