'use strict';

const fs = require('fs');
const path = require('path');
const npm = require('npm');
const dirPath = path.resolve(__dirname).split('/node_modules')[0];
const eslintfile = `${dirPath}/.eslintrc.js`
const targetFileName = `${dirPath}/package.json`;
const sourcePackage = fs.readFileSync('package.json');

const content = fs.readFileSync('index.js', {encoding:'utf8', flag:'r'})

/* Installing peer dependencies packages  here */

const installPackages = (path, depArr) => {
  npm.load(() => {
    try {
      npm.commands.install(path, depArr);
    } catch (e) {
      console.error('error installing, please install manually');
      throw e;
    }
  });
};

const cretaeLintFile = () => {
  try {
    fs.writeFileSync(`${dirPath}/.eslintrc.js`, content)
    console.log('file written successfully')
  } catch (err) {
    console.error(err)
  }
}

/* creating peer dependencies array from peer dependencies object */

const getDepArray = (peerDep) => {
  if (!peerDep) return [];

  var deps = [];
  for (var mod in peerDep) {
    deps.push(mod + '@' + peerDep[mod]);
  }

  return deps;
};

/* Installing peer dependencies into user root directory */

const installPeerDependencies = (peerDep) => {
  console.info(`installing ${Object.keys(peerDep).length || 0} packages`);
  const depArr = getDepArray(peerDep);
  console.log('dependency arr', depArr)
  installPackages(dirPath, depArr);
};

/* updating peer depedencies into user package.json */

const updateDependencies = () => {
  let sourceJson = sourcePackage && JSON.parse(sourcePackage),
    targetPackage = fs.readFileSync(targetFileName),
    targetJson = targetPackage && JSON.parse(targetPackage);

  const peerDeppendency = sourceJson.peerDependencies;
  console.log('peer dependency', peerDeppendency)
  if (sourceJson && targetJson) {
    if (targetJson.hasOwnProperty('devDependencies')) {
      targetJson.devDependencies = Object.assign(
        targetJson.devDependencies,
        peerDeppendency
      );
    } else {
      targetJson.devDependencies = peerDeppendency;
    }

    fs.writeFile(
      targetFileName,
      JSON.stringify(targetJson, null, 2),
      'utf8',
      function (err) {
        if (err) {
          console.log('An error occured while updating dev dependencies');
          return console.log(err);
        }

        console.log('dev dependencies updated.');
        installPeerDependencies(peerDeppendency);
      }
    );
  }
};

updateDependencies();
cretaeLintFile();
