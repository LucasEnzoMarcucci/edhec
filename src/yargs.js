import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const args = yargs(hideBin(process.argv))
  .option('city', {
    type: 'string',
    default: 'Paris',
  })
  .option('format', {
    type: 'string',
    default: 'csv',
  })
  .option('filename', {
    type: 'string',
    default: '',
  })
  .parse();

export { args };