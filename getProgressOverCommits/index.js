import getConversionProgress from '../index.js'
import getCommitList from '../getCommitList/index.js'

export default function(projectDir, sourceExts, targetExts) {
  // get the list of commits in the project
  console.log(`getting commits for ${projectDir}`)
  const commitList = getCommitList(projectDir)
  const result = []

  let zeroProgressCounter = 0

  // loop over that list
  // get progress for each commit
  commitList.some(commit => {
    const progress = getConversionProgress(
      projectDir,
      sourceExts,
      targetExts,
      commit.hash
    )
    result.push({
      ...commit,
      ...progress
    })

    // update the counter
    if (progress && progress.percentConverted === 0) zeroProgressCounter += 1
    else zeroProgressCounter = 0

    // stop if the progress is 0 for two commits in a row
    if (zeroProgressCounter >= 2) return true
  })

  // as a side effect
  // write the result out to a csv file

  // return the result
  return result
}
