import { ReactNode } from "react";

interface InputErrorMessageProps {
   children: ReactNode;
}

const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
   return <div className="w-full text-xs text-red-500">{children}</div>;
};

export default InputErrorMessage;
