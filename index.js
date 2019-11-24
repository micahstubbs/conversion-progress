import path from 'path'
import simpleGit from 'simple-git'

import getCommitHash from './getCommitHash/index.js'
import findInDir from './findInDir.js'
import writeJson from './writeJson.js'
import countFilesByExtension from './countFilesByExtension.js'
import progress from './progress.js'
import runShellCommand from './runShellCommand/index.js'

export default function getConversionProgress(
  projectDir,
  sourceExts,
  targetExts,
  commit
) {
  const __dirname = path.resolve(path.dirname(''))
  const projectPath = path.join(__dirname, projectDir)
  let conversionProgress

  // change to the specified commit
  simpleGit(projectDir)
    .checkout(commit)
    .exec(() => {
      // const fileList = findInDir(projectDir)
      // writeJson(fileList, path.join(__dirname, 'fileList.json'))

      // const filesByExtension = countFilesByExtension(fileList)
      // writeJson(filesByExtension, path.join(__dirname, 'filesByExtension.json'))

      conversionProgress = progress(
        filesByExtension,
        sourceExts,
        targetExts,
        commit
      )
    })
    .checkout('master')
    .exec(() => {
      return conversionProgress
    })
}
