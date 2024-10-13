"use client";

import { Button } from "@/app/components/ui/button";
import { salesCostsFormAction } from "./actions";
import { InputPricing } from "./components/input";
import { InputLabel } from "./components/input-label";
import { InputRoot } from "./components/input-root";

export function PriceFormationForm() {
   const calculateMarkup = () => {
      console.log("Calculated Markup");
   };

   return (
      <form action={salesCostsFormAction} className="flex flex-col">
         <div className="flex h-[78%] flex-col flex-wrap items-center justify-center gap-5 self-center px-12 py-5">
            <InputRoot>
               <InputLabel position="ct" htmlFor="premium-products">
                  Produtos Premium
               </InputLabel>
               <InputPricing
                  type="number"
                  name="premiumProducts"
                  id="premium-products"
                  size="lg"
                  placeholder="00,00%"
               />
            </InputRoot>

            <InputRoot>
               <InputLabel position="ct" htmlFor="basic-products">
                  Produtos Básicos
               </InputLabel>
               <InputPricing
                  type="number"
                  name="basicProducts"
                  id="basic-products"
                  size="lg"
                  placeholder="00,00%"
               />
            </InputRoot>

            <InputRoot>
               <InputLabel position="ct" htmlFor="entry-products">
                  Produtos Entrada
               </InputLabel>
               <InputPricing
                  type="number"
                  name="entryProducts"
                  id="entry-products"
                  size="lg"
                  placeholder="00,00%"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel position="ct" htmlFor="sub-revenues">
                  Sub-Receitas
               </InputLabel>
               <InputPricing
                  type="number"
                  name="laborCostPerHour"
                  id="labor-cost-per-hour"
                  size="lg"
                  placeholder="porcentagem de Impostos sobre o Lucro"
               />
            </InputRoot>
         </div>

         <div className="flex flex-col items-center gap-5">
            <button
               onClick={calculateMarkup}
               className="py-2 font-medium text-[#F7A932]"
            >
               Calcular Markup
            </button>
            <Button
               type="submit"
               className="w-60 bg-[#00559E] hover:bg-blue-900"
               size="lg"
            >
               Salvar
            </Button>
         </div>
      </form>
   );
}
