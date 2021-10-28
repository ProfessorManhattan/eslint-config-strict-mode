const fs = require('fs')
const YAML = require('yaml')
import { plugins, templates } from './constants.js';

export const acquireProjectType = () => {
    if (fs.existsSync('./Taskfile.yml')) {
        return YAML.parse(fs.readFileSync('./Taskfile.yml', 'utf8'))
    } else {
        return {
            vars: {
                REPOSITORY_TYPE: 'generic',
                REPOSITORY_SUBTYPE: 'generic'
            }
        };
    }
};

export const getExtends = (type, subType) => {
  switch (type + '-' + subType) {
    case 'angular-app':
      return [
        ...templates.angular,
        ...templates.eslint,
        ...templates.typescript,
        ...templates.json,
        ...templates.toml,
        ...templates.yml,
        ...templates.prettier
      ];
    case 'angular-website':
      return [
        ...templates.angular,
        ...templates.eslint,
        ...templates.typescript,
        ...templates.json,
        ...templates.toml,
        ...templates.yml,
        ...templates.prettier
      ];
    case 'npm-cli':
      return [
        ...templates.eslint,
        ...templates.typescript,
        ...templates.node,
        ...templates.json,
        ...templates.toml,
        ...templates.yml,
        ...templates.prettier
      ];
    case 'npm-library':
      return [
        ...templates.eslint,
        ...templates.typescript,
        ...templates.node,
        ...templates.json,
        ...templates.toml,
        ...templates.yml,
        ...templates.prettier
      ]
    default:
      return [...templates.eslint, ...templates.yml, ...templates.json, ...templates.toml, ...templates.yml, ...templates.prettier]
  }
}

export const getParser = (type, subType) => {
  switch (type + '-' + subType) {
    case 'angular-app':
      return '@typescript-eslint/parser'
    case 'angular-website':
      return '@typescript-eslint/parser'
    case 'npm-cli':
      return '@typescript-eslint/parser'
    case 'npm-library':
      return '@typescript-eslint/parser'
    default:
      return 'espree'
  }
}

export const getPlugins = (type, subType) => {
  switch (type + '-' + subType) {
    case 'angular-app':
      return [...plugins.eslint, ...plugins.html, ...plugins.prettier, ...plugins.typescript]
    case 'angular-website':
      return [...plugins.eslint, ...plugins.html, ...plugins.prettier, ...plugins.typescript]
    case 'npm-cli':
      return [...plugins.eslint, ...plugins.prettier, ...plugins.typescript, ...plugins.node]
    case 'npm-library':
      return [...plugins.eslint, ...plugins.prettier, ...plugins.typescript, ...plugins.node]
    default:
      return [...plugins.eslint, ...plugins.prettier]
  }
}

// Automatically uses https://www.schemastore.org/api/json/catalog.json in addition to the below configurations
export const schemaDefinitions = (type, subType) => {
  const schemas = [
    {
      "fileMatch": [".commitlint.config.cjs"],
      "schema": "https://json.schemastore.org/commitlintrc.json"
    },
    {
      "fileMatch": [".eslintrc.cjs"],
      "schema": "https://json.schemastore.org/eslintrc"
    },
    {
      "fileMatch": [".stylelintrc.cjs"],
      "schema": "https://json.schemastore.org/stylelintrc.json"
    },
    {
      "fileMatch": ["Taskfile.yml", "Taskfile-*.yml"],
      "schema": "https://json.schemastore.org/taskfile.json"
    }
    {
      "fileMatch": ["tsconfig.json", "tsconfig.module.json"],
      "schema": "https://json.schemastore.org/tsconfig.json"
    },
  ];
  return schemaDefinitions;
}
