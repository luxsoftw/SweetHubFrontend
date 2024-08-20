"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MenuMobile from "../components/menu-mobile";

const Contact = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="flex h-screen items-center justify-center bg-[#00559E]">
         <div className="h-[640px] w-[350px] max-w-md rounded-lg bg-blue-900 p-8 shadow-lg">
            <section id="contact-header" className="flex justify-between">
               <div>
                  <h2 className="text-3xl font-bold text-white">Contato</h2>
                  <img className="mt-4" src="/active-indicator.png" alt="" />
               </div>
               <button className="mb-4" onClick={toggleMenu}>
                  <IoMenu className="size-8 text-white" />
               </button>

               {isOpen && (
                  <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
               )}
            </section>

            <form className="mt-5">
               <div className="mb-4">
                  <input
                     type="text"
                     placeholder="Qual o seu nome? *"
                     className="w-full rounded-md border border-white bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-transparent"
                  />
               </div>

               <div className="mb-4">
                  <input
                     type="email"
                     placeholder="Qual o seu email? *"
                     className="focus:[#F7A932] w-full rounded-md border border-[#F7A932] bg-transparent p-2 text-[#F7A932] placeholder:text-[#F7A932] focus:outline-none focus:ring-2"
                  />
               </div>

               <div className="mb-4">
                  <input
                     type="tel"
                     placeholder="Qual o seu número de telefone? *"
                     className="focus:[#F7A932] w-full rounded-md border border-[#F7A932] bg-transparent p-2 text-[#F7A932] placeholder:text-[#F7A932] focus:outline-none focus:ring-2"
                  />
               </div>

               <div className="mb-4">
                  <input
                     type="text"
                     placeholder="Qual nome da sua empresa?"
                     className="w-full rounded-md border border-white bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-1 focus:ring-[#F7A932]"
                  />
               </div>

               <div className="mb-4">
                  <textarea
                     placeholder="Escreva sua mensagem."
                     className="w-full rounded-md border border-white bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-transparent"
                     rows={4}
                  ></textarea>
               </div>

               <div className="mb-4 flex items-center">
                  <input
                     type="checkbox"
                     id="terms"
                     className="mr-2 flex size-5 accent-[#F7A932]"
                  />
                  <label
                     htmlFor="terms"
                     className="text-[14px] font-normal text-white"
                  >
                     Li e aceito os Termos de Serviço e a{" "}
                     <h1 className="text-[#F7A932]">
                        Política de Privacidade *
                     </h1>
                  </label>
               </div>

               <button
                  type="submit"
                  className="w-full rounded-md bg-[#F7A932] p-3 text-center font-normal text-white hover:bg-yellow-500"
               >
                  ENVIAR
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
