// writeJSON.js
const jf = require('jsonfile')
module.exports = function(data, filePath) {
  jf.writeFile(`${filePath}`, data, { spaces: 2 }, function(err) {
    if (err) console.error(err)
    console.log(`wrote ${filePath}`)
  })
}
