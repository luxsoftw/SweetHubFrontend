"use client";

import type { InputHTMLAttributes } from "react";

interface CheckBoxTermProps extends InputHTMLAttributes<HTMLInputElement> {
   text: string;
}

export function CheckBoxTerm({ text, ...rest }: CheckBoxTermProps) {
   return (
      <div className="flex flex-row items-center gap-3 pr-10">
         <input
            type="checkbox"
            name="terms"
            className="size-5 accent-[#F7A932]"
            {...rest}
         />
         <p className="text-wrap text-sm font-normal">{text}</p>
      </div>
   );
}
