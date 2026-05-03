import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Lumina Games",
  tagline: "Documentation for all products of Lumina Games",
  favicon: "img/favicon.ico",
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.vedant.lol",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LuminaGames", // Usually your GitHub org/user name.
  projectName: "", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "player-logger",
        path: "player-logger",
        routeBasePath: "player-logger",
        sidebarPath: "./playerLoggerSidebar.ts",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "email-linker",
        path: "email-linker",
        routeBasePath: "email-linker",
        sidebarPath: "./emailLinkerSidebar.ts",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ultimate-bounty",
        path: "ultimate-bounty",
        routeBasePath: "ultimate-bounty",
        sidebarPath: "./ultimateBountySidebar.ts",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "delivery",
        path: "delivery",
        routeBasePath: "delivery",
        sidebarPath: "./deliverySidebar.ts",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "afk-area",
        path: "afk-area",
        routeBasePath: "afk-area",
        sidebarPath: "./afkAreaSidebar.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "neptune-core",
        path: "neptune-core",
        routeBasePath: "neptune-core",
        sidebarPath: "./neptuneCoreSidebar.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "waypoint",
        path: "waypoint",
        routeBasePath: "waypoint",
        sidebarPath: "./waypointSidebar.ts",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Lumina Games",
      logo: {
        alt: "Lumina Games",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Home",
        },
        {
          type: "dropdown",
          label: "Plugins",
          position: "left",
          items: [
            {
              label: "Player Logger",
              href: "/player-logger/overview",
            },
            {
              label: "Waypoint",
              href: "/waypoint/overview",
            },
            {
              label: "Neptune Core",
              href: "/neptune-core/overview",
            },
            {
              label: "Ultimate Bounty",
              href: "/ultimate-bounty/overview",
            },
            {
              label: "AFK Area",
              href: "/afk-area/overview",
            },
            {
              label: "Delivery Master",
              href: "/delivery/overview",
            },
            {
              label: "Email Linker",
              href: "/email-linker/overview",
            },
          ],
        },
        {
          href: "https://github.com/LuminaGames",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.com/invite/U6BjjKzvpE",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Products",
          items: [
            {
              label: "Player Logger",
              to: "/player-logger/overview",
            },
            {
              label: "Email Linker",
              to: "/email-linker/overview",
            },
            {
              label: "Ultimate Bounty",
              to: "/ultimate-bounty/overview",
            },
            {
              label: "Delivery Master",
              to: "/delivery/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/LuminaGames",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/U6BjjKzvpE",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/luminagames.in",
            },
          ],
        },
        {
          title: "Download",
          items: [
            {
              label: "Modrinth",
              href: "https://modrinth.com/user/COMPHACK",
            },
            {
              label: "Built By Bit",
              href: "https://builtbybit.com/creators/comphack.307704/",
            },
            {
              label: "SpigotMC",
              href: "https://www.spigotmc.org/members/comphack.1167144/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lumina Games. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
