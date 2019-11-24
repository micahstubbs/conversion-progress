import fs from 'fs'
import fastcsv from 'fast-csv'

export default function writeCsv(data, outputFile) {
  const ws = fs.createWriteStream(outputFile)
  fastcsv.write(data, { headers: true }).pipe(ws)
}
