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

## Plugins

The following ESLint plugins are included in this configuration:

{{ plugins.eslint }}

Most of the items in the chart above are plugins used for extending the core functionality of ESLint. These all start off with `eslint-plugin-`. However, there are a few items that begin with `eslint-formatter-`. These allow you to change the format that ESLint reports with. You can, for instance, run the following to change the format of the results:

```shell
eslint --format pretty --fix .
```
