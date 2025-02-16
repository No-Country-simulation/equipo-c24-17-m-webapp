import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./test/vitest.setup.ts"],
		disableConsoleIntercept: !!process.env.VSCODE_INSPECTOR_OPTIONS,
	},
});
