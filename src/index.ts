import { ansibleOrder, maxClassesPerFile, maxLines } from './constants'
import { acquireProjectType, getExtends, getParser, getPlugins, schemaDefinitions } from './lib'

const taskfile = acquireProjectType()
const repoType = taskfile.vars.REPOSITORY_TYPE
const repoSubType = taskfile.vars.REPOSITORY_SUBTYPE

module.exports = {
  env: {
    browser: repoType === 'angular',
    es6: true,
    node: repoType === 'npm'
  },
  extends: getExtends(repoType, repoSubType),
  ignorePatterns: ['ansible_variables.json', 'package.json', 'package-lock.json', 'pnpm-lock.yaml'],
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '.*'
          }
        ]
      }
    },
    {
      files: ['*.toml'],
      parser: 'toml-eslint-parser'
    },
    {
      files: ['*.ts', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array'
          }
        ],
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              parameterProperties: 'explicit',
              properties: 'explicit'
            }
          }
        ],
        'import/no-unresolved': [
                    2,
                    {
                        ignore: [
                            '@megabytelabs/nestjs-common'
                        ]
                    }
        ],
        'unicorn/prefer-module': repoType === 'npm' && repoSubType === 'library' ? 0 : 2,
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false
            }
          }
        ],
        'jest/prefer-lowercase-title': ["error", { "ignoreTopLevelDescribe": true }],
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            avoidEscape: true
          }
        ],
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            lib: 'always',
            path: 'always',
            types: 'prefer-import'
          }
        ],
        '@typescript-eslint/tslint/config': [
          'error',
          {
            rules: {
              'comment-type': [true, 'doc', 'singleline', 'multiline'],
              'completed-docs': [true, 'enums', 'functions', 'methods', 'classes', 'namespaces'],
              encoding: true,
              'import-spacing': true,
              'invalid-void': true,
              'no-inferred-empty-object-type': true,
              'no-mergeable-namespace': true,
              'no-promise-as-boolean': true,
              'no-tautology-expression': true,
              'no-unnecessary-callback-wrapper': true,
              'number-literal-format': true,
              'object-literal-sort-keys': false,
              'prefer-conditional-expression': true,
              'prefer-method-signature': true,
              'prefer-switch': [
                true,
                {
                  'min-cases': 4
                }
              ],
              'return-undefined': true,
              'static-this': true,
              'strict-comparisons': true,
              'strict-string-expressions': true,
              'strict-type-predicates': true,
              typedef: [true, 'call-signature'],
              'unnecessary-else': true
            }
          }
        ],
        'arrow-parens': ['off', 'always'],
        'brace-style': ['error', '1tbs'],
        'capitalized-comments': 'off',
        'comma-dangle': 'off',
        eqeqeq: ['error', 'always'],
        'max-statements': ["error", 10, { "ignoreTopLevelFunctions": true }],
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
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
        'no-array-constructor': 'error',
        'unicorn/no-new-array': 'off',
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
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true
          }
        ],
        'new-cap': 0, // TODO: Figure out how to ignore decorators for this rule and then re-enable it
        'newline-per-chained-call': 'off',
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
        'no-empty-function': ['error', { allow: ['constructors'] }],
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
        'no-useless-constructor': 'off',
        'one-var': ['error', 'never'],
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
        semi: 'off',
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
        'unused-imports/no-unused-imports': 'error'
      }
    },
    {
      files: ['*.spec.ts'],
      env: {
        jest: true
      },
      rules: {
        'max-lines-per-function': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'init-declarations': 'off',
        'jest/no-hooks': 'off',
        'jest/unbound-method': 'off',
        'jest/prefer-expect-assertions': [
          'warn',
          { 'onlyFunctionsWithAsyncKeyword': true }
        ],
        'no-magic-numbers': 'off',
        'no-undef': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': ['error'],
        semi: ['error']
      }
    },
    {
      files: ['*.ts'],
      rules: {
        'require-jsdoc': 'off',
        'class-methods-use-this': 'off'
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'capitalized-comments': 'off',
        'max-len': ['error', {
          code: 160,
          ignoreComments: true,
          ignoreTrailingComments: true
        }],
        'no-inline-comments': 'off',
        'unicorn/filename-case': 'off'
      }
    },
    {
      files: ['defaults/*.yml', 'molecule/**/molecule.yml', 'vars/*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/no-empty-document': 'off',
        'yml/sort-keys': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '.*'
          }
        ]
      }
    },
    {
      files: ['molecule/**/converge.yml', 'molecule/**/prepare.yml', 'tests/**/*.yml', 'tasks/**/*.yml'],
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: ansibleOrder,
            pathPattern: '^.$'
          }
        ]
      }
    },
    {
      files: ['molecule/**/converge.yml', 'molecule/**/prepare.yml', 'tests/**/*.yml', 'tasks/**/*.yml'],
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: ansibleOrder,
            pathPattern: '^.tasks.$'
          }
        ]
      }
    },
    {
      files: ['molecule/**/converge.yml', 'molecule/**/prepare.yml', 'tests/**/*.yml', 'tasks/**/*.yml'],
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^.([a-zA-Z0-9].+).$'
          }
        ]
      }
    },
    {
      files: ['meta/main.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: ['galaxy_info', 'dependencies'],
            pathPattern: '^$'
          },
          {
            order: ['role', 'when'],
            pathPattern: '^dependencies'
          },
          {
            order: [
              'role_name',
              'namespace',
              'author',
              'description',
              'company',
              'issue_tracker_url',
              'license',
              'min_ansible_version',
              'platforms',
              'galaxy_tags'
            ],
            pathPattern: '^galaxy_info$'
          }
        ]
      }
    },
    {
      files: ['Taskfile*.yml'],
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: ['version', 'includes', 'output', 'silent', 'method', 'vars', 'env', 'dotenv', 'tasks'],
            pathPattern: '^$'
          },
          {
            order: { type: 'asc' },
            pathPattern: '(?:deps|includes|log|env|vars)$'
          },
          {
            order: { type: 'asc' },
            pathPattern: '^tasks$'
          },
          {
            order: [
              'cmd',
              'task',
              'deps',
              'label',
              'desc',
              'summary',
              'silent',
              'dir',
              'vars',
              'env',
              'run',
              'cmds',
              'ignore_error',
              'prefix',
              'log',
              'status',
              'method',
              'sources',
              'generates',
              'preconditions',
              'sh',
              'msg'
            ],
            pathPattern: '.*'
          }
        ]
      }
    }
  ],
  parser: getParser(repoType, repoSubType),
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: getPlugins(repoType, repoSubType),
  rules: {
    'max-lines': ['error', maxLines],
    'no-secrets/no-secrets': 'error'
  }
}
