export default {
  title: 'Arctic Wolf UI',
  lang: 'en',
  dest: 'docs2',
  typescript: true,
  files: [
    './src/**/index.mdx',
    './src/theme/theme.mdx',
    './src/components/**/*.mdx',
    './src/utils/getRelativePosition.mdx',
    './src/hooks/hooks.mdx',
  ],
  ignore: ['./*.md', '**/stories/*.mdx', '**/*.stories.mdx'],
  menu: [
    'Getting Started',
    'Theming',
    { name: 'Components', menu: [] },
    'Utilities',
    'Hooks',
  ],
  themeConfig: {
    showPlaygroundEditor: false,
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
