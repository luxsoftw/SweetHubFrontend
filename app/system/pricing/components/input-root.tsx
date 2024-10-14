import { forwardRef } from "react";

interface InputRootProps {
   children: React.ReactNode;
}

export const InputRoot = forwardRef<HTMLDivElement, InputRootProps>(
   ({ children }, ref) => {
      return (
         <div ref={ref} className="flex flex-col gap-2">
            {children}
         </div>
      );
   },
);

InputRoot.displayName = "InputRoot";
