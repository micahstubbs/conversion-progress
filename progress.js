export default function progress(filesByExt, sourceExts, targetExts, commit) {
  let sourceFileCount = 0
  let targetFileCount = 0

  sourceExts.forEach(ext => {
    if (filesByExt[ext]) sourceFileCount += filesByExt[ext].count
  })

  targetExts.forEach(ext => {
    if (filesByExt[ext]) targetFileCount += filesByExt[ext].count
  })

  const proportionConverted =
    targetFileCount / (sourceFileCount + targetFileCount)
  const percentConverted = Math.round(proportionConverted * 100, 2)

  console.log(
    `measuring progress converting ${JSON.stringify(
      sourceExts
    )} to ${JSON.stringify(targetExts)}`
  )

  console.log(`commit: ${commit}`)
  console.log(`${sourceFileCount} ${JSON.stringify(sourceExts)} files`)
  console.log(`${targetFileCount} ${JSON.stringify(targetExts)} files`)
  console.log(`${percentConverted}% converted`)

  return {
    commit,
    sourceFileCount,
    targetFileCount,
    percentConverted
  }
}
