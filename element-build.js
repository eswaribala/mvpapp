const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/mvpapp/runtime.js',
    './dist/mvpapp/polyfills.js',
    './dist/mvpapp/scripts.js',
    './dist/mvpapp/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/message.js');
  await fs.copyFile('./dist/mvpapp/styles.css', 'elements/styles.css')
  await fs.copy('./dist/mvpapp/assets/', 'elements/assets/' )

})()
