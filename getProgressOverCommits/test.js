import getProgressOverCommits from './index.js'

const projectDir = '../../TypeScript-React-Conversion-Guide'
const sourceExts = ['.js', '.jsx']
const targetExts = ['.ts', '.tsx']
const result = getProgressOverCommits(projectDir, sourceExts, targetExts)

console.log('result', result)