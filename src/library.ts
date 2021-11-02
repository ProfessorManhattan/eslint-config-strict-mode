import * as fs from 'node:fs'
import parseGitignore from 'parse-gitignore'
import * as YAML from 'yaml'
import { plugins, templates } from './constants'

export const acquireProjectType = (): {
  readonly vars: { readonly REPOSITORY_SUBTYPE: string; readonly REPOSITORY_TYPE: string }
} => {
  if (fs.existsSync('./Taskfile.yml')) {
    return YAML.parse(fs.readFileSync('./Taskfile.yml', 'utf8'))
  }

  return {
    vars: {
      REPOSITORY_SUBTYPE: 'generic',
      REPOSITORY_TYPE: 'generic'
    }
  }
}

// eslint-disable-next-line fp/no-nil
const getScriptsExtends = (type: string, subType: string) => {
  const base = [...templates.eslint, ...templates.typescript, ...templates.prettier]
  switch (`${type}-${subType}`) {
    case 'angular':
      return [...templates.angular, ...templates.jest, ...base]
    case 'npm-cli':
      return [...templates.jest, ...templates.node, ...base]
    case 'npm-config':
      return [...templates.node, ...base]
    case 'npm-library':
      return [...templates.jest, ...templates.node, ...base]
    default:
      return []
  }
}

// eslint-disable-next-line fp/no-nil
export const getExtends = (
  extension: 'json' | 'script' | 'toml' | 'yml',
  type: string,
  subType: string
): readonly string[] => {
  switch (extension) {
    case 'json':
      return [...templates.eslint, ...templates.json, ...templates.prettier]
    case 'script':
      return getScriptsExtends(type, subType)
    case 'toml':
      return [...templates.eslint, ...templates.toml, ...templates.prettier]
    case 'yml':
      return [...templates.eslint, ...templates.yml, ...templates.prettier]
    default:
      return []
  }
}

// eslint-disable-next-line fp/no-nil
const getScriptsPlugins = (type: string, subType: string) => {
  const base = [...plugins.eslint, ...plugins.typescript, ...plugins.prettier]
  switch (`${type}-${subType}`) {
    case 'angular':
      return [...plugins.html, ...plugins.jest, ...base]
    case 'npm-cli':
      return [...plugins.jest, ...base]
    case 'npm-library':
      return [...plugins.jest, ...base]
    default:
      return base
  }
}

// eslint-disable-next-line fp/no-nil
export const getPlugins = (
  extension: 'json' | 'script' | 'toml' | 'yml',
  type: string,
  subType: string
): readonly string[] => {
  switch (extension) {
    case 'json':
      return [...plugins.eslint, ...plugins.prettier]
    case 'script':
      return getScriptsPlugins(type, subType)
    case 'toml':
      return [...plugins.eslint, ...plugins.prettier]
    case 'yml':
      return [...plugins.eslint, ...plugins.prettier]
    default:
      return []
  }
}

export const getGitignore = (): readonly string[] => {
  return parseGitignore(fs.readFileSync('./.gitignore'))
}

// Automatically uses https://www.schemastore.org/api/json/catalog.json in addition to the below configurations
export const schemaDefinitions = (): readonly { readonly fileMatch: readonly string[]; readonly schema: string }[] => {
  return [
    {
      fileMatch: ['.commitlint.config.cjs'],
      schema: 'https://json.schemastore.org/commitlintrc.json'
    },
    {
      fileMatch: ['.eslintrc.cjs'],
      schema: 'https://json.schemastore.org/eslintrc'
    },
    {
      fileMatch: ['.stylelintrc.cjs'],
      schema: 'https://json.schemastore.org/stylelintrc.json'
    },
    {
      fileMatch: ['Taskfile.yml', 'Taskfile-*.yml'],
      schema: 'https://json.schemastore.org/taskfile.json'
    },
    {
      fileMatch: ['tsconfig.json', 'tsconfig.module.json'],
      schema: 'https://json.schemastore.org/tsconfig.json'
    }
  ]
}
