import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Lumina Games</span>,
  project: {
    link: 'https://github.com/LuminaGames',
  },
  chat: {
    link: 'https://discord.gg/U6BjjKzvpE',
  },
  docsRepositoryBase: 'https://github.com/VedantMulay/PluginDocs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Lumina Games'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },

  editLink: {
    text: null
  },

  footer: {
text: (
      <span>
        © {new Date().getFullYear()} {' '}
          Lumina Games
      </span>
    )
  },
}

export default config
