import runGitCommand from '../runGitCommand/index.js'

export default function() {
  const getCommitList = "git log --oneline | nl -v0 | sed 's/^ \+/&HEAD~/'"
  return runGitCommand(getCommitList)
}
