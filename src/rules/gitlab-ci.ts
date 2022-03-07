/**
 * Order used for sorting `*.gitlab-ci.yml` files
 */
export const gitlabCIOrder = [
  'stage',
  'stages',
  'image',
  'services',
  'extends',
  'inherit',
  'environment',
  'parallel',
  'resource_group',
  'allow_failure',
  'interruptible',
  'retry',
  'timeout',
  'when',
  'only',
  'except',
  'workflow',
  'rules',
  'needs',
  'trigger',
  'secrets',
  'variables',
  'tags',
  'dash_configuration',
  'coverage',
  'dependencies',
  'cache',
  'before_script',
  'script',
  'after_script',
  'artifacts',
  'release',
  'pages',
  'include'
]

export const gitlabCIRules = {
  'unicorn/prevent-abbreviations': 'off',
  'yml/sort-keys': [
    'error',
    {
      order: gitlabCIOrder,
      pathPattern: '.*'
    },
    {
      order: ['name', 'entrypoint', 'command', 'alias', 'variables'],
      pathPattern: 'services[[][0-9].$'
    },
    {
      order: ['if', 'changes', 'exists', 'allow_failure', 'variables', 'when'],
      pathPattern: 'rules[[][0-9].$'
    },
    {
      order: ['name', 'entrypoint'],
      pathPattern: 'image$'
    },
    {
      order: gitlabCIOrder,
      pathPattern: '^[[]?.?.?([a-zA-Z0-9-]+).?.?..*$'
    },
    {
      order: gitlabCIOrder,
      pathPattern: '^$'
    }
  ]
}
