export const ansibleOrder = [
  'name',
  'become',
  'become_method',
  'become_user',
  'changed_when',
  'hosts',
  'gather_facts',
  'vars',
  'roles',
  'include_tasks',
  'include_vars',
  'tasks',
  'raw',
  'args',
  'loop',
  'loop_control',
  'register',
  'when'
]

export const plugins = {
  eslint: [
    'editorconfig',
    'no-secrets'
  ],
  html: ['html'],
  node: ['ava'],
  prettier: ['prettier'],
  typescript: [
    '@typescript-eslint',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-import',
    'eslint-plugin-tsdoc',
    'eslint-plugin-unicorn',
    'immutable',
    'import',
    'lodash',
    'no-loops',
    'promise',
    'regexp',
    'rxjs',
    'security',
    'simple-import-sort',
    'sonarjs',
    'sort-class-members',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports'
  ]
}

export const templates = {
  angular: ['plugin:compat/recommended'],
  eslint: ['eslint:all', 'plugin:eslint-comments/recommended', 'plugin:editorconfig/all'],
  json: ['plugin:jsonc/recommended-with-json', 'plugin:json-schema-validator/recommended', 'plugin:jsonc/prettier'],
  node: ['plugin:ava/recommended'],
  prettier: ['prettier', 'plugin:prettier/recommended'],
  toml: ['plugin:toml/standard'],
  typescript: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:lodash/recommended',
    'plugin:regexp/recommended',
    'plugin:rxjs/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended'
  ],
  yml: ['plugin:yml/standard', 'plugin:yml/prettier']
}
