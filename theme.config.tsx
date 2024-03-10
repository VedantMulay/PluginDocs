import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Lumina Games</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Lumina Games'
    }
  },
  banner: {
    dismissible: true,
    key: 'info-banner',
    text: 'This documentation is under construction!'

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
