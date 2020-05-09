# XT Page Source Commitlint Config Package

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
