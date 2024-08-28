import Header from "../components/header";
import { IoShieldCheckmark } from "react-icons/io5";
import Footer from "../components/footer";
import Faq from "../components/faq";
import { Card } from "./Components/card";
import { listfaqs } from "../lib/faqs";

const PricePage = () => {
   return (
      <div className="font-sans">
         <section className="h-56 w-full bg-wave-header bg-cover bg-bottom bg-no-repeat text-white md:h-72">
            <Header />
         </section>

         <section className="flex flex-col items-center gap-10 bg-white">
            <div className="flex flex-col items-center gap-3">
               <p>
                  <IoShieldCheckmark className="text-6xl text-tertiary" />
               </p>

               <h1 className="w-full max-w-52 text-center text-3xl font-bold">
                  Comparativo dos planos
               </h1>
            </div>

            <article className="m-auto flex w-full flex-col items-center gap-10 px-4 md:gap-5 lg:flex-row lg:justify-center">
               <Card color="white" price={0} plan="Free" />
               <Card color="blue" price={50} plan="Basico" />
               <Card color="white" price={100} plan="Premium" />
            </article>

            <div className="mt-10 flex flex-col items-center gap-10">
               <h4 className="text-2xl font-medium uppercase text-gray-400">
                  Dúvidas frequentes
               </h4>
               <span className="h-1 w-1/2 bg-amber-400"> </span>

               <p className="w-5/6 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>

            <Faq faqs={listfaqs} />
         </section>

         <Footer />
      </section>
   );
};

export default PricePage;
