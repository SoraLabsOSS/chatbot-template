import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // shadcn writes these files; keep the CLI's output untouched.
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "**/components/ui",
    "src/lib/highlighter.tsx",
    "src/hooks/use-highlighted-code.ts",
  ],
});
