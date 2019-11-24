import getConversionProgress from './index.js'

const projectDir = '../TypeScript-React-Conversion-Guide'
const sourceExts = ['.js', '.jsx']
const targetExts = ['.ts', '.tsx']
getConversionProgress(projectDir, sourceExts, targetExts)
