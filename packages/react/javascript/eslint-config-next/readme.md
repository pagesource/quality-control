# XT Page Source Eslint Config Package

### Package to unify ESLint configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

```
npm install @xt-pagesource/eslint-config-next

```

#### Configure

#### The file .eslintrc.js will be created in your app root folder. you can also add additional rules as per your desire.

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
