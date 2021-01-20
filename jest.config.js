module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  transform: { '^.+\\.ts|x?$': 'ts-jest' },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.docz.tsx',
    '!src/**/*.placeholder.tsx',
    '!src/**/*.components.tsx',
    '!src/**/icons/**',
    '!src/styled/**',
    '!src/docs/**',
    '!src/docz/**',
    '!src/theme/**',
  ],
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 70,
      lines: 80,
      statements: 80,
    },
  },
};
