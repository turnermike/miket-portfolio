/**
* Remove/Keep Files In Public Dir
* 
* - add file names or regex to filesToKeep array
*
*/

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const filesToKeep = [
  '.DS_Store', 
  'index.html', 
  'robots.txt', 
  /favicon.*/,
  /apple-touch.*/,
];

const publicDir = path.join(__dirname, '../public');

// read files in public directory
fs.readdirSync(publicDir).forEach((file) => {
  const filePath = path.join(publicDir, file);

  // check if the file matches any of the patterns
  const shouldKeep = filesToKeep.some((pattern) => {
    if (typeof pattern === 'string') {
      return file === pattern;
    }
    return pattern.test(file);
  });

  // if the file doesn't match, delete it
  if (!shouldKeep) {
    rimraf.sync(filePath);
  }
});

console.log('Public folder cleaned!');
