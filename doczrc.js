export default {
  title: 'Arctic Wolf UI',
  lang: 'en',
  typescript: true,
  files: '**/*.mdx',
  ignore: ['./*.md', '**/stories/*.mdx', '**/*.stories.mdx'],
  menu: [
    'Getting Started',
    'Theming',
    { name: 'Components', menu: [] },
    'Utilities',
    'Hooks',
  ],
  themeConfig: {
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  docgenConfig: {
    searchPatterns: [
      '../**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!../**/node_modules',
      '!**/doczrc.js',
      '!../**/doczrc.js',
    ],
  },
};
