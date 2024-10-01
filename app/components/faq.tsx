"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FaqProps {
   faqs: { id: number; question: string; answer: string }[];
}

const Faq = ({ faqs }: FaqProps) => {
   const [openIndex, setOpenIndex] = useState(null);
   const toggleFAQ = (index: any) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="mx-auto h-[360px] max-w-2xl px-2 py-4">
         <div className="space-y-2">
            {faqs.map((faq) => (
               <div
                  key={faq.id}
                  className={` ${
                     openIndex === faq.id ? "bg-white" : "bg-white text-black"
                  } `}
               >
                  <button
                     onClick={() => {
                        toggleFAQ(faq.id);
                     }}
                     className={`flex w-full items-center justify-between px-3 py-2 text-left focus:outline-none ${openIndex === faq.id && "bg-[#F7A932]"}`}
                  >
                     <span className="flex items-center gap-1 font-medium">
                        {faq.question}
                     </span>

                     <div
                        className={`rounded-sm bg-transparent ${
                           openIndex === faq.id
                              ? "rounded-md text-white"
                              : "bg-primary"
                        }`}
                     >
                        <IoIosArrowDown
                           className={`size-8 transform px-1 transition-transform duration-300 ${
                              openIndex === faq.id
                                 ? "rotate-180 text-white"
                                 : "text-[#F7A932]"
                           }`}
                        />
                     </div>
                  </button>

                  <div
                     className={`overflow-hidden text-xs transition-all duration-300 ${
                        openIndex === faq.id ? "max-h-screen" : "max-h-0"
                     }`}
                  >
                     <p
                        className={`my-2 px-5 ${
                           openIndex == faq.id && "py-2 text-black"
                        }`}
                     >
                        {faq.answer}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Faq;
