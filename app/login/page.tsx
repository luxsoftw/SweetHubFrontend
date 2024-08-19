"use client";
import { FaArrowRight } from "react-icons/fa";
import { HeaderRegister } from "../components/header-register";
import PasswordInputForm from "../components/password-input-form";
import InputForm from "../components/input-form";

const LoginPage = () => {
   return (
      <div className="border-x-[20px] border-y-[10px] border-[#004E90]">
         <div className="flex flex-col gap-10 rounded-md border bg-white p-4 pb-[7.4rem] outline outline-[#004E90]">
            <HeaderRegister title="Entrar" text="Entrar com E-mail" />

            <form className="flex flex-col items-center justify-center gap-5">
               <InputForm type="email" name="email" placeholder="E-mail" />

               <PasswordInputForm
                  type="password"
                  name="password"
                  placeholder="Senha"
               />
               <div className="flex w-full flex-row items-center justify-between gap-8">
                  <label className="flex flex-row items-center">
                     <input
                        className="mx-2 size-4 border pr-2 accent-[#F7A932]"
                        type="checkbox"
                     />
                     <p className="font-light text-black/55">Lembrar</p>
                  </label>

                  <button className="flex flex-row items-center justify-between gap-1 font-light text-[#00559E]">
                     <FaArrowRight size={16} />
                     Criar nova conta
                  </button>
               </div>

               <button className="my-14 mb-[4.6rem] rounded-md bg-[#F7A932] px-20 py-2 text-3xl font-light text-white">
                  Continuar
               </button>
            </form>
         </div>
      </div>
   );
};

export default LoginPage;
