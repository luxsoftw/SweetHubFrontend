import { ReactNode } from "react";

interface InvolveInputErrorProps {
   children: ReactNode;
}

const InvolveInputError = ({ children }: InvolveInputErrorProps) => {
   return (
      <div className="botton-[-10px] left-0 mb-[-10px] md:absolute">
         {children}
      </div>
   );
};

export default InvolveInputError;
