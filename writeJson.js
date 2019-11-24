// writeJSON.js
import jf from 'jsonfile'

export default function(data, filePath) {
  jf.writeFile(`${filePath}`, data, { spaces: 2 }, function(err) {
    if (err) console.error(err)
    console.log(`wrote ${filePath}`)
  })
}
