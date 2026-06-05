// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Disable Cloudflare plugin when deploying to Netlify or Vercel
// (the NITRO_PRESET env var is set in netlify.toml / vercel.json)
const nitroPreset = process.env.NITRO_PRESET;
const isNonCloudflare = nitroPreset === "netlify" || nitroPreset === "vercel" || nitroPreset === "node-server";

export default defineConfig({
  cloudflare: isNonCloudflare ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
