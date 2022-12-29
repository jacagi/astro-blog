import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: 'https://jacagi.github.io',
  base: '/astro-blog',
  experimental: {
    integrations: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress({
      css: true,
      html: false,
      js: true,
      img: false,
      svg: false,
    }),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 2,
        },
      ],
    }),
    webmanifest({
      name: 'El blog de Javier',
      icon: './public/favicon.svg',
      lang: 'es-es',
      short_name: 'javier',
      description: "Un blog personal de Javier Calatayud.",
      theme_color: '#ef4444',
      background_color: '#ef4444',
      display: 'standalone',
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});