# XT Page Source Prettier Config Package

### Package to unify prettier configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

```
npm install @xt-pagesource/prettier-config

```

#### Configure and usage

#### Create the file prettier.config.js or .prettierrc.js in your app root folder and extend rules. you can also add additional rules as per your desire.

```
module.exports = require('@xt-pagesource/prettier-config');

```

#### Note: Prettier does not offer an “extends” mechanism as you might be familiar from tools such as ESLint but you can extend your modification on top of the shared config using something like Object destructuring, Object.assign(), or lodash.merge()

```
const prettierConfig= require('@xt-pagesource/prettier-config')

const updatedConfig = Object.assign(prettierConfig, {semi: true})

module.exports = updatedConfig

```
