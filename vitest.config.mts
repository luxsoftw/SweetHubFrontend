import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
   plugins: [react(), tsconfigPaths()],
   envPrefix: "NEXT_PUBLIC_",
   test: {
      // browser: {
      //    enabled: true,
      //    name: "chromium",
      //    provider: "playwright",
      // },
      globals: true,
      setupFiles: ["./test/setup.ts", "./app/env/index.ts"],
      environment: "happy-dom",
   },
   server: {
      fs: {
         strict: false,
      },
   },
});
