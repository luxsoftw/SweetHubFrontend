import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
   darkMode: ["class"],
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
            "wave-header": "url('/price-header.png')",
            gestao: "url('/rectangle.png')",
            faq: "url('/bgfaq.png')",
            "header-404": "url('/bg-header-error.png')",
            footer: "url('/bg-footer.png')",
            wave: "url('/wave-desktop-bg.png')",
            "footer-desktop": "url('/bg-footer-desktop.svg')",
         },
         colors: {
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            tertiary: "#00559E",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            chart: {
               "1": "hsl(var(--chart-1))",
               "2": "hsl(var(--chart-2))",
               "3": "hsl(var(--chart-3))",
               "4": "hsl(var(--chart-4))",
               "5": "hsl(var(--chart-5))",
            },
         },
         boxShadow: {
            shape: "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
            rounded:
               "1px 0px 10px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1), 0px -2px 8px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
         },
         keyframes: {
            menubar: {
               "0%": {
                  transform: "translateX(200%)",
               },
               "100%": {
                  transform: "translateX(0%)",
               },
            },
            closemenubar: {
               "0%": {
                  transform: "translateX(0%)",
               },
               "100%": {
                  transform: "translateX(200%)",
               },
            },
            opacity: {
               "0%": {
                  opacity: "0",
               },
               "100%": {
                  opacity: "1",
               },
            },
            closeopacity: {
               "0%": {
                  opacity: "1",
               },
               "100%": {
                  opacity: "0",
               },
            },
            "accordion-down": {
               from: {
                  height: "0",
               },
               to: {
                  height: "var(--radix-accordion-content-height)",
               },
            },
            "accordion-up": {
               from: {
                  height: "var(--radix-accordion-content-height)",
               },
               to: {
                  height: "0",
               },
            },
         },
         animation: {
            menubar: "menubar 0.5s ease-in-out",
            closemenubar: "closemenubar 0.5s ease-in-out",
            opacity: "opacity 0.5s ease-in-out",
            closeopacity: "closeopacity 0.5s ease-in-out",
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
         rotate: {
            "88-393": "88.393deg",
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
export default config;
