import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: "public/_headers", // ✅ Copy _headers file
          dest: ".",              // ✅ Places it directly into /dist
        },
      ],
    }),
  ].filter(Boolean), // removes any falsey plugins (e.g. if componentTagger is skipped)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ Shortcut for imports
    },
  },
}));
