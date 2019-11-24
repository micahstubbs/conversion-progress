import fs from 'fs'
import path from 'path'
import simpleGit from '../node_modules/simple-git/promise.js'

import getConversionProgress from '../index.js'
import getCommitList from '../getCommitList/index.js'
import writeCsv from '../writeCsv.js'

export default async function(projectDir, sourceExts, targetExts) {
  const __dirname = path.resolve(path.dirname(''))

  // get the list of commits in the project
  console.log(`getting commits for ${projectDir}`)
  const commitList = getCommitList(projectDir)
  const result = []

  let zeroProgressCounter = 0

  // set the target project directory to master
  const begin = await simpleGit(projectDir).checkout('master')
  console.log('begin', begin)

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
    if (zeroProgressCounter >= 2) break
  }

  // set the target project directory to master
  const end = await simpleGit(projectDir).checkout('master')
  console.log('end', end)

  // as a side effect
  // write the result out to a csv file
  const basename = path.basename(projectDir)
  const filename = `${basename}.csv`
  const dataDir = '../data'
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  const outputFile = path.join(__dirname, dataDir, filename)
  writeCsv(result, outputFile)

  // return the result
  return result
}
