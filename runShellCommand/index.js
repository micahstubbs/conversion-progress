import { exec } from 'child_process'

export default function(command) {
  const child = exec(command, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
    if (error !== null) {
      console.log(`exec error: ${error}`)
    }
  })
}
