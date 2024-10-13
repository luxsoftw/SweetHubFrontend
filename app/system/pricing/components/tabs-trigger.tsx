import { TabsTrigger } from "@radix-ui/react-tabs";

interface TabsTriggerPricingProps {
   value: string;
   children: React.ReactNode;
}

export function TabsTriggerPricing({
   value,
   children,
}: TabsTriggerPricingProps) {
   return (
      <TabsTrigger
         value={value}
         className="text-[#656B77] data-[state=active]:text-blue-500"
      >
         {children}
      </TabsTrigger>
   );
}
