# XT Page Source husky Config Package

### Package to unify husky configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

```
npm install @xt-pagesource/husky-config

```

#### Configure and usage

#### Create the file husky.config.js or .huskyrc.js in your app root folder and extend rules. you can also add additional rules as per your desire.

```
module.exports = '@xt-pagesource/husky-config'

```

#### Note: husky does not offer an “extends” mechanism as you might be familiar from tools such as ESLint but you can extend your modification on top of the shared config using something like Object destructuring, Object.assign(), or lodash.merge()

```
const huskyConfig= require('@xt-pagesource/husky-config').overrides({
  'pre-commit': 'yarn test',
})

```

