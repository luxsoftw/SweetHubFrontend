"use client";

import { PiEyeBold, PiEyeSlashBold } from "react-icons/pi";

interface InputIconProps {
   onAction: () => void;
   show: boolean;
}

export function InputIconPassShow({ show, onAction, ...rest }: InputIconProps) {
   return (
      <button {...rest} type="button" onClick={onAction}>
         {show ? (
            <PiEyeSlashBold className="size-8 px-1 text-black/50" />
         ) : (
            <PiEyeBold className="size-8 px-1 text-black/50" />
         )}
      </button>
   );
}
