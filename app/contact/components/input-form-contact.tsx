"use client";

import { InputHTMLAttributes, ReactNode } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
   children?: ReactNode;
}

export default function InputFormContact({ children }: InputFormProps) {
   return (
      <label className="flex flex-row items-center rounded-md border border-primary px-2 ring-[#F7A932] focus-within:border-none focus-within:ring-2">
         {children}
      </label>
   );
}
