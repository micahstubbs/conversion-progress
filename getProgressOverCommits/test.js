import getProgressOverCommits from './index.js'

const projectDir = '../../ts-test-repo'
const sourceExts = ['.js', '.jsx']
const targetExts = ['.ts', '.tsx']
const result = getProgressOverCommits(projectDir, sourceExts, targetExts)

console.log('result from test', result)
