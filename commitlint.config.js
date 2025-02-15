module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-min-length': [2, 'always', 10],
    'subject-case': [0, 'always'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(feat|fix|chore|docs|style|refactor|test|perf|ci|build|revert): (\[GP\]) (.+) $/,
      headerCorrespondence: ['type', 'ticket', 'subject'],
    },
  },
}