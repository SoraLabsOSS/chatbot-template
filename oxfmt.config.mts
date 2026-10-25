import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // shadcn writes these files; keep the CLI's output untouched.
  ignorePatterns: [...(ultracite.ignorePatterns ?? []), "**/components/ui"],
});
