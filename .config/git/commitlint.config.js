/**
 * @see https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      2,
      'always',
      [
        'lower-case',
        'camel-case',
        'kebab-case',
        'sentence-case',
        'start-case',
        'pascal-case',
        'upper-case',
      ],
    ],
  },
};
