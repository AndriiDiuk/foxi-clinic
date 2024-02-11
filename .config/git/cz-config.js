/**
 * @see https://github.com/leonardoanalista/cz-customizable
 */
module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     A new feature',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests',
    },
    {
      value: 'chore',
      name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    {
      value: 'revert',
      name: 'revert:   Revert to a commit',
    },
    {
      value: 'ci',
      name: 'ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    },
    {
      value: 'build',
      name: 'build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
  ],

  scopes: [{ name: '[skip ci]' }],

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
    ticketNumber: 'You must provide a ticket number  e.g FOXI-3551 etc.\n',
  },

  allowTicketNumber: true,
  isTicketNumberRequired: true,
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'perf'],
  breakingPrefix: 'BREAKING CHANGES',
  skipQuestions: ['body', 'footer'],
  subjectLimit: 45,
};
