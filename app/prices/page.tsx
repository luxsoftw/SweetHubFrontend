import Header from "../components/header";
import { IoShieldCheckmark } from "react-icons/io5";
import Footer from "../components/footer";
import Faq from "../components/faq";
import { Card } from "./Components/card";
import { listfaqs } from "../lib/faqs";

const PricePage = () => {
   return (
      <section className="font-sans">
         <section className="h-[110px] w-full bg-wave-header bg-cover bg-bottom bg-no-repeat pt-2 text-primary">
            <Header color="text-primary" />
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

            <Card color="white" price={0} plan="Basico" />
            <Card color="blue" price={0} plan="Basico" />
            <Card color="white" price={0} plan="Basico" />
            <div className="mt-10 flex flex-col items-center gap-20">
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
