function progress(filesByExt, sourceExts, targetExts) {
  let sourceFileCount = 0
  let targetFileCount = 0

  sourceExts.forEach(ext => {
    if (filesByExt[ext]) sourceFileCount += filesByExt[ext].count
  })

  targetExts.forEach(ext => {
    if (filesByExt[ext]) targetFileCount += filesByExt[ext].count
  })

  const result = targetFileCount / (sourceFileCount + targetFileCount)
  const percent = Math.round(result * 100, 2)

  console.log(
    `measuring progress converting ${JSON.stringify(
      sourceExts
    )} to ${JSON.stringify(targetExts)}`
  )
  console.log(`${sourceFileCount} ${JSON.stringify(sourceExts)} files`)
  console.log(`${targetFileCount} ${JSON.stringify(targetExts)} files`)
  console.log(`${percent}% converted`)

  return result
}

module.exports = progress
