const PlanCard = () => {
   return (
      <div className="flex w-[237px] flex-col items-center gap-3 overflow-hidden rounded-2xl text-secondary/50 shadow-rounded">
         <h1 className="pt-3 text-2xl text-[#00559E]">INICIAL</h1>
         <h2 className="text-4xl font-bold">Free</h2>
         <div className="flex flex-col items-center gap-1">
            <p>Nam sollicitudin dignissim</p>

            <div className="flex gap-2">
               <div className="h-[1px] w-[7px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[7px] bg-black/20"></div>
            </div>
         </div>

         <div className="flex flex-col items-center gap-1">
            <p>Cras convallis lacus</p>

            <div className="flex gap-2">
               <div className="h-[1px] w-[7px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[7px] bg-black/20"></div>
            </div>
         </div>

         <div className="flex flex-col items-center gap-1">
            <p>Quisque ut metus</p>

            <div className="flex gap-2">
               <div className="h-[1px] w-[7px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[12px] bg-black/20"></div>
               <div className="h-[1px] w-[7px] bg-black/20"></div>
            </div>
         </div>

         <div className="mt-2 flex w-full flex-col items-center gap-3 bg-[#00559E]/50">
            <p className="pt-3 text-center text-xs">
               Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>

            <button className="mb-3 rounded-xl bg-[#00559E] px-5 py-[2px] text-xs font-light text-primary">
               CHOOSE PLAN
            </button>
         </div>
      </div>
   );
};

export default PlanCard;
