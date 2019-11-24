import path from 'path'
import runGitCommand from '../runGitCommand/index.js'

export default function(projectDir) {
  const __dirname = path.resolve(path.dirname(''))
  const projectPath = path.join(__dirname, projectDir)

  const getCommitList = "git log --oneline | nl -v0 | sed 's/^ \+/&HEAD~/'"
  const command = `cd ${projectPath} && ${getCommitList}`
  const commitListString = runGitCommand(command)

  const lines = commitListString.split('\n')
  // console.log('lines', lines)

  const parsedLines = lines.map((line, i) => parseLine(line, i))
  // console.log('parsedLines', parsedLines)
  return parsedLines
}

function parseLine(line, i) {
  let newLine = ''
  // console.log('line\n', line)
  
  newLine = line.trim()
  // console.log('newLine after first trim\n', newLine)

  const index = i
  newLine = newLine.slice(String(i).length).trim()
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
