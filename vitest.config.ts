import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
      include: [
        "src/components/**/*.{ts,tsx}",
        "src/utils/cn/**/*.{ts,tsx}",
        "src/types/**/*.{ts,tsx}",
        "src/schemas/**/*.{ts,tsx}",
        "src/features/**/*.{ts,tsx}",
      ],
      exclude: [
        "**/node_modules/**",
        "src/**/*.test.{ts,tsx}",
        "src/**/*.stories.{ts,tsx}",
        "src/**/index.ts",
        "src/lib/**",
        "src/app/**",
        "**/*.config.*",
        "coverage/**",
      ],
      clean: true,
      all: false,
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    projects: [
      // ユニットテスト
      {
        plugins: [tsconfigPaths(), react()],
        test: {
          name: "unit",
          include: ["src/**/*.test.@(ts|tsx)"],
          environment: "jsdom",
        },
      },
      // Storybook
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],

        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
