"use client";

import { InputHTMLAttributes, useState } from "react";
import { PiEyeBold, PiEyeSlashBold } from "react-icons/pi";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInputForm({ ...rest }: InputFormProps) {
   const [showPassword, setShowPassword] = useState<boolean>(false);

   function handleChangeVisibility() {
      setShowPassword(!showPassword);
   }

   return (
      <label className="flex flex-row items-center rounded-md border border-black/50 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1">
         <input
            {...rest}
            type={showPassword ? "text" : "password"}
            className="h-10 w-[16rem] rounded-md bg-transparent px-5 outline-none"
         />
         <button type="button" onClick={handleChangeVisibility}>
            {showPassword ? (
               <PiEyeSlashBold className="size-8 px-1 text-black/50" />
            ) : (
               <PiEyeBold className="size-8 px-1 text-black/50" />
            )}
         </button>
      </label>
   );
}
