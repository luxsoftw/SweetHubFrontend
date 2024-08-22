"use client";
import type { ButtonHTMLAttributes } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
}

export function AuthButton({ title }: AuthButtonProps) {
   return (
      <button className="w-full items-center justify-center rounded-md bg-[#F7A932] px-12 py-2 text-3xl font-light text-white">
         {title}
      </button>
   );
}
