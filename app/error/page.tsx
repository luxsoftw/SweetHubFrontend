import Image from "next/image";
import Header from "../components/header";

function ErrorPage() {
   return (
      <>
         <div className="flex min-h-screen flex-col bg-[#00559E] bg-cover">
            {/* Header com altura flexível */}
            <div className="h-[20vh] w-full bg-header-404 bg-cover bg-bottom bg-no-repeat lg:h-[35vh]">
               <Header color="text-secondary" />
            </div>

            {/* Section que ocupa o restante da tela */}
            <section className="flex w-[100%] items-center justify-center pt-10 sm:pt-28 lg:pt-0">
               {/* Conteúdo flexível lado a lado */}
               <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-8">
                  <div className="relative flex w-full max-w-[600px] items-center justify-center text-center sm:pl-4 md:max-w-[400px] lg:pl-0">
                     {/* Imagem para telas menores */}
                     <Image
                        className="w-[100px] sm:hidden"
                        src="/404Page.png"
                        alt="Página de Erro 404"
                        quality={100}
                        layout="responsive"
                        width={193}
                        height={100}
                     />
                     {/* Imagem 404 */}
                     <Image
                        src="/404.png"
                        alt="Error 404"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/4 lg:-translate-x-[55%] lg:-translate-y-3.5"
                        width={193}
                        height={311}
                     />
                     {/* Imagem para telas maiores */}
                     <Image
                        className="hidden w-full sm:block sm:h-auto"
                        src="/Lg404Page.png"
                        alt="Página de Erro 404 no tamanho lg"
                        width={500}
                        height={500}
                     />
                  </div>

                  <div className="hidden h-[280px] w-1 bg-black/10 md:block"></div>

                  <div className="text-center sm:text-left">
                     <h1 className="mb-4 mt-10 text-[30px] font-bold text-white md:w-full lg:text-[34px] xl:text-[36px]">
                        Essa página não foi encontrada
                     </h1>
                     <p className="hidden pb-8 sm:text-lg lg:flex lg:text-2xl lg:text-white xl:mb-6">
                        Você pode ficar e relaxar aqui ou voltar ao início.
                     </p>
                     <button className="mt-12 h-[40px] w-[163px] rounded-3xl bg-[#F7A932] text-center text-3xl text-white sm:h-[50px] sm:w-[180px] sm:text-2xl md:mt-0 lg:h-[55px] lg:w-[200px] lg:text-3xl xl:h-[60px] xl:w-[271px]">
                        VOLTAR
                     </button>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
}

export default ErrorPage;
