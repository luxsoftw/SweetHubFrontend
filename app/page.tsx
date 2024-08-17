import { IoPlayOutline } from "react-icons/io5";
import Header from "./components/header";
import Image from "next/image";
import PlanCard from "./components/plan-card";

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

            <section className="relative z-10 flex items-center gap-5 px-5 pt-24">
               <div className="flex flex-col items-center text-secondary/50">
                  {/* teste grátis */}
                  <h1 className="text-2xl font-bold text-[#F7A932]">14 DIAS</h1>

                  <div className="flex items-center gap-3">
                     <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                     >
                        <path
                           d="M0 7.125L7.5 0V4.00003C14.5 5.00002 17 10 18 15C15.5 11.5 12.5 9.89991 7.5 9.89991V14L0 7.125Z"
                           fill="black"
                           opacity={0.54}
                        />
                     </svg>

                     <p>Teste Grátis</p>
                  </div>

                  <div className="mt-4 h-[1px] w-[120px] bg-[#00559E] shadow-lg"></div>

                  {/* usuarios */}
                  <h1 className="pt-5 text-2xl font-bold text-[#F7A932]">
                     +80M
                  </h1>

                  <div className="flex items-center gap-1">
                     <svg
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                     >
                        <path
                           d="M16.3533 10.7921C14.6319 10.1427 14.7358 10.4033 14.7358 9.19958C14.7358 8.42193 15.1225 8.70734 15.3678 7.22649C15.4635 6.64325 15.5425 7.03207 15.7462 6.09723C15.8543 5.60913 15.6714 5.5719 15.6963 5.34026C15.7171 5.10861 15.7379 4.89766 15.7795 4.42196C15.8294 3.82631 15.2971 2.271 13.3928 2.271C11.4884 2.271 10.9562 3.82631 11.0061 4.42196C11.0435 4.90179 11.0684 5.10861 11.0892 5.34026C11.11 5.5719 10.9312 5.60913 11.0393 6.09723C11.2431 7.03207 11.3221 6.63911 11.4177 7.22649C11.663 8.70734 12.0456 8.42606 12.0456 9.19958C12.0456 9.75387 12.1745 9.98551 11.426 10.3371C11.6506 10.4157 11.9125 10.5108 12.2285 10.6308C14.4905 11.4871 14.4364 12.3185 14.4947 12.7114C14.5362 12.9803 14.557 15.123 14.5653 15.8883H18.6277C18.6277 15.8883 18.6277 12.5584 18.5653 12.1696C18.5196 11.8635 18.108 11.4581 16.3533 10.7921Z"
                           fill="black"
                           opacity={0.54}
                        />
                        <path
                           d="M13.5135 15.8882C13.5135 15.8882 13.5135 15.3049 13.5052 14.6307C13.4969 13.8613 13.4761 12.9761 13.4345 12.7114C13.3722 12.3184 12.8399 11.7931 10.5821 10.9368C10.2703 10.821 10.0083 10.7259 9.77965 10.6431C8.39503 10.155 8.49482 9.99371 8.49482 8.65763C8.49482 7.65247 8.99379 8.30603 9.30979 6.39912C9.43454 5.64628 9.53433 6.1468 9.79628 4.94308C9.93766 4.31434 9.70065 4.2647 9.72975 3.96274C9.75886 3.66078 9.78797 3.39191 9.83786 2.77557C9.90439 2.01032 9.21832 0 6.75677 0C4.29523 0 3.61331 2.00619 3.67569 2.77557C3.72558 3.39191 3.75469 3.66078 3.78795 3.96274C3.81706 4.2647 3.58005 4.3102 3.72142 4.94308C3.98754 6.1468 4.08733 5.64628 4.21207 6.39912C4.52808 8.30603 5.02288 7.65247 5.02288 8.65763C5.02288 10.2129 5.1601 10.0971 2.93556 10.9368C0.677756 11.7931 0.145531 12.3184 0.0831603 12.7114C0 13.2119 0 15.8882 0 15.8882H6.75677H13.5135Z"
                           fill="black"
                           opacity={0.54}
                        />
                     </svg>

                     <p>Usuarios</p>
                  </div>

                  <div className="mt-4 h-[1px] w-[120px] bg-[#00559E] shadow-lg"></div>

                  {/* Lojas */}
                  <h1 className="pt-5 text-2xl font-bold text-[#F7A932]">
                     +180k
                  </h1>

                  <div className="flex items-center gap-2">
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                     >
                        <path
                           d="M0.283888 4.07158L7.26956 7.38152C7.45122 7.4666 7.69481 7.51116 7.93427 7.51116C8.17374 7.51116 8.41733 7.4666 8.59899 7.38152L15.5847 4.07158C15.9521 3.89738 15.9521 3.61378 15.5847 3.43958L8.59899 0.129643C8.41733 0.0445646 8.17374 0 7.93427 0C7.69481 0 7.45122 0.0445646 7.26956 0.129643L0.283888 3.43958C-0.0835617 3.61378 -0.0835617 3.89738 0.283888 4.07158Z"
                           fill="black"
                           opacity={0.54}
                        />
                        <path
                           d="M15.5846 7.4627C15.5846 7.4627 14.3089 6.85905 14.1396 6.77802C13.9703 6.69699 13.9249 6.70105 13.7474 6.78207C13.5698 6.8631 8.59482 9.22097 8.59482 9.22097C8.40903 9.30605 8.16956 9.35061 7.9301 9.35061C7.69064 9.35061 7.44705 9.30605 7.26539 9.22097C7.26539 9.22097 2.42248 6.92792 2.19541 6.81853C1.94769 6.70105 1.8775 6.70105 1.65456 6.80638C1.42335 6.91577 0.275587 7.45864 0.275587 7.45864C-0.0918624 7.63285 -0.0918624 7.91644 0.275587 8.09065L7.26126 11.4006C7.44292 11.4857 7.68651 11.5302 7.92597 11.5302C8.16543 11.5302 8.40903 11.4857 8.59069 11.4006L15.5764 8.09065C15.9521 7.9205 15.9521 7.6369 15.5846 7.4627Z"
                           fill="black"
                           opacity={0.54}
                        />
                        <path
                           d="M15.5844 11.4856C15.5844 11.4856 14.3086 10.882 14.1394 10.801C13.9701 10.7199 13.9247 10.724 13.7471 10.805C13.5696 10.886 8.59872 13.248 8.59872 13.248C8.41293 13.3331 8.17347 13.3776 7.93401 13.3776C7.69455 13.3776 7.45096 13.3331 7.2693 13.248C7.2693 13.248 2.42639 10.9549 2.19932 10.8455C1.9516 10.728 1.88141 10.728 1.65846 10.8334C1.42726 10.9428 0.279494 11.4856 0.279494 11.4856C-0.0879562 11.6599 -0.0879562 11.9434 0.279494 12.1177L7.26517 15.4276C7.44683 15.5167 7.69042 15.5572 7.92988 15.5572C8.16934 15.5572 8.41293 15.5127 8.59459 15.4276L15.5803 12.1177C15.9518 11.9434 15.9518 11.6599 15.5844 11.4856Z"
                           fill="black"
                           opacity={0.54}
                        />
                     </svg>

                     <p>Lojas</p>
                  </div>
               </div>

               <Image
                  src="/dashboard-mobile.png"
                  alt="Dashboard"
                  width={208}
                  height={348}
                  className="absolute right-0 top-20"
               />
            </section>
         </section>

         {/* gestão da Loja */}
         <section className="flex h-[1300px] flex-col items-center bg-gestao bg-cover bg-no-repeat">
            <section className="flex flex-col items-center pt-24 text-center">
               <h1 className="w-[200px] text-2xl font-semibold text-primary/50">
                  Domine a Gestão Da{" "}
                  <span className="text-primary">Sua Loja</span>
               </h1>

               <div className="ml-[-28px] h-[5px] w-[138px] rounded-md bg-[#F7A932]"></div>

               <p className="w-[260px] pt-10 font-extralight">
                  Controle de estoque, clientes e PDV em uma única plataforma.
                  Teste grátis!
               </p>

               <Image
                  src="/bitmap.png"
                  alt="Dashboard"
                  width={209}
                  height={210}
               />

               <button className="mt-20 rounded-xl bg-[#F7A932] p-1 px-3 text-sm text-secondary">
                  VER DETALHES
               </button>
            </section>

            <section className="flex flex-col items-center pt-20 text-center">
               <h1 className="w-[280px] text-2xl font-semibold text-primary/50">
                  Venda com <span className="text-primary">Flexibilidade</span>{" "}
                  e <span className="text-primary">Poder</span>
               </h1>

               <div className="h-[5px] w-[240px] rounded-md bg-[#F7A932]"></div>

               <p className="w-[280px] pt-10 font-extralight">
                  Página de vendas personalizável para se adaptar às suas
                  necessidades. Experimente grátis!
               </p>

               <Image
                  src="/bitmap.png"
                  alt="Dashboard"
                  width={209}
                  height={210}
               />

               <button className="mt-20 rounded-xl bg-[#F7A932] p-1 px-3 text-sm text-secondary">
                  VER DETALHES
               </button>
            </section>
         </section>

         <section className="flex flex-col items-center gap-32 py-14">
            <PlanCard />
            <PlanCard />
            <PlanCard />
            <PlanCard />
         </section>
      </div>
   );
}
