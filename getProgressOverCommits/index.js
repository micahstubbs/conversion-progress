import getConversionProgress from '../index.js'
import getCommitList from '../getCommitList/index.js'

export default function (projectDir, sourceExts, targetExts) {
  // get the list of commits in the project
  console.log(`getting commits for ${projectDir}`)
  const commitList = getCommitList(projectDir)
  const result = []

  let zeroProgressCounter = 0

  // loop over that list 
  // get progress for each commit
  // stop if the progress is 0 for two commits in a row
  
  commitList.some(commit => {
    result.push({
      ...commit,
      ...getConversionProgress(projectDir, sourceExts, targetExts, commit.hash)
    })
  })

  // as a side effect
  // write the result out to a csv file

  // return the result
  return result
}