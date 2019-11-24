import path from 'path'

import getCommitHash from './getCommitHash/index.js'
import findInDir from './findInDir.js'
import writeJson from './writeJson.js'
import countFilesByExtension from './countFilesByExtension.js'
import progress from './progress.js'

export default function(projectDir, sourceExts, targetExts) {
  const __dirname = path.resolve(path.dirname(''))
  const projectPath = path.join(__dirname, projectDir)

  const fileList = findInDir(projectDir)
  writeJson(fileList, path.join(__dirname, 'fileList.json'))

  const filesByExtension = countFilesByExtension(fileList)
  writeJson(filesByExtension, path.join(__dirname, 'filesByExtension.json'))

  const commit = getCommitHash()

  const conversionProgress = progress(
    filesByExtension,
    sourceExts,
    targetExts,
    commit
  )

  return conversionProgress
}
