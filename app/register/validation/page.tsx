"use client";
import { AuthBackground } from "@/app/components/auth-background";
import { AuthButton } from "@/app/components/auth-button";
import { HeaderRegister } from "@/app/components/header-register";
import { useRouter } from "next/navigation";

const ValidationPage = () => {
   const router = useRouter();

   function handleGoBack() {
      router.back();
   }

   return (
      <AuthBackground>
         <HeaderRegister title="Validar" text="Verifique o seu E-mail" />
         <div className="flex h-full flex-col justify-around gap-10">
            <div>
               <p className="self-center text-balance text-center font-light text-black/55">
                  Enviamos um link para o seu e-mail.
                  <br />
                  {/* &nbsp; is a space to not cut "e-mail" */}
                  Por favor, clique nele para validar seu &nbsp; e-mail e
                  acessar o sistema
               </p>
            </div>
            <div className="flex flex-col gap-6 pt-10">
               <a className="text-wrap text-center text-[10px] font-light text-[#00559E]">
                  Não recebeu o link? Clique aqui parar enviarmos novamente
               </a>
               <AuthButton
                  type="button"
                  title="VOLTAR"
                  onClick={handleGoBack}
               />
            </div>
         </div>
      </AuthBackground>
   );
};

export default ValidationPage;
