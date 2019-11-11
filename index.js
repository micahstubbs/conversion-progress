const findInDir = require('./findInDir.js')
const writeJson = require('./writeJson.js')

const projectDir = '../TypeScript-React-Conversion-Guide'

const fileList = findInDir(projectDir)
const outPath = 'fileList.json'
writeJson(fileList, outPath)
