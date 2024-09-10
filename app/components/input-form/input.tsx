import React, { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputForm = forwardRef<HTMLInputElement, InputRootProps>(
   ({ ...rest }, ref) => {
      return (
         <input
            {...rest}
            ref={ref}
            className="h-10 w-[18rem] rounded-md bg-transparent px-5 outline-none"
         />
      );
   },
);

InputForm.displayName = "InputForm";
