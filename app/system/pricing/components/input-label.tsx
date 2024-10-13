import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import React, { forwardRef } from "react";

const labelVariants = cva("text-sm text-black", {
   variants: {
      position: {
         default: "text-left",
         ct: "text-center",
         rg: "text-right",
      },
      variant: {
         default: "text-sm",
         outline: "text-red-600",
      },
   },
   defaultVariants: {
      variant: "default",
      position: "default",
   },
});

// export interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
//    children: React.ReactNode;
// }

export interface LabelProps
   extends React.LabelHTMLAttributes<HTMLLabelElement>,
      VariantProps<typeof labelVariants> {
   children: React.ReactNode;
}

export const InputLabel = forwardRef<HTMLLabelElement, LabelProps>(
   ({ children, variant, position, className, ...rest }, ref) => {
      return (
         <label
            ref={ref}
            className={cn(labelVariants({ variant, position, className }))}
            {...rest}
         >
            {children}
         </label>
      );
   },
);

InputLabel.displayName = "InputLabel";
