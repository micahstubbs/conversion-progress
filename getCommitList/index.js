import runGitCommand from '../runGitCommand/index.js'

export default function() {
  const getCommitList = "git log --oneline | nl -v0 | sed 's/^ \+/&HEAD~/'"
  const commitListString = runGitCommand(getCommitList)

  const lines = commitListString.split('\n')
  // console.log('lines', lines)

  const parsedLines = lines.map((line) => parseLine(line))
  // console.log('parsedLines', parsedLines)
  return parsedLines
}

function parseLine(line) {
  let newLine = ''
  // console.log('line\n', line)
  
  newLine = line.trim()
  // console.log('newLine after first trim\n', newLine)

  const index = newLine.slice(0,1) 
  newLine = newLine.slice(1).trim()
  // console.log('newLine\n', newLine)
  // console.log('###### end parseLine #######\n')
  const hash = newLine.slice(0,7)
  newLine = newLine.slice(7).trim()
  const message = newLine
  return {
    index, 
    hash,
    message
  }
}
