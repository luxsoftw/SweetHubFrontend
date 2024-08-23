import { ReactNode } from "react";

interface RegisterBackgroundProps {
   children: ReactNode;
}

export function AuthBackground({ children }: RegisterBackgroundProps) {
   return (
      <div className="flex h-lvh items-center justify-center overflow-y-scroll border-x-[20px] border-y-[10px] border-[#004E90]">
         <div className="flex h-[100%] w-full max-w-md flex-col gap-9 overflow-y-scroll rounded-md border bg-white p-4 outline outline-[#004E90]">
            {children}
         </div>
      </div>
   );
}
