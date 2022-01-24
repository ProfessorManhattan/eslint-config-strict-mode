<!-- ⚠️ This README has been generated from the file(s) ".config/docs/blueprint-readme-config.md" ⚠️--><div align="center">
  <center>
    <a href="https://github.com/ProfessorManhattan/eslint-config-strict-mode">
      <img width="148" height="148" alt="Strict ESLint Config logo" src="https://gitlab.com/megabyte-labs/npm/configs/eslint/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center">Config: A Strict, Awesome ESLint Config<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">A configuration managed by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <h4 align="center">
    <a href="website.homepage" title="Megabyte Labs homepage" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/home-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/eslint-config-strict-mode/-/blob/master/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/contributing-solid.svg" />
    </a>
    <a href="chat_url" title="Slack chat room" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/chat-solid.svg" />
    </a>
    <a href="ProfessorManhattan/npm-eslint-config-strict-mode" title="GitHub mirror" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/github-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/eslint-config-strict-mode" title="GitLab repository" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/gitlab-solid.svg" />
    </a>
  </h4>
  <p align="center">
    <a href="website.npm_package/eslint-config-strict-mode" target="_blank">
      <img alt="Version: 1.0.13" src="https://img.shields.io/badge/version-1.0.13-blue.svg?cacheSeconds=2592000&style=for-the-badge" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/eslint-config-strict-mode/commits/master" title="GitLab CI build status" target="_blank">
      <img alt="Build status" src="https://gitlab.com/megabyte-labs/npm/eslint-config-strict-mode/badges/master/pipeline.svg">
    </a>
    <a href="website.npm_package/eslint-config-strict-mode" title="Dependency status reported by Depfu">
      <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/npm-eslint-config-strict-mode?style=for-the-badge&logo=npm" />
    </a>
    <a href="website.npm_package/eslint-config-strict-mode" title="Zip file size">
      <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/eslint-config-strict-mode?style=bad_style&logo=npm" />
    </a>
    <a href="" title="Total downloads of eslint-config-strict-mode on npmjs.org">
      <img alt="Total downloads of eslint-config-strict-mode on npmjs.org" src="https://img.shields.io/npm/dt/eslint-config-strict-mode?logo=npm&style=for-the-badge&logo=npm" />
    </a>
    <a href="website.npm_package/eslint-config-strict-mode" title="Number of vulnerabilities from Snyk scan on eslint-config-strict-mode">
      <img alt="Number of vulnerabilities from Snyk scan on eslint-config-strict-mode" src="https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-strict-mode?style=for-the-badge&logo=npm" />
    </a>
    <a href="website.documentation/npm" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style=for-the-badge" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/eslint-config-strict-mode/-/raw/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?style=for-the-badge" />
    </a>
  </p>
</div>

