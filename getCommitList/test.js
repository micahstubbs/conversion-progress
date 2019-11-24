import getCommitList from './index.js'

const commitList = getCommitList()

console.log(`commit list:\n ${JSON.stringify(commitList, null, 2)}`)

