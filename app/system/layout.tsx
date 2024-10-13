import type { Metadata } from "next";
import { HeaderSystem } from "./components/header-system";
import { Sidebar } from "./components/sidebar";

export const metadata: Metadata = {
   title: "Dashboard",
   description: "Página de Visualização",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <div className="grid h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
            <Sidebar className="row-span-2" />
            <HeaderSystem>
               <main className="flex flex-col items-center overflow-hidden bg-[#F5F6FA] p-6">
                  <div className="h-full w-full rounded-xl bg-white">
                     {children}
                  </div>
               </main>
            </HeaderSystem>
         </div>
      </>
   );
}
