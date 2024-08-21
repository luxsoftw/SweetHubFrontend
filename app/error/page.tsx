import Image from "next/image";
import Header from "../components/header";

function ErrorPage() {
   return (
      <>
         <div className="flex min-h-screen flex-col bg-[#00559E] bg-cover">
            <div className="h-[90px] w-full bg-header-404 bg-cover bg-no-repeat">
               <Header />
            </div>

            <section className="flex flex-grow flex-col items-center justify-center">
               <div className="relative w-full">
                  <Image
                     className="h-auto w-full"
                     src="/404Page.png"
                     alt="Página de Erro 404"
                     width={193}
                     height={100}
                  />
                  <Image
                     src="/404.png"
                     alt="Error 404"
                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                     width={193}
                     height={311}
                  />
               </div>

               <h1 className="mb-4 mt-10 w-[311px] text-center font-sans text-[30px] font-bold text-white">
                  Essa página não foi encontrada
               </h1>

               <button className="mt-12 h-[40px] w-[163px] rounded-3xl bg-[#F7A932] text-center font-sans text-3xl text-white">
                  VOLTAR
               </button>
            </section>
         </div>
      </>
   );
}

export default ErrorPage;
