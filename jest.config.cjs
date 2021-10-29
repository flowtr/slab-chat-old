module.exports = {
    moduleNameMapper: {
  "^(\\.{1,2}/.*)\\.js$": "$1",
},
       globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    testEnvironment: 'node',
    transform: {'^.+\\.tsx?$': 'ts-jest'},
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'js'],
};
