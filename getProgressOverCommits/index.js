import getConversionProgress from '../index.js'
import getCommitList from '../getCommitList/index.js'
import simpleGit from '../node_modules/simple-git/promise.js'

export default async function(projectDir, sourceExts, targetExts) {
  // get the list of commits in the project
  console.log(`getting commits for ${projectDir}`)
  const commitList = getCommitList(projectDir)
  const result = []

  let zeroProgressCounter = 0

  // set the target project directory to master
  simpleGit(projectDir).checkout('master')

  // loop over that list
  // get progress for each commit
  for (let i = 0; i < commitList.length; i++) {
    const commit = commitList[i]
    const progress = await getConversionProgress(
      projectDir,
      sourceExts,
      targetExts,
      commit.hash
    )
    console.log('progress', JSON.stringify(progress, null, 2))
    result.push({
      ...commit,
      ...progress
    })

    // update the counter
    if (progress && progress.percentConverted === 0) zeroProgressCounter += 1
    else zeroProgressCounter = 0
    console.log('zeroProgressCounter', zeroProgressCounter)

    // stop if the progress is 0 for two commits in a row
    if (zeroProgressCounter >= 2) return true
  }

  // set the target project directory to master
  simpleGit(projectDir).checkout('master')

  // as a side effect
  // write the result out to a csv file

  // return the result
  return result
}
