import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import core from "ultracite/oxlint/core";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";

const jsPlugins = selectJsPlugins(["tsdoc", "react-doctor"]);

export default defineConfig({
  env: core.env,
  extends: [core, react, next, nextJsPlugins, shadcn, antiSlop, jsPlugins],
  // shadcn writes these files; keep the CLI's output untouched.
  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    "**/components/ui",
    "src/lib/highlighter.tsx",
    "src/hooks/use-highlighted-code.ts",
  ],
  jsPlugins: [...jsPlugins.jsPlugins, ...shadcn.jsPlugins],
  options: { typeAware: true },
  settings: jsPluginSettings,
});
