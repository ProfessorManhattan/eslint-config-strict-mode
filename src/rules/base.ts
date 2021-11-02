import { maxClassesPerFile } from '../constants'
import { schemaDefinitions } from '../library'

const maxLineLength = 120
const maxStatementsPerFunction = 10
const ruleState = {
  error: 2,
  off: 0,
  warn: 1
}

// eslint-disable-next-line max-lines-per-function
export const baseRules = (repoType: string, repoSubType: string) => {
  return {
    'arrow-parens': ['off', 'always'],
    'brace-style': ['error', '1tbs'],
    'capitalized-comments': 'off',
    'comma-dangle': 'off',
    eqeqeq: ['error', 'always'],
    'ext/lines-between-object-properties': [ruleState.error, 'never'],
    'filenames/match-exported': ruleState.error,
    'filenames/match-regex': ruleState.error,
    'filenames/no-index': ruleState.error,
    'fp/no-mutation': [
      'error',
      {
        allowThis: true,
        commonjs: true,
        exceptions: []
      }
    ],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'functional/functional-parameters': ['error', { enforceParameterCount: false }],
    'functional/immutable-data': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-expression-statement': 'off',
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
    'new-cap': ruleState.off,
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
    'no-loops/no-loops': 2,
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true
      }
    ],
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
    'no-shadow': 'off',
    'no-ternary': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-useless-constructor': 'off',
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        resolvePaths: [],
        tryExtensions: ['.js', '.json', '.ts']
      }
    ],
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
    semi: 'off',
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
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'tsdoc/syntax': 'error',
    'unicorn/no-new-array': 'off',
    'unicorn/prefer-module': repoType === 'npm' && repoSubType === 'library' ? ruleState.off : ruleState.error,
    'unused-imports/no-unused-imports': 'error',
    'woke/all': ruleState.error
  }
}
