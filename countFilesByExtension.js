import path from 'path'

export default function countFilesByExtension(filelist = []) {
  const resultsHash = {}
  filelist.forEach(file => {
    const ext = path.extname(file)
    if (!resultsHash[ext]) resultsHash[ext] = { count: 0, files: [] }
    resultsHash[ext].files.push(file)
    resultsHash[ext].count += 1
  })

  return resultsHash
}

