import HeaderContact from "./components/header-contact";
import InputFormContact from "./components/input-form-contact";

import Image from "next/image";

const Contact = () => {
   return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#00559E] px-4 sm:px-6 lg:px-8">
         <div className="h-full w-full rounded-lg bg-blue-900 p-8 shadow-lg md:max-w-4xl md:rounded-3xl lg:h-[700px]">
            <div className="lg:hidden">
               <HeaderContact />
            </div>
            <button className="hidden lg:flex">
               <Image
                  className="h-[20px] w-[20px]"
                  src="/ios-close-empty.png"
                  alt="Ios Close"
                  quality={100}
                  width={193}
                  height={100}
               />
            </button>
            <section className="hidden text-white lg:flex lg:flex-col">
               <h1 className="text-center text-5xl font-bold">
                  Diga Olá para nós
               </h1>
               <h1 className="pt-2 text-center text-[25px] font-normal">
                  Entre em contato conosco a qualquer momento e responderemos o
                  mais rápido possível.
               </h1>
            </section>
            <section className="w-full">
               <form className="mt-7 flex w-full grid-cols-1 flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-4 md:gap-y-10">
                  <InputFormContact placeholder="Qual seu nome? *" />
                  <InputFormContact placeholder="Qual seu e-mail? *" />
                  <InputFormContact
                     type="tel"
                     placeholder="Qual seu telefone?"
                  />
                  <InputFormContact placeholder="Qual é a sua empresa?" />
                  <textarea
                     placeholder="Escreva sua mensagem aqui"
                     className="col-span-2 w-full rounded-md border border-white bg-transparent p-4 text-white placeholder:text-white focus:border-none focus:text-[#F7A932] focus:outline-none focus:ring-2 focus:ring-[#F7A932] focus:placeholder:text-[#F7A932]"
                     rows={4}
                  ></textarea>
                  <section className="col-span-2 flex flex-col gap-3 pt-10 md:flex-row md:items-center md:justify-around">
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           id="terms"
                           className="ml-3 mr-3 h-6 w-6 accent-[#F7A932] md:mr-4"
                        />
                        <label
                           htmlFor="terms"
                           className="font-normal text-white md:text-[20px]"
                        >
                           Li e aceito os Termos de Serviço e a{" "}
                           <span className="text-[#F7A932]">
                              Política de Privacidade *
                           </span>
                        </label>
                     </div>
                     <button
                        type="submit"
                        className="mt-0 hidden h-[50px] w-[250px] items-center justify-center rounded-3xl bg-[#F7A932] text-center font-normal text-white hover:bg-yellow-500 md:flex"
                     >
                        ENVIAR MENSAGEM
                     </button>
                     <button
                        type="submit"
                        className="mx-auto mt-3 flex h-[45px] w-full items-center justify-center rounded-md bg-[#F7A932] px-4 text-center font-normal text-white hover:bg-yellow-500 md:hidden"
                     >
                        ENVIAR
                     </button>
                  </section>
               </form>
            </section>
         </div>
      </div>
   );
};

export default Contact;
