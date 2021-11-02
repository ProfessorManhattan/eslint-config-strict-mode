## Features

This ESLint configuration package:

1. Allows you to install all of the following plugins simply by adding `@megabytelabs/eslint-config` to your `devDependencies`:

{{eslint_dependencies}}

2. Includes logic that dynamically uses the appropriate parser based on the application type. The application type is detected by checking the `REPOSITORY_TYPE` and `REPOSITORY_SUBTYPE` in the `Taskfile.yml` file which should be in the root of the project.
3. Attempts to be as strict as possible without being too annoying
