/**
 * Maximum number of classes to allow in
 */
export const maxClassesPerFile = 4

/**
 * Maximum number of lines of code in any given file
 */
export const maxLines = 500

/**
 * Order used for sorting Ansible YML files
 */
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

/**
 * Dictionary of plugins to load based on project type
 */
export const plugins = {
  eslint: [
    'editorconfig',
    'no-secrets'
  ],
  html: ['html'],
  node: ['jest'],
  prettier: ['prettier'],
  typescript: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-import',
    'eslint-plugin-tsdoc',
    'eslint-plugin-unicorn',
    'import',
    'no-loops',
    'promise',
    'regexp',
    'rxjs',
    'security',
    'sonarjs',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports'
  ]
}

/**
 * ESLint templates to include based on project type
 */
export const templates = {
  angular: ['plugin:compat/recommended'],
  eslint: ['eslint:all', 'plugin:eslint-comments/recommended', 'plugin:editorconfig/all'],
  json: ['plugin:jsonc/recommended-with-json', 'plugin:json-schema-validator/recommended', 'plugin:jsonc/prettier'],
  node: ['plugin:jest/all'],
  prettier: ['prettier', 'plugin:prettier/recommended'],
  toml: ['plugin:toml/standard'],
  typescript: [
    'plugin:import/recommended',
    'plugin:import/typescript',
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
