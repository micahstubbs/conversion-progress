import getProgressOverCommits from './index.js'

const projectDir = '../../ts-test-repo'
const sourceExts = ['.js', '.jsx']
const targetExts = ['.ts', '.tsx']
getProgressOverCommits(projectDir, sourceExts, targetExts).then(result => {
  console.log('result from test', result)
})
