import runGitCommand from '../runGitCommand/index.js'

export default function() {
  const getCurrentCommitHash = 'git rev-parse HEAD'
  return runGitCommand(getCurrentCommitHash)
}
