import { ruleState } from './base'

export const tsRules = {
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
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }
  ],
  // Handled by no-shadow
  '@typescript-eslint/no-shadow': 'off',
  // Handled by unicorn/prefer-module
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      avoidEscape: true
    }
  ],
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'always',
      path: 'always',
      types: 'prefer-import'
    }
  ],
  'class-methods-use-this': 'off',
  // This must be turned off for TypeScript because decorators generate false positives
  'new-cap': 'off',
  'no-explicit-type-exports/no-explicit-type-exports': ruleState.error,
  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
  'node/no-missing-import': 'off',
  'node/no-unsupported-features/es-syntax': 'off',
  'require-jsdoc': 'off',
  'tsdoc/syntax': 'error'
  /*
   * '@typescript-eslint/tslint/config': [ TODO: Re-add this back in - was not working with other file types
   *'error',
   *{
   *  rules: {
   *    'comment-type': [true, 'doc', 'singleline', 'multiline'],
   *    'completed-docs': [true, 'enums', 'functions', 'methods', 'classes', 'namespaces'],
   *    encoding: true,
   *    'import-spacing': true,
   *    'invalid-void': true,
   *    'no-inferred-empty-object-type': true,
   *    'no-mergeable-namespace': true,
   *    'no-promise-as-boolean': true,
   *    'no-tautology-expression': true,
   *    'no-unnecessary-callback-wrapper': true,
   *    'number-literal-format': true,
   *    'object-literal-sort-keys': false,
   *    'prefer-conditional-expression': true,
   *    'prefer-method-signature': true,
   *    'prefer-switch': [
   *      true,
   *      {
   *        'min-cases': 4
   *      }
   *    ],
   *    'return-undefined': true,
   *    'static-this': true,
   *    'strict-comparisons': true,
   *    'strict-string-expressions': true,
   *    'strict-type-predicates': true,
   *    typedef: [true, 'call-signature'],
   *    'unnecessary-else': true
   *  }
   *}
   *],
   */
}
