"use client";

import { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputForm({ ...rest }: InputFormProps) {
   return (
      <label className="flex flex-row items-center rounded-md border border-black/50 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1">
         <input
            {...rest}
            className="h-10 w-[18rem] rounded-md bg-transparent px-5 outline-none"
         />
      </label>
   );
}
