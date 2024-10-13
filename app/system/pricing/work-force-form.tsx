"use client";

import { Button } from "@/app/components/ui/button";
import { InputPricing } from "./components/input";
import { InputLabel } from "./components/input-label";
import { InputRoot } from "./components/input-root";

import { workForceFormAction } from "./actions";

export function WorkForceForm() {
   return (
      <form action={workForceFormAction} className="flex flex-col gap-10">
         <div className="flex h-[78%] flex-row flex-wrap items-center justify-center gap-20 self-center p-12">
            <InputRoot>
               <InputLabel htmlFor="days-worked-per-month">
                  Dias Trabalhados/mês
               </InputLabel>
               <InputPricing
                  type="number"
                  name="daysWorkedPerMonth"
                  id="days-worked-per-month"
                  size="lg"
                  placeholder="Digite  quantos dias por mês você trabalha"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel htmlFor="hours-worked-per-day">
                  Horas trabalhadas/dia
               </InputLabel>
               <InputPricing
                  type="number"
                  name="hoursWorkedPerDay"
                  id="hours-worked-per-day"
                  size="lg"
                  placeholder="Digite  suas horas Trabalhadas por dia"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel htmlFor="total-monthly-fixed-costs">
                  Total dos Custos Fixos Mensais
               </InputLabel>
               <InputPricing
                  type="number"
                  name="totalMonthlyFixedCosts"
                  id="total-monthly-fixed-costs"
                  size="lg"
                  placeholder="R$ 983293,00"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel htmlFor="total-hours-per-month">
                  Total de Horas no Mês
               </InputLabel>
               <InputPricing
                  type="number"
                  name="totalHoursPerMonth"
                  id="total-hours-per-month"
                  size="lg"
                  placeholder="160"
               />
            </InputRoot>
            <InputRoot>
               <InputLabel htmlFor="labor-cost-per-hour">
                  Valor da Mão de Obra/Hora
               </InputLabel>
               <InputPricing
                  type="number"
                  name="laborCostPerHour"
                  id="labor-cost-per-hour"
                  size="lg"
                  placeholder="R$ 17,98"
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
