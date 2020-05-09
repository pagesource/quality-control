'use strict';

const fs = require('fs');
const npm = require('npm');
const colors = require('colors');
const sourcePackage = fs.readFileSync('package.json');
const dirPath = process.cwd();
const targetFileName = `${dirPath}/package.json`;

/* Installing peer dependencies packages  here */

const installPackages = (path, depArr) => {
  npm.load(() => {
    try {
      npm.commands.install(path, depArr);
    } catch (e) {
      console.error('error installing, please install manually'.red);
      throw e;
    }
  });
};

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
  console.info(
    `installing ${Object.keys(peerDep).length || 0} packages`.yellow
  );
  const depArr = getDepArray(peerDep);
  //installPackages(dirPath, depArr);
};

/* updating peer depedencies into user package.json */

const updateDependencies = () => {
  let sourceJson = sourcePackage && JSON.parse(sourcePackage),
    targetPackage = fs.readFileSync(targetFileName),
    targetJson = targetPackage && JSON.parse(targetPackage);

  const peerDeppendency = sourceJson.peerDependencies;

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
          console.log('An error occured while updating dev dependencies'.red);
          return console.log(err);
        }

        console.log('dev dependencies updated.'.green);
        installPeerDependencies(peerDeppendency);
      }
    );
  }
};

updateDependencies();
