"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { AuthLayout } from "../components/auth-layout";
import { AuthLeftSide } from "../components/auth-left-side";
import { Input } from "../components/input-form/index";
import { CheckBoxTerm } from "../register/components/checkbox-term";
import MenuMobile from "../components/menu-mobile";

const LoginPage = () => {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

   const handleClose = () => {
      router.back();
   };

   const handleToggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <AuthLayout>
         <AuthLeftSide title="Bem vindo de volta" handleClose={handleClose} />
         <div className="flex w-full flex-col p-4 md:w-1/2 md:flex-grow md:p-8">
            <div className="flex w-full flex-col gap-10 p-4 md:flex-grow md:p-6">
               <header className="flex flex-row items-center justify-between md:flex md:items-center md:justify-between">
                  <FaArrowLeft size={30} className="md:hidden" />
                  <div className="flex flex-col items-center justify-center gap-2 md:flex md:items-start md:justify-start md:gap-5">
                     <h2 className="pb-2 text-3xl font-semibold md:text-5xl md:font-bold">
                        Entrar
                     </h2>
                     <div className="h-2 w-24 rounded-md bg-blue-600 md:h-3 md:w-20 md:rounded-md"></div>
                  </div>

                  <button className="md:hidden" onClick={handleToggleMenu}>
                     <IoMenu className="size-8 text-secondary" />
                  </button>

                  {isOpen && (
                     <MenuMobile
                        isOpen={isOpen}
                        toggleMenu={handleToggleMenu}
                     />
                  )}
               </header>

               <div className="flex flex-row items-center justify-center gap-5">
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
                  <h4 className="text-nowrap font-light text-black/50">
                     Ou entre com e-mail
                  </h4>
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               </div>

               <form className="mt-8 flex flex-col space-y-6">
                  <Input.Root>
                     <Input.Form
                        type="email"
                        name="email"
                        placeholder="E-mail"
                     />
                  </Input.Root>

                  <Input.Root>
                     <Input.Form
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Senha"
                     />
                     <Input.IconPass
                        onAction={handleShowPassword}
                        show={showPassword}
                     />
                  </Input.Root>

                  <div className="flex items-center justify-between">
                     <CheckBoxTerm text="Lembrar" />
                     <button
                        onClick={() => router.push("/register")}
                        type="button"
                        className="flex items-center gap-2 text-sm font-light text-[#00559E]"
                     >
                        <FaArrowRight className="ml-1" size={20} />
                        <p>Criar nova conta</p>
                     </button>
                  </div>

                  <button
                     type="submit"
                     className="w-full rounded bg-orange-400 p-2 text-white transition-colors hover:bg-orange-500 md:rounded-3xl md:text-base"
                  >
                     Continuar
                  </button>
               </form>
            </div>
         </div>
      </AuthLayout>
   );
};

export default LoginPage;
