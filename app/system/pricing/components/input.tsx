import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const inputVariants = cva(
   "flex h-10 w-full rounded-md border bg-[#F5F6FA] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
   {
      variants: {
         size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 w-60 px-3",
            lg: "h-11 w-80 px-8",
         },
         variant: {
            default: "border border-input",
            outline: "border border-input bg-background",
            filled: "bg-input text-input-foreground",
         },
      },
      defaultVariants: {
         size: "default",
         variant: "default",
      },
   },
);

type OmittedInputAttributes = Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
   "size"
>;

export interface InputPricingProps
   extends OmittedInputAttributes,
      VariantProps<typeof inputVariants> {}

export const InputPricing = forwardRef<HTMLInputElement, InputPricingProps>(
   ({ className, size = "default", variant = "default", ...rest }, ref) => {
      // Ensure size and variant have default values
      return (
         <div className={`flex flex-col`}>
            <input
               ref={ref}
               type="number"
               className={cn(inputVariants({ size, variant }), className)}
               {...rest}
            />
         </div>
      );
   },
);

InputPricing.displayName = "InputPricing";
