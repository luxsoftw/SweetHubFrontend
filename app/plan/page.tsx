import { HeaderRegister } from "../components/header-register";
import PlanCard from "../components/plan-card";

const ChoosePlanPage = () => {
   return (
      <div className="h- items-full center flex justify-center border-x-[20px] border-y-[10px] border-[#004E90]">
         <div className="flex h-full w-full max-w-md flex-col gap-16 rounded-md border bg-white p-4 outline outline-[#004E90]">
            <HeaderRegister title="Plano" text="Escolha seu plano" />

            <p className="w-[272px mx-auto text-center text-[.78rem]">
               Olá, Nome do Usuário! Você está a um passo de começar a usar
               nosso sistema. Escolha o plano ideal para o seu negócio.
            </p>

            <div className="flex flex-col items-center gap-20">
               <PlanCard />
               <PlanCard />
               <PlanCard />
               <PlanCard />
            </div>
         </div>
      </div>
   );
};

export default ChoosePlanPage;
