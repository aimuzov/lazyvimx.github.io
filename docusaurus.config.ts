import path from "node:path";

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "lazyvimx",
  tagline: "Enhanced LazyVim configuration with extensive customizations",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://lazyvimx.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For user sites (username.github.io), use "/"
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "aimuzov", // Usually your GitHub org/user name.
  projectName: "lazyvimx.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages", // Branch to deploy to for GitHub Pages.

  trailingSlash: false,

  onBrokenLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      ru: {
        label: "Русский",
        direction: "ltr",
        htmlLang: "ru-RU",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/aimuzov/LazyVimx/tree/main/website/docs/",
          include: ["**/*.md"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "LazyVimx",
      logo: {
        alt: "LazyVimx Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/aimuzov/LazyVimx",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "Configuration",
              to: "/docs/configuration",
            },
            {
              label: "Extras",
              to: "/docs/extras",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/aimuzov/LazyVimx",
            },
            {
              label: "Telegram",
              href: "https://t.me/aimuzov_dotfiles",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "LazyVim",
              href: "https://github.com/LazyVim/LazyVim",
            },
            {
              label: "Author",
              href: "https://github.com/aimuzov",
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus. © ${new Date().getFullYear()} Aleksey Imuzov`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["lua", "bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
