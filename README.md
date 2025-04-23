# 🌦️ Weather Forecast CLI - Node.js

This project is a Node.js script that retrieves the weather forecast for a given city over the next 3 days, and generates a CSV file with the following data :

- **Date**
- **Weather Description**
- **Average Temperature**

<br>

## 1. Prerequisites

- Node.js ≥ 12
- A free API key obtained from [https://www.weatherapi.com](https://www.weatherapi.com)

<br>

## 2. Installation

Clone the project :

```bash
git clone https://github.com/votre-utilisateur//edhec.git
cd edhec
```

Install the depedencies :

```bash
npm install
```

Create the `.env` file in the root folder with the following variables :

```env
WEATHER_API_KEY=your_api_key_here
WEATHER_BASE_URL=https://api.weatherapi.com/v1
WEATHER_FORECAST_ENDPOINT=/forecast.json
```

<br>

## 3. Usage

### Full mode (city, format, file name)

```bash
node src/weather.js --city="London" --format="csv" --filename="weather.csv"
```

### Quick mode (city only, the rest is default)

```bash
node src/weather.js --city="Roma"
```

Defautls :
- format = `csv`
- filename = `roma.csv` (automatically transformed city)

<br>

## 4. CSV output example

A `ressources/london.csv` file is generated, with contents like:

```
Date,Weather,Average Temperature
22/04/2025,Sunny,17.5
23/04/2025,Cloudy,15.8
24/04/2025,Rain,13.2
```