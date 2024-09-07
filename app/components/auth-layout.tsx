import { ReactNode } from "react";

interface AuthLayoutProps {
   children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
   return (
      <div className="flex min-h-screen w-full bg-blue-900 md:items-center md:justify-center">
         <div className="relative w-full overflow-hidden bg-white md:flex md:h-[85vh] md:max-h-full md:w-[95%] md:max-w-7xl md:rounded-3xl md:shadow-lg">
            {children}
         </div>
      </div>
   );
}
