"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputFormContact = forwardRef<HTMLInputElement, InputFormProps>(
   ({ ...rest }, ref) => {
      return (
         <label className="flex flex-row items-center rounded-md border border-primary px-2 ring-[#F7A932] focus-within:border-none focus-within:ring-2">
            <input
               {...rest}
               ref={ref}
               type="text"
               className="h-10 w-[18.5rem] rounded-md bg-transparent px-5 text-primary outline-none placeholder:text-primary focus:text-[#F7A932] focus:placeholder:text-[#F7A932]"
            />
         </label>
      );
   },
);

InputFormContact.displayName = "InputFormContact";
