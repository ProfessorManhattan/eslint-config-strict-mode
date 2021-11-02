/**
 * Maximum number of classes to allow in
 */
export const maxClassesPerFile = 4

/**
 * Maximum number of lines of code in any given file
 */
export const maxLines = 500

/**
 * Dictionary of plugins to load based on project type
 */
export const plugins = {
  eslint: ['editorconfig', 'no-secrets'],
  html: ['html', 'no-unsanitized'],
  jest: ['jest', 'jest-async', 'jest-dom', 'jest-formatting'],
  prettier: ['prettier'],
  typescript: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'array-func',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-import',
    'eslint-plugin-no-explicit-type-exports',
    'eslint-plugin-tsdoc',
    'eslint-plugin-unicorn',
    'etc',
    'ext',
    'filenames',
    'fp',
    'functional',
    'import',
    'no-constructor-bind',
    'no-loops',
    'no-use-extend-native',
    'optimize-regex',
    'promise',
    'regexp',
    'rxjs',
    'security',
    'sonarjs',
    'sort-class-members',
    'sort-keys-fix',
    'switch-case',
    'typescript-sort-keys',
    'unused-imports',
    'woke'
  ]
}

/**
 * ESLint templates to include based on project type
 */
export const templates = {
  angular: ['plugin:compat/recommended', 'plugin:no-unsanitized/DOM'],
  eslint: ['eslint:all', 'plugin:eslint-comments/recommended', 'plugin:editorconfig/all'],
  jest: ['plugin:jest/all', 'plugin:jest-dom/recommended', 'plugin:jest-formatting/recommended'],
  json: ['plugin:jsonc/recommended-with-json', 'plugin:json-schema-validator/recommended', 'plugin:jsonc/prettier'],
  node: ['plugin:node/recommended'],
  prettier: ['prettier', 'plugin:prettier/recommended'],
  toml: ['plugin:toml/standard'],
  typescript: [
    'plugin:array-func/recommended',
    'plugin:etc/recommended',
    'plugin:fp/recommended',
    'plugin:functional/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:no-use-extend-native/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:rxjs/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:switch-case/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:unicorn/recommended'
  ],
  yml: ['plugin:yml/standard', 'plugin:yml/prettier']
}
