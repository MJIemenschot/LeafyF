const { defaults } = require('jest-config');

module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: [
        'tsx',
        ...defaults.moduleFileExtensions
    ],
};
// // Sync object
// /** @type {import('@jest/types').Config.InitialOptions} */
// const config = {
//     verbose: true,
//     "transformIgnorePatterns": ["/node_modules/(?!(react-icons/all.js)/)"
//         // , "/bar/"
//     ]
// };
//
// module.exports = config;
//
//

// Or async function
// module.exports = async () => {
//     return {
//         verbose: true,
//     };
// };