"use client";
import { useRouter } from "next/navigation";
import type { ButtonHTMLAttributes } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
}

export function AuthButton({ title }: AuthButtonProps) {
   const router = useRouter();

   return (
      <button
         onClick={() => {
            router.push("/register/informations");
         }}
         className="items-center justify-center rounded-md bg-[#F7A932] px-12 py-2 text-3xl font-light text-white"
      >
         {title}
      </button>
   );
}
