# Nova Stack

## Fontes

- [TMTecnologia](https://github.com/TMTecnologia/turborepo-typescript-fullstack)
- [Turborepo - Design System Example](https://github.com/vercel/turborepo/tree/main/examples/design-system)
- [NativeBase + Solito Universal App TS Example](https://github.com/GeekyAnts/nativebase-templates/tree/master/solito-universal-app-template-nativebase-typescript)
- [Labfaz/feature/TransitionIntoNewInfra](https://github.com/rafael-g-depaulo/labfaz/tree/feature/TransitionIntoNewInfra)

## [Turborepo](https://turborepo.org/docs/getting-started)
- yarn 3.1.1
- changesets ("lerna + semver_changelog")
- syncpack
- Creche TMTecnologia:
    - ESLint (+Prettier +lint-staged)
        - [ABC size](https://www.npmjs.com/package/eslint-plugin-abcsize)
        - [cyclomatic complexity](https://eslint.org/docs/latest/rules/complexity)
    - Commitlint (+ commitlint-config-gitmoji)
    - Commitzen (+ cz-gitmoji)
    - Husky: Git Hooks
    - DangerJS: Feedback no PR
    - GithubActions para [TBD](https://trunkbaseddevelopment.com/) e validações
        - [Segurança](https://www.maxivanov.io/code-and-security-checks-in-typescript-projects-with-github-actions/)
        - [npm-run-all](https://github.com/mysticatea/npm-run-all)
    - pinst: resolve treta postinstall Heroku deploy

## Apps

- strapi: Manter
- ui-docs: Mover Storybook stories para cá
- client:
    - Manter Jest
    - ReactJS -> Nextjs
        - Oportunidade para utilizar recursos de ssr para otimização de entrega das páginas mais simples
    - Cypress -> [Playwright](https://playwright.dev/docs/test-typescript)
    - Adicionar suporte à arquivos BDD feature
        - [Escrevendo BDD em português](https://cucumber.io/docs/gherkin/languages/#gherkin-dialect-pt-content)
        - TallyB: Cucumber+Playwright, [tutorial](https://tally-b.medium.com/e2e-testing-with-cucumber-and-playwright-9584d3ef3360) e [repo](https://github.com/Tallyb/cucumber-playwright)
        - [Tutorial configurando Playwright + Cucumber](https://dev.to/jankaritech/behavior-driven-development-bdd-using-playwright-n1o)
        - Leia mais sobre o combo [Playwright + Cucumber](https://medium.com/team-rockstars-it/playwright-cucumber-introduction-1-3-105dcf29a328)
- api:
    - Manter AdminJS (a.k.a AdminBro)
    - Express -> Nestjs
        - [AdminJS Plugin](https://docs.adminjs.co/module-@adminjs_nestjs.html)
    - TypeORM -> Prisma
        - [Como migrar?](https://www.prisma.io/docs/guides/migrate-to-prisma/migrate-from-typeorm)
        - [Gera Schema de BD existente](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/is-prisma-an-orm#workflow-for-incremental-adoption-in-projects-with-an-existing-database)
        - [AdminJS plugin](https://docs.adminjs.co/module-@adminjs_prisma.html)
        - [NestJS plugin](https://docs.nestjs.com/recipes/prisma)
    - [Swagger](https://docs.nestjs.com/openapi/introduction)
    - Jest (unit) + Supertest (e2e)

## Packages

- core: component lib (NativeBase + Solito)
- config:
    - tsconfig
    - eslint-config
- utils: helper functions

o resto manter como está labfaz/monorepo/libs revisando seu conteúdo

- strapi-utils
- server-conn
- mailer
- permissions
- entities
