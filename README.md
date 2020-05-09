# XT Page Source Code Quality Config Package

### Package to unify code quality control configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

## Eslint Package

#### To Install package <@xt-pagesource/eslint-config>

```
npm install @xt-pagesource/eslint-config

```

#### Configure

#### Create the file .eslintrc in your app root folder and extend rules. you can also add additional rules as per your desire.

```
{

 "extends":["@xt-pagesource/eslint-config"]

}

```

#### Note: You can extend or modify this rules in your project as is described on the documentation of eslint, the same way as you will do when extending eslint recommended rules.

```
{

 "extends":["@xt-pagesource/eslint-config"],

 rules:{
     your rules here
 }

}

```

### Usage

#### Like you will do normally with eslint, this package is nothing else just a wrapper. - For just linting and to see the report, run:

```
eslint path/to/folder

```

For linting and autofix the problems, run:

```
eslint --fix path/to/folder

```

Recommended
Add in your package.json at the scripts section the two following scripts:

```

{
    "scripts": {
    "lint:js": "eslint path/to/folder",
    "lint:fix": "eslint  --fix path/to/folder"
    }
}

```

---

## Stylint Package

#### To Install package <@xt-pagesource/stylelint-config>

```
npm install @xt-pagesource/stylelint-config

```

#### Configure

#### Create the file .stylelintrc in your app root folder and extend rules. you can also add additional rules as per your desire.

```
{

 "extends":["@xt-pagesource/stylelint-config"]

}

```

#### Note: You can extend or modify this rules in your project as is described on the documentation of eslint, the same way as you will do when extending eslint recommended rules.

```
{

 "extends":["@xt-pagesource/eslint-config"],

 rules:{
     your rules here
 }

}

```

### Usage

#### Like you will do normally with stylelint, this package is a wrapper. - For just linting and to see the report, run:

```
stylelint path/to/folder

```

For linting and autofix the problems, run:

```
stylelint --fix path/to/folder

```

Recommended
Add in your package.json at the scripts section the two following scripts:

```

{
    "scripts": {

    "lint:css": "stylelint path/to/folder",
    }
}

```

--

## Commitlint Config Package

### Package to unify Commitlint configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

```
npm install @xt-pagesource/commitlint-config

```

#### Configure

#### Create a file commitlintrc.json in your app root folder and extend rules. you can also add additional rules as per your desire.

```
{

 "extends":["@xt-pagesource/commitlint-config"]

}

```

#### Note: You can extend or modify this rules in your project as is described on the documentation of commitlint, the same way as you will do when extending commitlint recommended rules.

```
{

 "extends":["@xt-pagesource/commitlint-config"],

 rules:{
     your rules here
 }

}

```

### Usage Recommended

Add to package.json next section or create .huskyrc file into root directory and below config:

```

{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}


```

--

## husky Config Package

### Package to unify husky configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

```
npm install @xt-pagesource/husky-config

```

#### Configure and usage

#### Create the file husky.config.js or .huskyrc.js in your app root folder.

```
module.exports = require('@xt-pagesource/husky-config');

```

#### Note: husky does not offer an “extends” mechanism as you might be familiar from tools such as ESLint but you can extend your modification on top of the shared config using something like Object destructuring, Object.assign(), or lodash.merge()

```
const huskyConfig= require('@xt-pagesource/husky-config').overrides({
  'pre-commit': 'yarn test',
})

```

--

## Prettier Config Package

### Package to unify prettier configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

```
npm install @xt-pagesource/prettier-config

```

#### Configure and usage

#### Create the file prettier.config.js or .prettierrc.js in your app root folder and extend rules. you can also add additional rules as per your desire.

```
module.exports = '@xt-pagesource/prettier-config'

```

#### Note: Prettier does not offer an “extends” mechanism as you might be familiar from tools such as ESLint but you can extend your modification on top of the shared config using something like Object destructuring, Object.assign(), or lodash.merge()

```
const prettierConfig= require('@xt-pagesource/prettier-config')

const updatedConfig = Object.assign(prettierConfig, {semi: true})

module.exports = updatedConfig

```
