import { execSync } from 'child_process'

const gitCommand = "git rev-parse HEAD"

export default function getCommitHash() {
  return execSync(gitCommand).toString().trim();
}

