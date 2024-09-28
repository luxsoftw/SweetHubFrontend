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
               <main className="overflow-auto p-6">{children}</main>
            </HeaderSystem>
         </div>
      </>
   );
}
