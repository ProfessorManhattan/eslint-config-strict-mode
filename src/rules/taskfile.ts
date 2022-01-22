export const taskfileRules = {
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
        'log',
        'cmds',
        'ignore_error',
        'prefix',
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
