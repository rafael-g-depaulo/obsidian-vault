
## Random stuff
- [plugin about dynamic imports](https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations)


## Common issues

### Env vars
you can add a `*.d.ts` fileand declare a `ImportMetaEnv` interface, like so:

```ts
// <reference types="vite/client" />

interface BaseImportMetaEnv {
  // readonly [key: ImportMetaEnvFallbackKey]: any
  readonly BASE_URL: string
  readonly MODE: 'development' | 'production'
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMetaEnv extends BaseImportMetaEnv {
  readonly VITE_STRAPI_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

**PS:** adding `"vite/client"` to `compilerOptions.types` in `tsconfig.json` might also be necessary

#### Sources
- [Vite docs](https://vite.dev/guide/env-and-mode)
- [SO question](https://stackoverflow.com/questions/66039933/typescript-types-for-import-meta-env)