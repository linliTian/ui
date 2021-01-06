module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  transform: { '^.+\\.ts|x?$': 'ts-jest' },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.placeholder.tsx',
    '!src/**/*.components.tsx',
    '!src/**/icons/**',
    '!src/styled/**',
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
