// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
// import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.zedlabs.id/presensi",

  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],

      expressiveCode: {
        // You can use any of the themes bundled with Shiki by name,
        // specify a path to JSON theme file, or pass an instance
        // of the `ExpressiveCodeTheme` class here:
        themes: ["github-dark-default", "solarized-light"],
        shiki: {
          // You can pass additional plugin options here,
          // e.g. to load custom language grammars:
          langs: [
            // import('./some-exported-grammar.mjs'),
            // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
          ],
          // bundledLangs: ["astro", "sass"],
        },
        frames: {
          // Example: Hide the "Copy to clipboard" button
          showCopyToClipboardButton: true,
        },
        styleOverrides: {
          // You can optionally override the plugin's default styles here
          textMarkers: {
            // Make default marker color slightly purple
            markHue: "310",
            // Reduce marker border opacity
            borderOpacity: "50%",
          },
          // You can optionally override the plugin's default styles here
          frames: {
            shadowColor: "#124",
          },
        },
        defaultProps: {
          // Enable word wrap by default
          wrap: true,
          // Disable wrapped line indentation for terminal languages
          overridesByLang: {
            "bash,ps,sh": { preserveIndent: false },
          },
        },
      },
      credits: false,
      favicon: "/favicon.svg",
      logo: {
        // src: "./src/assets/logo.png",
        replacesTitle: true,
        dark: "./src/assets/brand-darkmode.png",
        light: "./src/assets/brand-lightmode.png",
      },
      title: "Dokumentasi Aplikasi Madrasah",

      customCss: [
        // Fontsource files for to regular and semi-bold font weights.
        "@fontsource/lexend/400.css",
        "@fontsource/lexend/600.css",
        "./src/styles/custom.css",
      ],

      // disable404Route: true,

      // editLink: {
      //   baseUrl: "https://github.com/withastro/starlight/edit/main/docs/",
      // },

      tableOfContents: true,
      // tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
        {
          icon: "linkedin",
          label: "Linkedin",
          href: "https://github.com/withastro/starlight",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://astro.build/chat",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://github.com/withastro/starlight",
        },
        {
          icon: "facebook",
          label: "Facebook",
          href: "https://github.com/withastro/starlight",
        },
        {
          icon: "twitter",
          label: "Twitter",
          href: "https://github.com/withastro/starlight",
        },
      ],

      sidebar: [
        {
          label: "Data Master",
          autogenerate: { directory: "data-master" },
        },
        {
          label: "Data Pegawai",
          autogenerate: { directory: "data-pegawai" },
        },
        {
          label: "Data Siswa",
          autogenerate: { directory: "data-siswa" },
        },
        {
          label: "Kartu Presensi",
          autogenerate: { directory: "kartu-presensi" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
