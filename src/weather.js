import 'dotenv/config'
import { args } from './yargs.js';
import { getWeather } from './weatherService.js';
import { generateCsv } from './csvService.js';
/**
 * Main function to get weather data and generate a CSV file
 * @returns {void}
 */
const main = async () => {
  // get command parameters with yargs
  const { city, format } = args;
  let filename = args.filename;
  if (filename === '') filename = city.toLowerCase().replace(' ', '-') + '.csv';

  // get weather data
  const weatherData = await getWeather(city);

  // generate csv file
  if (weatherData) {
    switch (format) {
      case 'csv':
        generateCsv(filename, weatherData);
        break;
      default:
        throw new Error('Format not supported');
    }
  }
}

main();