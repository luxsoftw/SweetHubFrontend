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
                  <img
                     className="h-auto w-full"
                     src="/404Page.png"
                     alt="Página de Erro 404"
                  />
                  <img
                     src="/404.png"
                     alt=""
                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                  />
               </div>

               <h1 className="mb-4 mt-10 w-[311px] text-center font-sans text-[30px] font-bold text-white">
                  Essa página não foi encontrada
               </h1>

               <button className="font-open-sans mt-16 h-[40px] w-[163px] rounded-[39px] bg-[#F7A932] text-center text-2xl font-normal uppercase leading-normal text-white">
                  VOLTAR
               </button>
            </section>
         </div>
      </>
   );
}

export default ErrorPage;
