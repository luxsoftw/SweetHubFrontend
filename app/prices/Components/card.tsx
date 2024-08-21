"use client";

import { useState } from "react";
import { ButtonHire } from "./button";
import { ItemList } from "./itemListDescription";

interface informationProps {
   color: string;
   price: number;
   plan: string;
}

export const Card = ({ color, price, plan }: informationProps) => {
   const [toogleDetails, setToogleDetails] = useState(false);
   const showDetails = () => {
      setToogleDetails((prev) => !prev);
   };

   return (
      <>
         <article
            className={`w-full max-w-72 rounded-xl border shadow-rounded ${color === "white" ? "bg-white" : "bg-blue-800"}`}
            onClick={() => {
               showDetails();
            }}
         >
            <div className="flex flex-col items-center border-b border-tertiary p-2">
               <h3
                  className={`text-2xl font-bold ${color === "blue" && "text-white"}`}
               >
                  {plan}
               </h3>
               <p className={`font-bold ${color === "blue" && "text-white"}`}>
                  ${price},00
               </p>
               <p className="text-xs font-bold text-slate-400">por month</p>

               <ButtonHire />
            </div>

            <div
               className={`overflow-hidden transition-all duration-1000 ${toogleDetails === false ? "h-0" : "h-max py-6"} `}
            >
               <ul className="flex flex-col gap-2">
                  <ItemList text="Lorem ipsum dolor sit amet, consectetur adipisicing" />
                  <ItemList text="Lorem ipsum dolor sit amet, consectetur adipisicing" />
                  <ItemList text="Lorem ipsum dolor sit amet, consectetur adipisicing" />
                  <ItemList text="Lorem ipsum dolor sit amet, consectetur adipisicing" />
               </ul>
            </div>
            <button className="ml-auto block p-4 text-xs font-bold text-slate-400">
               Mostrar {toogleDetails === false ? "detalhes" : "menos"}
            </button>
         </article>
      </>
   );
};
