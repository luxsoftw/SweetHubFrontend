"use client";
import { AuthButton } from "@/app/components/auth-button";
import { AuthLayout } from "@/app/components/auth-layout";
import { AuthLeftSide } from "@/app/components/auth-left-side";
import { AuthRightSide } from "@/app/components/auth-right-side";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ValidationPage = () => {
   const router = useRouter();

   function handleGoBack() {
      router.back();
   }

   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
      router.back();
   };

   const handleToggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <AuthLayout>
         <AuthLeftSide handleClose={handleClose} />
         <AuthRightSide
            title="Validar"
            isOpen={isOpen}
            handleToggleMenu={handleToggleMenu}
         >
            <div className="flex flex-row items-center justify-center gap-5">
               <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               <h4 className="text-nowrap font-light text-black/50">
                  Verifique o seu email
               </h4>
               <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
            </div>

            <div className="flex h-full flex-col justify-between gap-32 pt-10 md:justify-around md:gap-5">
               <div>
                  <p className="self-center text-balance text-center font-light text-black/55 md:text-2xl">
                     Enviamos um link para o seu e-mail.
                     <br className="md:hidden" />
                     {/* &nbsp; is a space to not cut "e-mail" */}
                     Por favor, clique nele para validar seu &nbsp; e-mail e
                     acessar o sistema
                  </p>
               </div>
               <a className="hidden self-center text-wrap text-center font-light text-[#00559E] md:flex md:text-base">
                  Não recebeu o link? Clique aqui parar enviarmos novamente
               </a>
               <div className="flex flex-col items-center justify-center gap-20 pt-10">
                  <a className="text-wrap text-center text-[12px] font-light text-[#00559E] md:hidden md:text-base">
                     Não recebeu o link? Clique aqui parar enviarmos novamente
                  </a>
                  <AuthButton
                     type="button"
                     title="VOLTAR"
                     onClick={handleGoBack}
                  />
               </div>
            </div>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default ValidationPage;
