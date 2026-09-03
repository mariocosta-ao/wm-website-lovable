import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://win-mac.net";

const routes = [
  { path: "/", priority: "1.0" },
  { path: "/servicos", priority: "0.9" },
  { path: "/solucoes", priority: "0.8" },
  { path: "/parceiros", priority: "0.6" },
  { path: "/sobre", priority: "0.6" },
  { path: "/contacto", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url>\n    <loc>${BASE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
