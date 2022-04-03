import glob from 'glob'
import * as fs from 'node:fs'
import path from 'node:path'
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

const getScriptsExtends = (type: string, subType: string, isTypeScript = true) => {
  const baseScripts = isTypeScript
    ? [...templates.eslint, ...templates.common, ...templates.typescript, ...templates.prettier]
    : [...templates.eslint, ...templates.common, ...templates.javascript, ...templates.prettier]
  const base = process.env.ESLINT_STAGED_ONLY ? [...baseScripts, ...templates.diff] : baseScripts
  switch (`${type}-${subType}`) {
    case 'angular-app':
      return [...templates.angular, ...templates.jest, ...base]
    case 'angular-website':
      return [...templates.angular, ...templates.jest, ...base]
    case 'npm-cli':
      return [...templates.jest, ...templates.node, ...base]
    case 'npm-config':
      return [...templates.node, ...base]
    case 'npm-library':
      return [...templates.jest, ...templates.node, ...base]
    default:
      return [...templates.node, ...base]
  }
}

export const getExtends = (
  extension: 'javascript' | 'json' | 'toml' | 'typescript' | 'yml',
  type: string,
  subType: string
): readonly string[] => {
  const diff = process.env.ESLINT_STAGED_ONLY ? templates.diff : []
  switch (extension) {
    case 'json':
      return [...templates.eslint, ...templates.json, ...templates.prettier, ...diff]
    case 'javascript':
      return getScriptsExtends(type, subType, false)
    case 'toml':
      return [...templates.eslint, ...templates.toml, ...templates.prettier, ...diff]
    case 'typescript':
      return getScriptsExtends(type, subType)
    case 'yml':
      return [...templates.eslint, ...templates.yml, ...templates.prettier, ...diff]
    default:
      return []
  }
}

const getScriptsPlugins = (type: string, subType: string, isTypeScript = true) => {
  const base = isTypeScript
    ? [...plugins.eslint, ...plugins.common, ...plugins.typescript, ...plugins.prettier]
    : [...plugins.eslint, ...plugins.common, ...plugins.javascript, ...plugins.prettier]
  switch (`${type}-${subType}`) {
    case 'angular-app':
      return [...plugins.angular, ...plugins.html, ...plugins.jest, ...base]
    case 'angular-website':
      return [...plugins.angular, ...plugins.html, ...plugins.jest, ...base]
    case 'npm-cli':
      return [...plugins.jest, ...base]
    case 'npm-library':
      return [...plugins.jest, ...base]
    default:
      return [...plugins.jest, ...base]
  }
}

export const getPlugins = (
  extension: 'javascript' | 'json' | 'toml' | 'typescript' | 'yml',
  type: string,
  subType: string
): readonly string[] => {
  switch (extension) {
    case 'javascript':
      return getScriptsPlugins(type, subType, false)
    case 'json':
      return [...plugins.eslint, ...plugins.prettier]
    case 'toml':
      return [...plugins.eslint, ...plugins.prettier]
    case 'typescript':
      return getScriptsPlugins(type, subType)
    case 'yml':
      return [...plugins.eslint, ...plugins.prettier]
    default:
      return getScriptsPlugins(type, subType)
  }
}

export const getGitignore = (): readonly string[] => {
  if (fs.existsSync('./.gitignore')) {
    return parseGitignore(fs.readFileSync('./.gitignore'))
  }

  return []
}

export const getGlob = (pattern: string): readonly string[] => {
  const files = glob.sync(pattern)

  return files.map((file: string) => path.basename(file))
}

export const vscodeTasksOrder = [
  'version',
  'label',
  'type',
  'group',
  'command',
  'linux',
  'osx',
  'windows',
  'isBackground',
  'presentation',
  'reveal',
  'echo',
  'focus',
  'panel',
  'problemMatcher',
  'base',
  'owner',
  'severity',
  'fileLocation',
  'pattern',
  'regexp',
  'kind',
  'file',
  'location',
  'line',
  'column',
  'endLine',
  'endColumn',
  'code',
  'message',
  'loop',
  'background',
  'activeOnStart',
  'beginsPattern',
  'endsPattern',
  'tasks',
  'cwd',
  'env',
  'shell',
  'executable',
  'options',
  'args',
  'runOptions',
  'reevaluateOnRerun',
  'runOn'
]
