# XT Page Source Stylelint Config Package

### Package to unify Stylelint configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

#### To Install package .

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