> </br><h3 align="center">**ESLint configuration for linting TS, JS, JSON, YAML, and TOML**</h3></br>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Usage](#usage)
- [Plugins](#plugins)
- [Contributing](#contributing)
- [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

This [ESLint](https://eslint.org/) configuration package includes basically every quality ESLint plugin available. The default settings are meant to enforce strict design patterns among developers who code with TypeScript and JavaScript. It also includes linting rules for JSON, YAML, and TOML. Most of the rules include auto-fix functionality and it even sorts JSON and YAML. You can use this configuration as is or customize it to your liking so you can have your own shared ESLint configuration package!

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

- **[Node.js >14.18.0](repository.project.node)**
- **[Python >3.10.0](repository.project.python)**

<a href="#usage" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Usage

To make use of this configuration, you need to first install the configuration in your Node.js project:

```shell
npm install --save-dev eslint-config-strict-mode
```

After that, you need to include a reference to the package in your `package.json`:

```json
{
  "name": "mynpmpackage",
  "version": "0.0.1",
  ...
  "eslintConfig": {
    "extends": "eslint-config-strict-mode"
  }
}
```

You can override the settings that are provided by the plugin by including additional rules in your `package.json`. For instance, if you wanted to turn off a rule named `max-len`, your `package.json` would look something like this:

```json
{
  "name": "mynpmpackage",
  "version": "0.0.1",
  ...
  "eslintConfig": {
    "extends": "eslint-config-strict-mode",
    "rules": {
        "max-len": "off"
    }
  }
}
```

<a href="#plugins" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Plugins

The following ESLint plugins are included in this configuration:

| ESLint Plugin                                                                                                  | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [`@typescript-eslint/eslint-plugin`](https://npmjs.com/package/@typescript-eslint/eslint-plugin)               | An ESLint plugin which provides lint rules for TypeScript codebases                                                  |
| [`@typescript-eslint/eslint-plugin-tslint`](https://npmjs.com/package/@typescript-eslint/eslint-plugin-tslint) | ESLint plugin that wraps a TSLint configuration and lints the whole source using TSLint                              |
| [`@typescript-eslint/parser`](https://npmjs.com/package/@typescript-eslint/parser)                             | An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code                |
| [`eslint-config-prettier`](https://npmjs.com/package/eslint-config-prettier)                                   | Turns off all rules that are unnecessary or might conflict with Prettier                                             |
| [`eslint-formatter-gitlab`](https://npmjs.com/package/eslint-formatter-gitlab)                                 | Formatter for GitLab CI that integrates results into merge requests                                                  |
| [`eslint-formatter-pretty`](https://npmjs.com/package/eslint-formatter-pretty)                                 | Stylish formatter for terminal results that includes features such as clicking result to open code in editor         |
| [`eslint-plugin-array-func`](https://npmjs.com/package/eslint-plugin-array-func)                               | Rules for Array functions and methods                                                                                |
| [`eslint-plugin-editorconfig`](https://npmjs.com/package/eslint-plugin-editorconfig)                           | An ESLint plugin to enforce EditorConfig rules                                                                       |
| [`eslint-plugin-eslint-comments`](https://npmjs.com/package/eslint-plugin-eslint-comments)                     | Additional ESLint rules for ESLint directive comments                                                                |
| [`eslint-plugin-etc`](https://npmjs.com/package/eslint-plugin-etc)                                             | More generalcpurpose TypeScript-related ESLint rules                                                                 |
| [`eslint-plugin-ext`](https://npmjs.com/package/eslint-plugin-ext)                                             | eslint extended rules                                                                                                |
| [`eslint-plugin-filenames`](https://npmjs.com/package/eslint-plugin-filenames)                                 | Eslint plugin to check filenames                                                                                     |
| [`eslint-plugin-fp`](https://npmjs.com/package/eslint-plugin-fp)                                               | ESLint rules for functional programming                                                                              |
| [`eslint-plugin-functional`](https://npmjs.com/package/eslint-plugin-functional)                               | ESLint plugin to disable mutation and promote functional programming in JavaScript and TypeScript                    |
| [`eslint-plugin-import`](https://npmjs.com/package/eslint-plugin-import)                                       | ESLint plugin with rules that help validate proper imports                                                           |
| [`eslint-plugin-jest`](https://npmjs.com/package/eslint-plugin-jest)                                           | ESLint plugin for Jest                                                                                               |
| [`eslint-plugin-jest-async`](https://npmjs.com/package/eslint-plugin-jest-async)                               | ESLint rules for Jest to detect improper test assertions for asynchronous actions                                    |
| [`eslint-plugin-jest-dom`](https://npmjs.com/package/eslint-plugin-dom)                                        | Lint DOM API performance                                                                                             |
| [`eslint-plugin-jest-formatting`](https://npmjs.com/package/eslint-plugin-formatting)                          | Linting rules for ESLint realted to code style formatting                                                            |
| [`eslint-plugin-json-schema-validator`](https://npmjs.com/package/eslint-plugin-json-schema-validator)         | ESLint plugin that validates data using JSON Schema Validator                                                        |
| [`eslint-plugin-jsonc`](https://npmjs.com/package/eslint-plugin-jsonc)                                         | ESLint plugin for JSON, JSONC and JSON5 files                                                                        |
| [`eslint-plugin-no-constructor-bind`](https://npmjs.com/package/eslint-plugin-no-constructor-bind)             | Prefer class arrow functions to binding in the constructor                                                           |
| [`eslint-plugin-no-explicit-type-exports`](https://npmjs.com/package/eslint-plugin-no-explicit-type-exports)   | A plugin to guard against exporting imported types                                                                   |
| [`eslint-plugin-no-loops`](https://npmjs.com/package/eslint-plugin-no-loops)                                   | A plugin to disallow use of loops                                                                                    |
| [`eslint-plugin-no-secrets`](https://npmjs.com/package/eslint-plugin-no-secrets)                               | An eslint plugin to find strings that might be secrets or credentials                                                |
| [`eslint-plugin-no-unsanitized`](https://npmjs.com/package/eslint-plugin-no-unsanitized)                       | Custom ESLint rule to disallows unsafe innerHTML, outerHTML, insertAdjacentHTML and alike                            |
| [`eslint-plugin-no-use-extend-native`](https://npmjs.com/package/eslint-plugin-no-use-extend-native)           | ESLint plugin to prevent use of extended native objects                                                              |
| [`eslint-plugin-node`](https://npmjs.com/package/eslint-plugin-node)                                           | Additional ESLint's rules for Node.js                                                                                |
| [`eslint-plugin-optimize-regex`](https://npmjs.com/package/eslint-plugin-optimize-regex)                       | Optimize regex literals                                                                                              |
| [`eslint-plugin-prefer-arrow`](https://npmjs.com/package/eslint-plugin-prefer-arrow)                           | ESLint plugin to prefer arrow functions                                                                              |
| [`eslint-plugin-prettier`](https://npmjs.com/package/eslint-plugin-prettier)                                   | ESLint plugin to prefer arrow functions                                                                              |
| [`eslint-plugin-promise`](https://npmjs.com/package/eslint-plugin-promise)                                     | Enforce best practices for JavaScript promises                                                                       |
| [`eslint-plugin-regexp`](https://npmjs.com/package/eslint-plugin-regexp)                                       | ESLint plugin for finding RegExp mistakes and RegExp style guide violations                                          |
| [`eslint-plugin-rxjs`](https://npmjs.com/package/eslint-plugin-rxjs)                                           | ESLint rules for RxJS                                                                                                |
| [`eslint-plugin-security`](https://npmjs.com/package/eslint-plugin-security)                                   | ESLint rules for Node Security                                                                                       |
| [`eslint-plugin-sonarjs`](https://npmjs.com/package/eslint-plugin-sonarjs)                                     | SonarJS rules for ESLint                                                                                             |
| [`eslint-plugin-sort-class-members`](https://npmjs.com/package/eslint-plugin-sort-class-members)               | ESLint rule for enforcing consistent ES6 class member order                                                          |
| [`eslint-plugin-sort-keys-fix`](https://npmjs.com/package/eslint-plugin-sort-keys-fix)                         | Fork of eslint rule that sorts keys in objects with autofix enabled                                                  |
| [`eslint-plugin-switch-case`](https://npmjs.com/package/eslint-plugin-switch-case)                             | Switch-case-specific linting rules for ESLint                                                                        |
| [`eslint-plugin-toml`](https://npmjs.com/package/eslint-plugin-toml)                                           | ESLint plugin provides linting rules for TOML                                                                        |
| [`eslint-plugin-tsdoc`](https://npmjs.com/package/eslint-plugin-tsdoc)                                         | This ESLint plugin provides a rule for validating that TypeScript doc comments conform to the TSDoc specification    |
| [`eslint-plugin-typescript-sort-keys`](https://npmjs.com/package/eslint-plugin-typescript-sort-keys)           | A linter plugin to require sorting interface and string enum keys                                                    |
| [`eslint-plugin-unicorn`](https://npmjs.com/package/eslint-plugin-unicorn)                                     | Various awesome ESLint rules                                                                                         |
| [`eslint-plugin-unused-imports`](https://npmjs.com/package/eslint-plugin-unused-imports)                       | Package to seperate no-unused-vars and no-unused-imports for eslint as well as providing an autofixer for the latter |
| [`eslint-plugin-woke`](https://npmjs.com/package/eslint-plugin-woke)                                           | ESLint plugin to promote diversity and inclusion in codebases                                                        |
| [`eslint-plugin-yml`](https://npmjs.com/package/eslint-plugin-yml)                                             | ESLint plugin provides linting rules for YAML                                                                        |

Most of the items in the chart above are plugins used for extending the core functionality of ESLint. These all start off with `eslint-plugin-`. However, there are a few items that begin with `eslint-formatter-`. These allow you to change the format that ESLint reports with. You can, for instance, run the following to change the format of the results:

```shell
eslint --format pretty --fix .
```

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ProfessorManhattan/eslint-config-strict-mode/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/ProfessorManhattan/eslint-config-strict-mode/blob/master/CONTRIBUTING.md).

<details>
<summary><b>Sponsorship</b></summary>
<br/>
<blockquote>
<br/>
Dear Awesome Person,<br/><br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

**_Brian Zalewski_**<br/><br/>

</blockquote>

<a title="Support us on Open Collective" href="https://opencollective.com/megabytelabs" target="_blank">
  <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=opencollective&label=OpenCollective&logoColor=white&style=for-the-badge" />
</a>
<a title="Support us on GitHub" href="https://github.com/ProfessorManhattan" target="_blank">
  <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/ProfessorManhattan?label=GitHub%20sponsors&logo=github&style=for-the-badge" />
</a>
<a href="https://www.patreon.com/ProfessorManhattan" title="Support us on Patreon" target="_blank">
  <img alt="Patreon" src="https://img.shields.io/badge/Patreon-Support-052d49?logo=patreon&logoColor=white&style=for-the-badge" />
</a>

</details>

<a href="#license" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## License

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/npm/configs/eslint/-/blob/master/LICENSE) licensed.
