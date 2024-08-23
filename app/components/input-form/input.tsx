import type { InputHTMLAttributes } from "react";

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputForm({ ...rest }: InputRootProps) {
   return (
      <input
         {...rest}
         className="h-10 w-[18rem] rounded-md bg-transparent px-5 outline-none"
      />
   );
}
