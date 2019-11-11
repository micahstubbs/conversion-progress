const findInDir = require('./findInDir.js')
const writeJson = require('./writeJson.js')
const countFilesByExtension = require('./countFilesByExtension.js')
const progress = require('./progress.js')

const projectDir = '../TypeScript-React-Conversion-Guide'

const fileList = findInDir(projectDir)
writeJson(fileList, 'fileList.json')

const filesByExtension = countFilesByExtension(fileList)
writeJson(filesByExtension, 'filesByExtension.json')

const sourceExts = ['.js', '.jsx']
const targetExts = ['.ts', '.tsx']
const conversionProgress = progress(filesByExtension, sourceExts, targetExts)
