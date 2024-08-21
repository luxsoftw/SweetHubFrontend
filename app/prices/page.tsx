import Header from "../components/header";
import { IoShieldCheckmark } from "react-icons/io5";
import Button from "./Components/button";

const PricePage = () => {
   return (
      <div className="font-sans">
         <section className="relative z-10 h-[420px] w-full bg-bg-header bg-contain bg-no-repeat">
            <Header />
         </section>
         <section className="flex flex-col items-center gap-10 bg-white">
            <div className="flex flex-col items-center gap-3">
               <p>
                  <IoShieldCheckmark className="size-14 text-tertiary" />
               </p>
               <h1 className="w-full max-w-52 text-center text-3xl font-bold">
                  Comparativo dos planos
               </h1>
            </div>

            <article className="w-full max-w-xs rounded-md border shadow-rounded">
               <div className="flex flex-col items-center border-b border-tertiary p-2">
                  <h3 className="font-bold">Basico</h3>
                  <p className="font-bold">$0</p>
                  <p className="text-xs font-bold text-slate-400">por month</p>

                  <Button />
               </div>

               <div className="py-6">
                  <ul className="flex flex-col gap-2">
                     <li className="bg-orange-200 py-2 pl-2 text-xs font-light text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                     </li>
                     <li className="bg-orange-200 py-2 pl-2 text-xs font-light text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                     </li>
                     <li className="bg-orange-200 py-2 pl-2 text-xs font-light text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                     </li>
                     <li className="bg-orange-200 py-2 pl-2 text-xs font-light text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                     </li>
                  </ul>
               </div>
               <button className="text-xs font-bold text-slate-400">
                  Mostrar menos
               </button>
            </article>

            <article className="w-full max-w-xs rounded-md border shadow-rounded">
               <div className="flex flex-col items-center border-b border-tertiary p-2">
                  <h3 className="font-bold">Basico</h3>
                  <p className="font-bold">$0</p>
                  <p className="text-xs font-bold text-slate-400">por month</p>

                  <Button />
               </div>
               <button className="text-xs font-bold text-slate-400">
                  Mostrar menos
               </button>
            </article>

            <article className="w-full max-w-xs rounded-md border shadow-rounded">
               <div className="flex flex-col items-center border-b border-tertiary p-2">
                  <h3 className="font-bold">Basico</h3>
                  <p className="font-bold">$0</p>
                  <p className="text-xs font-bold text-slate-400">por month</p>

                  <Button />
               </div>
               <button className="text-xs font-bold text-slate-400">
                  Mostrar menos
               </button>
            </article>

            <div>
               <h4>Dúvidas frequentes</h4>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
               <ul>
                  <li>
                     1 opção
                     <p>Lorem ipsum dolor sit.</p>
                  </li>
                  <li>
                     2 opção
                     <p>Lorem ipsum dolor sit.</p>
                  </li>
                  <li>
                     3 opção
                     <p>Lorem ipsum dolor sit.</p>
                  </li>
                  <li>
                     4 opção
                     <p>Lorem ipsum dolor sit.</p>
                  </li>
                  <li>
                     5 opção
                     <p>Lorem ipsum dolor sit.</p>
                  </li>
               </ul>
            </div>
         </section>
         <section className="h-[420px] w-full bg-bg-header bg-contain bg-no-repeat">
            <footer>Footer é Aqui</footer>
         </section>
      </div>
   );
};

export default PricePage;
