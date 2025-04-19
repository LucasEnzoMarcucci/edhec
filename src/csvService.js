import fs from "fs";

/**
 * Generate a CSV file from weather data
 * @param {string} fileName - The name of the CSV file to create
 * @param {Array} data - The weather data to include in the CSV file
 * @returns {boolean} - True if the CSV file was created successfully, false otherwise
 */
const generateCsv = (fileName, data) => {
  if (!data) throw new Error('No data received to generate csv data');

  // generate csv data
  const header = 'Date, Weather, Average Temperature\n';
  const rows = data.map(entry => {
    const date = entry.date;
    const weatherText = entry.day.condition.text;
    const avgTemp = entry.day.avgtemp_c;
    return `${date},${weatherText},${avgTemp}`;
  });

  const csvData = header + rows.join('\n');
  const filePath = `ressources/${fileName}`

  // create csv file
  try {
    console.log('Generating CSV file...')
    const writeStream = fs.createWriteStream(filePath)
    writeStream.write(csvData, 'UTF8')
    writeStream.end()
    console.log(`CSV file ${fileName} created successfully at ${filePath}`)
    return true;

  } catch (error) {
    console.log(error)
    throw error;
  }
}

export { generateCsv }