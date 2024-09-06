import { ReactNode, type LabelHTMLAttributes } from "react";

interface InputRootProps extends LabelHTMLAttributes<HTMLLabelElement> {
   children: ReactNode;
}

export function InputRoot({ children, ...rest }: InputRootProps) {
   return (
      <label
         {...rest}
         className="flex w-full flex-row items-center justify-between rounded-md border border-black/40 px-2 ring-[#F7A932] ring-offset-2 focus-within:border-none focus-within:ring-1"
      >
         {children}
      </label>
   );
}
