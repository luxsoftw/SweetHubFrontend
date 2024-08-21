import HeaderContact from "./components/header-contact";
import InputFormContact from "./components/input-form-contact";

const Contact = () => {
   return (
      <div className="flex h-screen items-center justify-center bg-[#00559E]">
         <div className="h-[640px] w-[350px] max-w-md rounded-lg bg-blue-900 px-5 py-2 shadow-lg">
            <HeaderContact />

            <form className="mt-7 space-y-4">
               <InputFormContact placeholder="Qual o seu nome? *" />

               <InputFormContact placeholder="Qual o seu email? *" />

               <InputFormContact placeholder="Qual o seu número de telefone? *" />

               <InputFormContact placeholder="Qual nome da sua empresa?" />

               <textarea
                  placeholder="Escreva sua mensagem."
                  className="w-full rounded-md border border-white bg-transparent p-2 text-white placeholder:text-white focus:border-none focus:text-[#F7A932] focus:outline-none focus:ring-2 focus:ring-[#F7A932] focus:placeholder:text-[#F7A932]"
                  rows={4}
               ></textarea>

               <div className="flex items-center">
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
