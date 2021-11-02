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

export const ansibleRules = {
  'yml/sort-keys': [
    'error',
    {
      order: ansibleOrder,
      pathPattern: '^.$'
    },
    {
      order: ansibleOrder,
      pathPattern: '^.tasks.$'
    },
    {
      order: { type: 'asc' },
      pathPattern: '^.([a-zA-Z0-9].+).$'
    }
  ]
}

export const ansibleMetaRules = {
  'yml/sort-keys': [
    'error',
    {
      order: ['galaxy_info', 'dependencies'],
      pathPattern: '^$'
    },
    {
      order: ['role', 'when'],
      pathPattern: '^dependencies'
    },
    {
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
      ],
      pathPattern: '^galaxy_info$'
    }
  ]
}
