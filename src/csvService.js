import fs from "fs";

/**
 * Generate a CSV file from weather data
 * @param {string} fileName - The name of the CSV file to create
 * @param {Array} data - The weather data to include in the CSV file
 * @returns {Promise<boolean>} - True if the CSV file was created successfully, false otherwise
 * @throws {Error} - If there's an error writing the CSV file
 */
const generateCsv = async (fileName, data) => {
  if (!fileName || !data) throw new Error('No data received to generate csv data');

  const header = 'Date,Weather,Average Temperature\n';

  // generate csv data
  const rows = data.map(entry => {
    try {
      const date = entry.date || 'N/A';
      const weatherText = entry.day.condition.text || 'N/A';
      const avgTemp = entry.day.avgtemp_c || 'N/A';
      return `${date},${weatherText},${avgTemp}`;
    } catch (error) {
      console.warn('Error while generating csv data', error.message);
      return 'Error processing data';
    }
  });


  const csvData = header + rows.join('\n');
  const filePath = `ressources/${fileName}`

  // create csv file
  try {
    console.log('Generating CSV file...')
    await fs.promises.writeFile(filePath, csvData, 'UTF8');
    console.log(`CSV file ${fileName} created successfully at ${filePath}`)
    return true;

  } catch (error) {
    console.error('Error writing CSV file:', error.message);
    throw new Error(`Failed to write CSV file: ${error.message}`);
  }
}

export { generateCsv }