import getCommitHash from './index.js'

const commit = getCommitHash()
const first7 = commit.slice(0,7)
console.log(`commit: ${commit}`)
console.log(`commit, first 7 chars: ${first7}`)