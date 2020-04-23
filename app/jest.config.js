module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    'vee-validate/dist/rules': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(vee-validate)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{vue,js}', '!**/node_modules/**', '!<rootDir>/dist/**',
  '!<rootDir>/src/plugins/**', '!<rootDir>/tests/unit/**', '!**/*.config.js', '!<rootDir>/coverage/**',
  '!<rootDir>/dist/**', '!<rootDir>/srv/public/**', '!<rootDir>/src/main.js', '!<rootDir>/srv/index.js',
  '!<rootDir>/src/router/index.js', '!<rootDir>/src/components/VueFuse.vue'
  ],
  coverageReporters: ['lcov', 'text-summary'],
  testTimeout: 30000,
}
