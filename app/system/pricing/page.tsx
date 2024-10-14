import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";

import { WorkForceForm } from "./work-force-form";
import { SalesTargetForm } from "./sales-target-form";
import { PriceFormationForm } from "./price-formation-form";
import { TabsTriggerPricing } from "./components/tabs-trigger";
import { SalesCostsForm } from "./sales-costs-form";

import { Separator } from "@/app/components/ui/separator";

function PricingPage() {
   return (
      <Tabs
         defaultValue="fixedCosts"
         className="it ms-center flex flex-col justify-center overflow-hidden px-5"
      >
         <TabsList className="flex w-full flex-row items-start gap-10 px-10 py-5">
            <TabsTriggerPricing value="fixedCosts">
               Custos Fixos e Mão de Obra
            </TabsTriggerPricing>
            <TabsTriggerPricing value="salesCosts">
               Custos de Venda
            </TabsTriggerPricing>
            <TabsTriggerPricing value="salesTarget">
               Meta de Faturamento
            </TabsTriggerPricing>
            <TabsTriggerPricing value="priceFormation">
               Markup Formação de Preços
            </TabsTriggerPricing>
         </TabsList>

         <Separator />

         <TabsContent value="fixedCosts">
            <WorkForceForm />
         </TabsContent>
         <TabsContent value="salesCosts">
            <SalesCostsForm />
         </TabsContent>
         <TabsContent value="salesTarget">
            <SalesTargetForm />
         </TabsContent>
         <TabsContent value="priceFormation">
            <PriceFormationForm />
         </TabsContent>
      </Tabs>
   );
}

export default PricingPage;
