const fs = require('fs');
const path = require('path');

const BASE = "./lib";
const modules = {};

(function importModules(dirName = BASE) {
  const baseDir = fs.readdirSync(dirName, { withFileTypes: true });
  for (const p of baseDir) {
    if (p.isDirectory()) {
      importModules(`${dirName}/${p.name}`);
    }
    if (p.isFile()) {
      const mName = kebab2BigCamel(path.parse(p.name).name);
      modules[mName] = require(`${dirName}/${p.name}`).default;
    }
  }
})();

function kebab2BigCamel (str) {
  return str.split('-').map(v => v[0].toUpperCase() + v.slice(1)).join('');
}

module.exports = modules;