import { maxClassesPerFile } from '../constants'
import { schemaDefinitions } from '../library'

const maxLineLength = 120
const maxStatementsPerFunction = 10
export const ruleState = {
  error: 2,
  off: 0,
  warn: 1
}

// eslint-disable-next-line max-lines-per-function
export const baseRules = (repoType: string, repoSubType: string) => {
  return {
    'array-func/prefer-array-from': 'off',
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    'editorconfig/indent': 'off',
    eqeqeq: ['error', 'always'],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'ext/lines-between-object-properties': [ruleState.error, 'never'],
    'filenames/match-regex': [ruleState.error, '^[a-z-]+.?[a-z-]+$'],
    'filenames/no-index': ruleState.error,
    'fp/no-class': 'off',
    // Handled by functional/no-class
    'fp/no-let': 'off',
    // Handled by functional/no-let
    'fp/no-mutating-methods': 'warn',
    'fp/no-mutation': [
      'error',
      {
        allowThis: true,
        commonjs: true,
        exceptions: []
      }
    ],
    'fp/no-nil': 'off',
    'fp/no-rest-parameters': 'warn',
    'fp/no-this': 'off',
    // Handled by functional/no-this-expression
    'fp/no-unused-expression': 'off',
    // Handled by functional/no-expression-statement
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'functional/functional-parameters': ['error', { enforceParameterCount: false }],
    'functional/immutable-data': [
      'warn',
      {
        ignoreAccessorPattern: ['module.exports'],
        ignoreImmediateMutation: true
      }
    ],
    'functional/no-class': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-expression-statement': 'off',
    'functional/no-return-void': 'off',
    'functional/no-this-expression': 'off',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false }
    ],
    'import/no-unresolved': [
      ruleState.error,
      {
        ignore: ['@megabytelabs/angular-common', '@megabytelabs/common', '@megabytelabs/nestjs-common']
      }
    ],
    'jest/require-hook': 'off',
    'json-schema-validator/no-invalid': [
      'error',
      {
        schemas: schemaDefinitions(),
        useSchemastoreCatalog: true
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', maxClassesPerFile],
    'max-len': [
      'error',
      {
        code: maxLineLength,
        ignoreComments: true,
        ignoreTrailingComments: true
      }
    ],
    'max-statements': ['error', maxStatementsPerFunction, { ignoreTopLevelFunctions: true }],
    // eslint-disable-next-line no-warning-comments
    // TODO: Figure out how to ignore decorators for the `newline-per-chained-call` rule
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'dir',
          'time',
          'timeEnd',
          'timeLog',
          'trace',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-constructor-bind/no-constructor-bind': 'error',
    'no-constructor-bind/no-constructor-state': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-explicit-type-exports/no-explicit-type-exports': ruleState.error,
    'no-loops/no-loops': ruleState.error,
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-shadow': ['error'],
    'no-ternary': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Handled by import/no-extraneous-dependencies
    'node/no-extraneous-import': 'off',
    // Handled by import/no-unresolved
    'node/no-unpublished-import': 'off',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        allowStandaloneDeclarations: true,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false
      }
    ],
    'quote-props': ['error', 'as-needed'],
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        }
      }
    ],
    'sort-class-members/sort-class-members': [
      ruleState.error,
      {
        accessorPairPositioning: 'getThenSet',
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]'
        ]
      }
    ],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'tsdoc/syntax': 'error',
    'unicorn/prefer-module': repoType === 'npm' && repoSubType === 'library' ? ruleState.off : ruleState.error,
    'unused-imports/no-unused-imports': 'error',
    'woke/all': ruleState.error
  }
}
