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
            "wave-header":
               'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2300559e" fill-opacity="1" d="M0,128L40,106.7C80,85,160,43,240,58.7C320,75,400,149,480,170.7C560,192,640,160,720,128C800,96,880,64,960,69.3C1040,75,1120,117,1200,128C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>\')',
            "wave-footer":
               "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%2300559e%22 fill-opacity=%221%22 d=%22M0,192L40,213.3C80,235,160,277,240,261.3C320,245,400,171,480,149.3C560,128,640,160,720,192C800,224,880,256,960,250.7C1040,245,1120,203,1200,192C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z%22%3E%3C/path%3E%3C/svg%3E')",
            gestao: "url('/rectangle.png')",
            faq: "url('/bgfaq.png')",
            "header-404": "url('/bg-header-error.png')",
            footer: "url('/bg-footer.png')",
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
