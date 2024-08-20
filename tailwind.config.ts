import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            "bg-header": "url('/bgheader.png')",
            gestao: "url('/rectangle.png')",
            faq: "url('/bgfaq.png')",
            "header-404": "url('/bg-header-error.png')",
         },
         colors: {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#00559E",
         },
         boxShadow: {
            shape: "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
            rounded:
               "1px 0px 10px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1), 0px -2px 8px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
         },
         keyframes: {
            menubar: {
               "0%": { transform: "translateX(200%)" },
               "100%": { transform: "translateX(0%)" },
            },
            closemenubar: {
               "0%": { transform: "translateX(0%)" },
               "100%": { transform: "translateX(200%)" },
            },
            opacity: {
               "0%": { opacity: "0" },
               "100%": { opacity: "1" },
            },
            closeopacity: {
               "0%": { opacity: "1" },
               "100%": { opacity: "0" },
            },
         },
         animation: {
            menubar: "menubar 0.5s ease-in-out",
            closemenubar: "closemenubar 0.5s ease-in-out",
            opacity: "opacity 0.5s ease-in-out",
            closeopacity: "closeopacity 0.5s ease-in-out",
         },
         rotate: {
            "88-393": "88.393deg",
         },
      },
   },
   plugins: [],
};
export default config;
