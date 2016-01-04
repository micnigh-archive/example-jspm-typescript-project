JSPM typescript example project

# Requirements/Recommended

 - [node] `v4+`
 - [atom]
    - Packages
      - [atom-typescript]
      - [atom-lint]
      - [linter-tslint]

# Quick start

```bash
# first time
npm install -g jspm tsd jspm-server
npm install
jspm install
tsd install

# every time
jspm-server
```

# Features

 - [typescript] - javascript type support, also enables ES6 syntax
 - [jspm] - manages all frontend modules, transpiling during development, and bundling for production
 - [jspm-server] - simple dev server with jspm caching and hot reload
 - [tslint] - automatic code style guide enforcement

# How to

## Bundle

```bash
# bundle all together, including libs, no `system.js` dependency
jspm bundle-sfx --minify client/src/app .tmp/all.js

# bundle with libs/app seperate, requires `system.js` lib and config loaded
jspm bundle --minify client/src/app - [npm:**/*] - [github:**/*] .tmp/app.js
jspm bundle --minify client/src/**/* - [client/src/**/*] .tmp/lib.js

```

## Add libraries

### With typescript support

Find and add typescript definitions using [tsd].

For example, to add [backbone]

```bash

# install jspm npm package for backbone
# saves dependencies in `config.js` mappings
jspm install npm:backbone

# install typescript definitions for backbone using tsd
# saves dependencies in `tsd.json`
tsd install backbone --save

```

### Without typescript support

For example, to add [es5-shim]

```bash
# install jspm npm package for es5-shim
# saves dependencies in `config.js` mappings
jspm install npm:es5-shim

```

Then we can load it with

```js
import "es5-shim";
import "es5-shim/es5-sham";
```

If we need to reference the module, we add a shim definition file for it.  For example, inside a `shim.d.ts` file in your project

```js
declare module "es5-shim" { let m: any; export = m; }
declare module "es5-shim/es5-sham" { let m: any; export = m; }

```

Then we can use the module directly

```js
import * as es5_shim from "es5-shim";
console.log(es5_shim);
```

---

[node]: https://nodejs.org/
[atom]: https://atom.io/
[atom-typescript]: https://atom.io/packages/atom-typescript
[jspm]: http://jspm.io/
[jspm-server]: https://github.com/geelen/jspm-server
[typescript]: http://www.typescriptlang.org/
[backbone]: http://backbonejs.org/
[tsd]: http://definitelytyped.org/tsd/
[tslint]: http://palantir.github.io/tslint/
[atom-lint]: https://atom.io/packages/atom-lint
[linter-tslint]: https://atom.io/packages/linter-tslint
[es5-shim]: https://github.com/es-shims/es5-shim
