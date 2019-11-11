const findInDir = require('./findInDir.js')
const writeJson = require('./writeJson.js')
const countFilesByExtension = require('./countFilesByExtension.js')

const projectDir = '../TypeScript-React-Conversion-Guide'

const fileList = findInDir(projectDir)
writeJson(fileList, 'fileList.json')

const filesByExtension = countFilesByExtension(fileList)
writeJson(filesByExtension, 'filesByExtension.json')
