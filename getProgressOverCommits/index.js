import getConversionProgress from '../index.js'
import getCommitList from '../getCommitList/index.js'

export default function (projectDir, sourceExts, targetExts) {
  // get the list of commits in the project
  console.log(`getting commits for ${projectDir}`)
  const commitList = getCommitList(projectDir)

  // loop over that list 
  // get progress for each commit
  // stop if the progress is 0 for two commits in a row

  // as a side effect
  // write the result out to a csv file

  // return the result
  return commitList
}