import { IoPlayOutline } from "react-icons/io5";
import Header from "./components/header";

export default function Home() {
   return (
      <div className="text-primary">
         <section className="h-[700px] bg-bg-header bg-contain bg-no-repeat">
            <Header />
            <section className="flex flex-col items-center gap-4 pt-2">
               <h1 className="text-2xl font-light">
                  Revolucio seu <span className="font-semibold">Negócio</span>
               </h1>

               <p className="w-[258px] text-center text-sm">
                  Experimente a inovação que vai otimizar seus processos,
                  aumentar sua produtividade e levar sua empresa ao próximo
                  nível. Teste grátis por 30 dias!
               </p>

               <div className="flex items-center gap-1">
                  <a className="rounded-full bg-[#F7A932] p-1 text-secondary">
                     <IoPlayOutline />
                  </a>

                  <p className="text-xs font-light">ASSISTIR VIDEO</p>
               </div>

               <button className="rounded-3xl bg-[#F7A932] px-5 text-lg font-semibold">
                  COMEÇAR
               </button>
            </section>
         </section>
      </div>
   );
}
