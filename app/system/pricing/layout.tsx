import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Pricing",
   description: "Página de Precificação",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <div className="">{children}</div>
      </>
   );
}
