import getCommitHash from './getCommitHash'

const path = require('path')

const findInDir = require('./findInDir.js')
const writeJson = require('./writeJson.js')
const countFilesByExtension = require('./countFilesByExtension.js')
const progress = require('./progress.js')


const projectDir = path.join(__dirname, '../TypeScript-React-Conversion-Guide')

const fileList = findInDir(projectDir)
writeJson(fileList, path.join(__dirname, 'fileList.json'))

const filesByExtension = countFilesByExtension(fileList)
writeJson(filesByExtension, path.join(__dirname, 'filesByExtension.json'))

const sourceExts = ['.js', '.jsx']
const targetExts = ['.ts', '.tsx']
const conversionProgress = progress(filesByExtension, sourceExts, targetExts, commit)
