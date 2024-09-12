import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface CheckBoxTermProps extends InputHTMLAttributes<HTMLInputElement> {
   children: ReactNode;
}

export const CheckBoxTerm = forwardRef<HTMLInputElement, CheckBoxTermProps>(
   ({ children, ...rest }, ref) => {
      return (
         <div className="flex flex-row items-center gap-3 pr-10">
            <input
               type="checkbox"
               ref={ref}
               name="terms"
               className="size-5 accent-[#F7A932]"
               {...rest}
            />

            <p className="text-wrap text-sm font-normal">{children}</p>
         </div>
      );
   },
);

CheckBoxTerm.displayName = "CheckBoxTerm";
