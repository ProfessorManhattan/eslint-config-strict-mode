## Example

In order to leverage this configuration, you will need to install it with NPM and then reference it in your ESLint configuration file. If you are storing your configuration in your `package.json` file then you can use the following example.

`**package.json`

```json
{
    "name": "my-npm-package",
    "eslintConfig": {
        "extends": "@megabytelabs/eslint-config
    }
}
```

You can override options set in the `@megabytelabs/eslint-config` by adding the options to the `eslintConfig` section in the `package.json` file.

With the configuration in place, you can run ESLint by running:

```shell
npx eslint './src/**/*.ts'
```
