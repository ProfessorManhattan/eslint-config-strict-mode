/**
 * Maximum number of classes to allow in
 */
export const maxClassesPerFile = 4

/**
 * Maximum number of lines of code in any given file
 */
export const maxLines = 500

/**
 * Maximum number of lines of code for "special" files that
 * surpass normal limit (e.g. generated files)
 */
export const maxLinesMax = 2424

/**
 * Dictionary of plugins to load based on project type
 */
export const plugins = {
  angular: ['angular'],
  common: [
    'array-func',
    'ext',
    'filenames',
    'fp',
    'functional',
    'import',
    'no-constructor-bind',
    'no-use-extend-native',
    'optimize-regex',
    'prefer-arrow',
    'promise',
    'regexp',
    'security',
    'sonarjs',
    'sort-class-members',
    'sort-keys-fix',
    'switch-case',
    'unicorn',
    'unused-imports',
    'woke'
  ],
  eslint: ['editorconfig', 'no-secrets'],
  html: ['html', 'no-unsanitized'],
  javascript: ['jsdoc'],
  jest: ['jest', 'jest-async', 'jest-dom', 'jest-formatting'],
  prettier: ['prettier'],
  typescript: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'eslint-plugin-no-explicit-type-exports',
    'eslint-plugin-tsdoc',
    'etc',
    'rxjs',
    'typescript-sort-keys'
  ]
}

/**
 * ESLint templates to include based on project type
 */
export const templates = {
  angular: ['plugin:angular/johnpapa'],
  common: [
    'plugin:array-func/all',
    'plugin:fp/recommended',
    'plugin:functional/recommended',
    'plugin:import/recommended',
    'plugin:no-use-extend-native/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:switch-case/recommended',
    'plugin:unicorn/recommended'
  ],
  eslint: ['eslint:all', 'plugin:eslint-comments/recommended', 'plugin:editorconfig/all'],
  functional: ['plugin:fp/recommended', 'plugin:functional/recommended'],
  html: ['plugin:compat/recommended', 'plugin:no-unsanitized/DOM'],
  javascript: ['plugin:jsdoc/recommended'],
  jest: ['plugin:jest/all', 'plugin:jest-dom/recommended', 'plugin:jest-formatting/recommended'],
  json: ['plugin:jsonc/recommended-with-json', 'plugin:json-schema-validator/recommended', 'plugin:jsonc/prettier'],
  node: ['plugin:node/recommended'],
  prettier: ['prettier', 'plugin:prettier/recommended'],
  toml: ['plugin:toml/standard'],
  typescript: [
    'plugin:@typescript-eslint/recommended',
    'plugin:etc/recommended',
    'plugin:import/typescript',
    'plugin:rxjs/recommended',
    'plugin:typescript-sort-keys/recommended'
  ],
  yml: ['plugin:yml/standard', 'plugin:yml/prettier']
}
