import axios from 'axios';

/**
 * Get weather data for a city
 * @param {string} city - The city to get weather data for
 * @returns {Promise<Array>} - The weather data for the city
 */
const getWeather = async (city) => {
  const url = `${process.env.WEATHER_BASE_URL}${process.env.WEATHER_FORECAST_ENDPOINT}?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3`

  // fetch weather data from https://www.weatherapi.com/docs/
  try {
    console.log('Fetching weather data for city : ', city)
    const response = await axios.get(url);
    if (response.status === 200) {
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