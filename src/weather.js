import 'dotenv/config'
import { args } from './yargs.js';
import { handleInput } from '../utils/utils.js';
import { getWeather } from './weatherService.js';
import { generateCsv } from './csvService.js';

/**
 * Main function to get weather data and generate a CSV file
 * @returns {void}
 */
const main = async () => {

  try {
    // get command parameters with yargs
    const { city, format } = args;
    let filename = args.filename;
    if (filename === '') filename = city.toLowerCase().replace(' ', '-') + '.csv';

    // Validate input
    if (!city) throw new Error('City parameter is required');
    const validatedCity = handleInput(city);

    // get weather data
    const weatherData = await getWeather(validatedCity);

    const formatters = {
      csv: generateCsv,
    };

    const formatter = formatters[format];
    if (!formatter) throw new Error(`Unsupported format: ${format}`);
    await formatter(filename, weatherData);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();