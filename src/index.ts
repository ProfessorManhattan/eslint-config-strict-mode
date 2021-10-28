import { ansibleOrder } from './constants.js';
import { acquireProjectType, getExtends, getParser, getPlugins, schemaDefinitions} from './lib.js';

const taskfile = acquireProjectType();

module.exports = {
  env: {
    browser: taskfile.vars.REPOSITORY_TYPE === 'angular',
    es6: true,
    node: true
  },
  parser: getParser(taskfile.vars.REPOSITORY_TYPE, taskfile.vars.REPOSITORY_SUBTYPE),
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  ignorePatterns: ['ansible_variables.json', 'package.json', 'package-lock.json', 'pnpm-lock.yaml'],
  extends: getExtends(taskfile.vars.REPOSITORY_TYPE, taskfile.vars.REPOSITORY_SUBTYPE),
  plugins: getPlugins(taskfile.vars.REPOSITORY_TYPE, taskfile.vars.REPOSITORY_SUBTYPE),
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '.*',
            order: { type: 'asc' }
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
            accessibility: 'explicit'
          }
        ],
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
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'always',
            types: 'prefer-import',
            lib: 'always'
          }
        ],
        'arrow-parens': ['off', 'always'],
        'brace-style': ['error', '1tbs'],
        'capitalized-comments': 'off',
        'comma-dangle': 'off',
        eqeqeq: ['error', 'always'],
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
          {
            devDependencies: false
          }
        ],
        "json-schema-validator/no-invalid": [
          "error",
          {
            "schemas": schemaDefinitions(taskfile.vars.REPOSITORY_TYPE, taskfile.vars.REPOSITORY_SUBTYPE),
            "useSchemastoreCatalog": true
          }
        ],
        'linebreak-style': ['error', 'unix'],
        'max-classes-per-file': ['error', 5],
        'max-len': [
          'error',
          {
            code: 120
          }
        ],
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
        'immutable/no-mutation': 2,
        'no-plusplus': [
          'error',
          {
            allowForLoopAfterthoughts: true
          }
        ],
        'no-restricted-syntax': ['error', 'ForInStatement'],
        'no-shadow': 'off',
        'one-var': ['error', 'never'],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return'
          }
        ],
        'prefer-arrow/prefer-arrow-functions': [
          'warn',
          {
            disallowPrototype: true,
            singleReturnOnly: false,
            classPropertiesAllowed: false
          }
        ],
        'quote-props': ['error', 'as-needed'],
        "require-jsdoc": ["error", {
          "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true,
            "ArrowFunctionExpression": true,
            "FunctionExpression": true
          }
        }],
        semi: 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': ['off', 'never'],
        'spaced-comment': [
          'error',
          'always',
          {
            markers: ['/']
          }
        ],
        'sort-class-members/sort-class-members': [
          2,
          {
            order: [
              '[static-properties]',
              '[static-methods]',
              '[properties]',
              '[conventional-private-properties]',
              'constructor',
              '[methods]',
              '[conventional-private-methods]'
            ],
            accessorPairPositioning: 'getThenSet'
          }
        ],
        'sort-keys-fix/sort-keys-fix': 'warn',
        'tsdoc/syntax': 'error',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/tslint/config': [
          'error',
          {
            rules: {
              'comment-type': [true, 'doc', 'singleline', 'multiline'],
              'completed-docs': [true, 'enums', 'functions', 'methods', 'classes', 'namespaces'],
              encoding: true,
              'import-spacing': true,
              'invalid-void': true,
              'no-delete': true,
              'no-inferred-empty-object-type': true,
              'no-let': true,
              'no-mergeable-namespace': true,
              'no-method-signature': true,
              'no-mixed-interface': true,
              'no-object-mutation': true,
              'no-promise-as-boolean': true,
              'no-tautology-expression': true,
              'no-unnecessary-callback-wrapper': true,
              'number-literal-format': true,
              'object-literal-sort-keys': [
                true,
                'ignore-case',
                'locale-compare',
                'match-declaration-order',
                'shorthand-first'
              ],
              'prefer-conditional-expression': true,
              'prefer-method-signature': true,
              'prefer-switch': [
                true,
                {
                  'min-cases': 4
                }
              ],
              'readonly-array': true,
              'readonly-keyword': true,
              'return-undefined': true,
              'static-this': true,
              'strict-comparisons': true,
              'strict-string-expressions': true,
              'strict-type-predicates': true,
              typedef: [true, 'call-signature'],
              'unnecessary-else': true
            }
          }
        ]
      }
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/semi': 'off',
        'no-shadow': ['error'],
        semi: ['error']
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'capitalized-comments': 'off',
        'max-len': ['error', { code: 160 }],
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
            pathPattern: '.*',
            order: { type: 'asc' }
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
            pathPattern: '^.$',
            order: ansibleOrder
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
            pathPattern: '^.tasks.$', // TODO Add appropriate pathPattern so that arrays assigned to the key `tasks` get sorted with the ansibleOrder instead of the `{ type: 'asc' }` order
            order: ansibleOrder
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
            pathPattern: '^.([a-zA-Z0-9].+).$',
            order: { type: 'asc' }
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
            pathPattern: '^$',
            order: ['galaxy_info', 'dependencies']
          },
          {
            pathPattern: '^dependencies',
            order: ['role', 'when']
          },
          {
            pathPattern: '^galaxy_info$',
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
            ]
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
            pathPattern: '^$',
            order: ['version', 'includes', 'output', 'silent', 'method', 'vars', 'env', 'dotenv', 'tasks']
          },
          {
            pathPattern: '(?:deps|includes|log|env|vars)$',
            order: { type: 'asc' }
          },
          {
            pathPattern: '^tasks$',
            order: { type: 'asc' }
          },
          {
            pathPattern: '.*',
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
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'max-lines': ['error', 500],
    'no-secrets/no-secrets': 'error'
  }
}
