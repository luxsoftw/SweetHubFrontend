interface PlanFeature {
   text: string;
}

type PlanType = "BASIC" | "PRO" | "ENTERPRISE" | "BEST VALUE";

export interface PlanCardProps {
   title: PlanType;
   price: string;
   features: PlanFeature[]; // array de vantages do plano
   ctaText: string; // texto do botão
   isBestValue?: boolean;
   onChoosePlan?: () => void; // opcional por enquanto
}
const Divider = () => {
   const listWidthLines: number[] = [7, 12, 12, 12, 12, 12, 12, 12, 7];
   return (
      <div className="flex gap-2">
         {listWidthLines.map((width, index) => (
            <div key={index} className={`h-[1px] w-[${width}px] bg-black/20`} />
         ))}
      </div>
   );
};

export function PlanCard({
   title,
   price,
   features,
   ctaText,
   onChoosePlan,
   isBestValue = false,
}: PlanCardProps) {
   return (
      <div
         className={`flex w-[263px] flex-col justify-between gap-3 overflow-hidden rounded-3xl text-secondary/50 shadow-rounded ${isBestValue ? "h-[450px]" : "h-[400px]"}`}
      >
         <div
            className={`flex flex-col items-center gap-5 p-3 ${isBestValue ? "rounded-xl bg-[#F7A932]" : "bg-[#fff]"}`}
         >
            <h2
               className={`pt-3 text-2xl text-[#00559E] md:text-base md:font-semibold ${isBestValue ? "text-white" : ""}`}
            >
               {title}
            </h2>
            {/*//TODO: change color if isBestValue is true*/}
            <p
               className={`text-4xl font-bold md:text-2xl ${isBestValue ? "text-white" : ""} `}
            >
               {price}
            </p>
         </div>

         <div className="flex flex-col items-center gap-3">
            {features.map((feature, index) => (
               <>
                  <p>{feature.text}</p>
                  {index < features.length - 1 && <Divider />}
               </>
            ))}
         </div>
         <div
            className={`mt-2 flex w-full flex-col items-center gap-5 ${isBestValue ? "bg-[#F7A932]/30" : "bg-[#00559E]/30"}`}
         >
            <p className="pt-3 text-center text-xs">
               Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>

            <button
               className={`mb-3 rounded-full ${isBestValue ? "bg-[#F7A932]" : "bg-[#00559E]"} px-5 py-[2px] text-sm font-light text-primary md:px-8 md:py-[4px] md:text-base`}
               onClick={onChoosePlan}
            >
               {ctaText}
            </button>
         </div>
      </div>
   );
}
