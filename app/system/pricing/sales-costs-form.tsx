"use client";

import { Button } from "@/app/components/ui/button";
import { InputPricing } from "./components/input";
import { InputLabel } from "./components/input-label";
import { InputRoot } from "./components/input-root";

import { salesCostsFormAction } from "./actions";

export function SalesCostsForm() {
   return (
      <form action={salesCostsFormAction} className="flex flex-col gap-10">
         <div className="flex h-[78%] flex-row flex-wrap items-center justify-center gap-20 self-center p-12">
            <InputRoot>
               <InputLabel position="ct" htmlFor="hours-worked-per-day">
                  % Comissões de Vendas
               </InputLabel>
               <InputPricing
                  type="number"
                  name="hoursWorkedPerDay"
                  id="hours-worked-per-day"
                  size="lg"
                  placeholder="00,00%"
               />
            </InputRoot>

            <InputRoot>
               <InputLabel position="ct" htmlFor="total-monthly-fixed-costs">
                  % Imposto s/ Nota Fiscal
               </InputLabel>
               <InputPricing
                  type="number"
                  name="totalMonthlyFixedCosts"
                  id="total-monthly-fixed-costs"
                  size="lg"
                  placeholder="porcentagem de Impostos sobre a Nota Fiscal "
               />
            </InputRoot>

            <InputRoot>
               <InputLabel position="ct" htmlFor="total-hours-per-month">
                  % Taxa de Cartão (Maquininha)
               </InputLabel>
               <InputPricing
                  type="number"
                  name="totalHoursPerMonth"
                  id="total-hours-per-month"
                  size="lg"
                  placeholder="porcentagem da Taxa de Cartão"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel position="ct" htmlFor="labor-cost-per-hour">
                  % Imposto s/ Lucro (IRPJ e CSLL)
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
