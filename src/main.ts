import * as fs from 'node:fs'
import { maxLines } from './constants'
import { acquireProjectType, getExtends, getGitignore, getPlugins, vscodeTasksOrder } from './library'
import { ansibleMetaRules, ansibleRules } from './rules/ansible'
import { baseRules } from './rules/base'
import { gitlabCIRules } from './rules/gitlab-ci'
import { jsRules } from './rules/javascript'
import { jsonRules } from './rules/json'
import { taskfileRules } from './rules/taskfile'
import { specRules } from './rules/ts-spec'
import { tsRules } from './rules/typescript'
import { yamlRules } from './rules/yaml'

const gitignore = getGitignore()
const taskfile = acquireProjectType()
const repoType = taskfile.vars.REPOSITORY_TYPE
const repoSubType = taskfile.vars.REPOSITORY_SUBTYPE

const tsConfig = fs.existsSync('./tsconfig.json')
  ? {
      extends: getExtends('typescript', repoType, repoSubType),
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
      },
      plugins: getPlugins('typescript', repoType, repoSubType),
      rules: baseRules(repoType, repoSubType)
    }
  : { files: ['.doesnotexist'] }

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    browser: repoType === 'angular',
    es6: true,
    node: repoType === 'npm'
  },
  ignorePatterns: [
    '!.*',
    '.common/',
    '.config/package-lock.json',
    '.config/yarn.lock',
    '.go/',
    '.modules/',
    '.pnpm-store/',
    '.venv/',
    'deprecated/',
    'docs/slim*.json',
    'angular.json',
    'esbuild.js',
    'package-lock.json',
    'pnpm-lock.yaml',
    'slim.report.json',
    'test-output/',
    'venv/',
    'yarn.lock',
    '_generated_/',
    '*.toml',
    ...gitignore
  ],
  overrides: [
    {
      extends: getExtends('json', repoType, repoSubType),
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      plugins: getPlugins('json', repoType, repoSubType),
      rules: jsonRules
    },
    {
      files: ['package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: 'keywords'
          },
          {
            order: { type: 'asc' },
            pathPattern: 'lint-staged'
          }
        ]
      }
    },
    {
      files: ['.vscode/tasks.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            order: vscodeTasksOrder,
            pathPattern: '^.*'
          }
        ]
      }
    },
    {
      extends: getExtends('toml', repoType, repoSubType),
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
      plugins: getPlugins('toml', repoType, repoSubType)
    },
    tsConfig,
    {
      extends: getExtends('javascript', repoType, repoSubType),
      files: ['*.js', '*.jsx'],
      plugins: getPlugins('javascript', repoType, repoSubType),
      rules: baseRules(repoType, repoSubType)
    },
    {
      env: {
        jest: true
      },
      files: ['*spec.js', '*spec.ts'],
      rules: specRules
    },
    {
      files: ['*.js', '*.jsx'],
      rules: jsRules
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: tsRules
    },
    {
      files: ['*.func.js', '*.func.ts'],
      rules: {
        'fp/no-nil': 'error',
        'functional/no-class': 'error',
        'functional/no-conditional-statement': 'error',
        'functional/no-expression-statement': 'error',
        'functional/no-return-void': 'error',
        'functional/no-this-expression': 'error'
      }
    },
    {
      files: ['**/.config/prompts/**.js', 'test/**.js', 'test/**.ts', 'tests/**.js', 'tests/**.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'warn'
      }
    },
    {
      files: ['lib/**/*.js'],
      rules: {
        camelcase: 'warn',
        'fp/no-arguments': 'off',
        'fp/no-delete': 'off',
        'fp/no-loops': 'off',
        'fp/no-mutating-methods': 'off',
        'fp/no-mutation': 'off',
        'func-names': 'off',
        'func-style': 'warn',
        'functional/functional-parameters': 'off',
        'functional/immutable-data': 'off',
        'functional/no-let': 'off',
        'functional/no-loop-statement': 'off',
        'functional/no-try-statement': 'off',
        'id-length': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns': 'off',
        'max-lines-per-function': 'off',
        'max-statements': 'off',
        'no-await-in-loop': 'off',
        'no-console': 'off',
        'no-continue': 'warn',
        'no-loop-func': 'off',
        'no-magic-numbers': 'warn',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'warn',
        'no-shadow': 'warn',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'warn',
        'prefer-arrow/prefer-arrow-functions': 'off',
        'prefer-destructuring': 'off',
        'prefer-named-capture-group': 'warn',
        'prefer-rest-params': 'off',
        'require-jsdoc': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-object-injection': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'vars-on-top': 'warn'
      }
    },
    {
      extends: getExtends('yml', repoType, repoSubType),
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      plugins: getPlugins('yml', repoType, repoSubType),
      rules: yamlRules
    },
    {
      files: ['defaults/*.yml', 'molecule/**/molecule.yml', 'vars/*.yml'],
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
      files: ['molecule/**/converge.yml', 'molecule/**/prepare.yml', 'tests/**/*.yml'],
      rules: ansibleRules
    },
    {
      files: ['meta/main.yml'],
      rules: ansibleMetaRules
    },
    {
      files: ['**/Taskfile*.yml'],
      rules: taskfileRules
    },
    {
      files: ['./Taskfile.yml'],
      rules: {
        'max-len': 'off',
        'yml/sort-keys': 'warn'
      }
    },
    {
      files: ['**/*.gitlab-ci.yml'],
      rules: gitlabCIRules
    },
    {
      files: ['.github/**/*.yml'],
      rules: {
        'unicorn/filename-case': 'off'
      }
    },
    {
      files: ['goreleaser.yml', 'goreleaser-*.yml'],
      rules: {
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
      files: ['Dockerfile.test.yml', 'Dockerfile-*.test.yml'],
      rules: {
        'unicorn/filename-case': 'off',
        'yml/sort-keys': 'off'
      }
    }
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    'fp/no-loops': 'off',
    'fp/no-throw': 'off',
    'max-lines': ['warn', maxLines],
    'no-secrets/no-secrets': [
      'warn',
      {
        ignoreContent: [
          'allowSyntheticDefaultImports',
          '__zone_symbol__UNPATCHED_EVENTS',
          'enableI18nLegacyMessageIdFormat',
          'noFallthroughCasesInSwitch',
          'noPropertyAccessFromIndexSignature',
          'T01ABCG4NK1',
          'ansible_galaxy_project_id'
        ]
      }
    ],
    'no-warning-comments': 'warn',
    'unicorn/no-null': 'off'
  }
}
