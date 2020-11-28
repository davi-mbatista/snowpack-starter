## Snowpack starter

A simple and yet modern development environment template

## [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues) ![ci workflow badge](https://github.com/davi-mbatista/snowpack-starter/workflows/.github/workflows/ci.yml/badge.svg)



### Tooling

-   [Snowpack](https://www.snowpack.dev/)
-   [Preact](https://preactjs.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [Playwright](https://playwright.dev/)
-   [Testing library](https://testing-library.com/)
-   [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
-   [Prettier](https://prettier.io/)
-   [GitHub Actions](https://github.com/features/actions)

### Goals

-   Extended testing capabilities with [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/), and [Testing library](https://testing-library.com/)
-   [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) integration
-   Grouped configuration files that keeps the root folder and `package.json` less crowded
-   Fast (supports HMR with [Snowpack](https://www.snowpack.dev/))

### Built-in scripts

-   `start`: initializes the development server using [Snowpack](https://www.snowpack.dev/)
-   `build`: creates a production ready build of the source files with [Snowpack](https://www.snowpack.dev/)
-   `serve`: builds and serves the source files (mostly used for e2e tests)
-   `test`: executes all available testing commands (unit, e2e, lighthouse)
    -   `test:unit`: runs test files with Jest
    -   `test:e2e`: runs e2e test files with [Playwright](https://playwright.dev/) (using [jest-playwright]) against Chrome, Firefox, and Safari
    -   `test:lighthouse`: runs [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) on the build source files
        (playwright))
-   `lint` & `format`: runs [Prettier](https://prettier.io/) on the `src/` folder (and ignore the files set in the `.prettierignore` configuration).
-   `prepare`: initializes the dependencies and modules with [Snowpack](https://www.snowpack.dev/). This command is automatically executed when you run `npm install`

_For configuration details check the specific files under the `config/` folder_

### CI

This template comes with a built-in GitHub actions workflow that will execute tests on every push to the branch. For more details check the `.github/workflows/ci.yml` file.

### Code editor

If you're using vscode, please keep in mind that this template has specific configuration files that will be used when you open it on vscode. The configuration file is mostly necessary to point the editor to the correct location of the [Prettier](https://prettier.io/) configuration file at `/config/prettier.config.js`.
