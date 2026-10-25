// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import { execFileSync } from "node:child_process";

const commitHash = (
  process.env.GITHUB_SHA || execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim()
).slice(0, 7);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.PUBLIC_COMMIT_HASH": JSON.stringify(commitHash),
      "import.meta.env.PUBLIC_BUILD_DATE": JSON.stringify(new Date().toISOString()),
    },
  },

  site: "https://jb-biuro.pl/",
  integrations: [sitemap()],
});
