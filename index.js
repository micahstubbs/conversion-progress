import path from 'path'

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

  // change to the specified commit
  if (commit) {
    // TODO: figure out if this really does execute synchronously
    runShellCommand(`cd ${projectPath}`)
    runShellCommand(`git checkout ${commit}`)
  }

  const fileList = findInDir(projectDir)
  writeJson(fileList, path.join(__dirname, 'fileList.json'))

  const filesByExtension = countFilesByExtension(fileList)
  writeJson(filesByExtension, path.join(__dirname, 'filesByExtension.json'))

  const conversionProgress = progress(
    filesByExtension,
    sourceExts,
    targetExts,
    commit
  )

  return conversionProgress
}
