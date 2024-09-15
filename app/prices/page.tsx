import Header from "../components/header";
import { IoShieldCheckmark } from "react-icons/io5";
import Footer from "../components/footer";
import Faq from "../components/faq";
import { Card } from "./Components/card";

const PricePage = () => {
   const faqData = [
      {
         id: 1,
         question: "background-image: linear-gradient?",
         answer:
            "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
      },
      {
         id: 2,
         question: "background-image: linear-gradient?",
         answer:
            "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
      },
      {
         id: 3,
         question: "background-image: linear-gradient?",
         answer:
            "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
      },
      {
         id: 4,
         question: "background-image: linear-gradient?",
         answer:
            "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
      },
      {
         id: 5,
         question: "background-image: linear-gradient?",
         answer:
            "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
      },
   ];

   return (
      <div className="font-sans">
         <section className="h-56 w-full bg-wave-header bg-cover bg-bottom bg-no-repeat text-white md:h-72">
            <Header color={"text-primary"} />
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

            <article className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-baseline lg:justify-center">
               <div className="flex flex-col items-center gap-10">
                  <h4 className="text-2xl font-medium uppercase text-gray-400">
                     Dúvidas frequentes
                  </h4>
                  <span className="h-1 w-1/2 bg-amber-400"> </span>

                  <p className="w-5/6 text-center">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </div>
               <Faq faqs={faqData} />
            </article>
         </section>
         <section className="text-white lg:text-black">
            <Footer />
         </section>
      </div>
   );
};

export default PricePage;
