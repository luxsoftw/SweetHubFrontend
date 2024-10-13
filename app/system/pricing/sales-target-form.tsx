"use client";

import { Button } from "@/app/components/ui/button";
import { InputPricing } from "./components/input";
import { InputLabel } from "./components/input-label";
import { InputRoot } from "./components/input-root";

import { salesTargetFormAction } from "./actions";

export function SalesTargetForm() {
   return (
      <form action={salesTargetFormAction} className="flex flex-col gap-10">
         <div className="flex h-[78%] flex-col flex-wrap items-center justify-center gap-20 self-center p-12">
            <InputRoot>
               <InputLabel position="ct" htmlFor="sales-estimated">
                  Faturamento Desejado/Estimado
               </InputLabel>
               <InputPricing
                  type="number"
                  name="salesEstimated"
                  id="sales-estimated"
                  size="lg"
                  placeholder="Digite o Faturamento Desejado"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel position="ct" htmlFor="costs-relative-to-revenue">
                  % Gastos sobre Faturamento
               </InputLabel>
               <InputPricing
                  type="number"
                  name="costsRelativeToRevenue"
                  id="costs-relative-to-revenue"
                  size="lg"
                  placeholder="00,00%"
               />
            </InputRoot>
         </div>

         <div className="flex flex-col items-center">
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
