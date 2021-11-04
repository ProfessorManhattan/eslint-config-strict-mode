import * as fs from 'node:fs'
import { maxLines } from './constants'
import { acquireProjectType, getExtends, getGitignore, getPlugins } from './library'
import { ansibleMetaRules, ansibleRules } from './rules/ansible'
import { baseRules } from './rules/base'
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
      files: ['*.ts', '*.tsx'],
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
    ...gitignore,
    '.common/',
    '.husky/',
    '.modules/',
    '.vscode/',
    'deprecated/',
    'package-lock.json',
    'pnpm-lock.yaml'
  ],
  overrides: [
    {
      extends: getExtends('json', repoType, repoSubType),
      files: ['*.json', '*.json5', '*.json.handlebars'],
      parser: 'jsonc-eslint-parser',
      plugins: getPlugins('json', repoType, repoSubType),
      rules: jsonRules
    },
    {
      files: ['package.json', 'package.*.json.handlebars'],
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
      files: ['*.spec.js', '*.spec.ts'],
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
      files: ['molecule/**/converge.yml', 'molecule/**/prepare.yml', 'tests/**/*.yml', 'tasks/**/*.yml'],
      rules: ansibleRules
    },
    {
      files: ['meta/main.yml'],
      rules: ansibleMetaRules
    },
    {
      files: ['Taskfile*.yml'],
      rules: taskfileRules
    }
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    'max-lines': ['error', maxLines],
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: ['allowSyntheticDefaultImports', 'noFallthroughCasesInSwitch', 'T01ABCG4NK1'] }
    ]
  }
}
