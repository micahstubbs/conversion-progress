import { execSync } from 'child_process'

export default function (command) {
  return execSync(command)
    .toString()
    .trim()
}
