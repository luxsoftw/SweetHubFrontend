"use client";
import type { ButtonHTMLAttributes } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
}

export function AuthButton({ title, ...rest }: AuthButtonProps) {
   return (
      <button
         type="submit"
         className="w-full rounded bg-orange-400 p-2 text-white transition-colors hover:bg-orange-500 md:max-w-48 md:self-end md:rounded-3xl md:text-base"
         {...rest}
      >
         {title}
      </button>
   );
}
