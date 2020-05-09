module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 50],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'refactor',
        'test',
        'perf',
        'chore',
        'build',
        'style',
      ],
    ],
    'scope-empty': [0],
  },
};
