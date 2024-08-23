import { ButtonHTMLAttributes } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface InputIconSearchProps
   extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function InputIconSearch({ ...rest }: InputIconSearchProps) {
   return (
      <button {...rest} type="button">
         <FaMagnifyingGlass size={18} className="text-black/60" />
      </button>
   );
}
