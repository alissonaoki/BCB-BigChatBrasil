module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    testRegex: '.*\\.spec\\.ts$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  };
  