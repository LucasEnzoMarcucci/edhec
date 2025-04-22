import axios from 'axios';

/**
 * Get weather data for a city
 * @param {string} city - The city to get weather data for
 * @returns {Promise<Array>} - The weather data for the city
 * @throws {Error} - If there's an error fetching weather data
 */
const getWeather = async (city) => {
  if (!city) throw new Error('City parameter is required');
  if (!process.env.WEATHER_API_KEY || !process.env.WEATHER_BASE_URL || !process.env.WEATHER_FORECAST_ENDPOINT) {
    throw new Error('Missing required environment variables for weather API');
  }

  const url = `${process.env.WEATHER_BASE_URL}${process.env.WEATHER_FORECAST_ENDPOINT}?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3`

  // fetch weather data from https://www.weatherapi.com/docs/
  try {
    console.log('Fetching weather data for city : ', city)
    const response = await axios.get(url);

    if (response.status === 200) {
      if (!response.data?.forecast?.forecastday) {
        throw new Error('Weather data format is not as expected');
      }
      return response.data.forecast.forecastday;
    } else {
      throw new Error(response.data.error.data.error.code);
    }

  } catch (error) {
    const { code, message } = error.response.data.error;
    throw new Error(`${code} : ${message}`);
  }
}

export { getWeather }