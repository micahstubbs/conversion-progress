const fs = require('fs')
const path = require('path')

// iterating on https://gist.github.com/kethinov/6658166
function findInDir(dir, filter = /.*/, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const fileStat = fs.lstatSync(filePath)

    if (fileStat.isDirectory()) {
      findInDir(filePath, filter, fileList)
    } else if (filter.test(filePath)) {
      fileList.push(filePath)
    }
  })

  return fileList
}

module.exports = findInDir
// Usage
// findInDir('./public/audio/', /\.mp3$/)
