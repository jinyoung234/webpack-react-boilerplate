export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/constants/", "<rootDir>/__tests__/utils/"],
};
