import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
   plugins: [react()],
   test: {
      // browser: {
      //    enabled: true,
      //    name: "chromium",
      //    provider: "playwright",
      // },
      globals: true,
      setupFiles: ["./tets/setup.ts"],
      environment: "happy-dom",
   },

   server: {
      fs: {
         strict: false,
      },
   },
});
