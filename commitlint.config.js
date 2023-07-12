// const types = ['task', 'story', 'bug']

// const typeEnum = {
//   rules: {
//     'type-enum': [2, 'always', types]
//   },
//   value: () => types
// }

// const types = ['task', 'story', 'bug']

// const typeEnum = {
//   rules: {
//     'type-enum': [2, 'always', types]
//   },
//   value: () => types
// }

// module.exports = {
//   parserPreset: './parser-preset',
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'body-leading-blank': [1, 'always'],
//     'footer-leading-blank': [1, 'always'],
//     'header-max-length': [2, 'always', 72],
//     'scope-case': [2, 'always', 'kebab-case'],
//     'subject-case': [2, 'always', 'kebab-case'],
//     'subject-empty': [0, 'never'],
//     'subject-full-stop': [2, 'never', '.'],
//     'type-case': [2, 'always', 'lower-case'],
//     'type-empty': [2, 'never'],
//     'type-enum': typeEnum.rules['type-enum']
//   }
// }

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'WIP',
        'feat',
        'fix',
        'merge',
        'docs',
        'test',
        'chore',
        'refactor',
        'style',
        'perf',
        'revert'
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0, 'never'],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
