import { ruleState } from './base'

export const specRules = {
  'filenames/match-regex': [ruleState.error, '^[a-z-]+.?[a-z-]+.spec$'],
  'fp/no-mutation': 'off',
  'functional/no-class': 'error',
  'functional/no-let': 'off',
  'functional/no-this-expression': 'error',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'init-declarations': 'off',
  'jest-async/expect-return': 'error',
  'jest/no-hooks': 'off',
  'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
  'jest/prefer-lowercase-title': ['error', { ignoreTopLevelDescribe: true }],
  'jest/require-hook': 'error',
  'jest/unbound-method': 'off',
  'max-lines-per-function': 'off',
  'no-magic-numbers': 'off',
  'no-undef': 'off',
  'node/no-unpublished-import': 'off'
}
