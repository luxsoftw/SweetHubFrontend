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
         },
         colors: {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#00559E",
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
      },
   },
   plugins: [],
};
export default config;
