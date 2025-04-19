## Start the project

Get the forecasts with full control (city, file format, filename)
```powershell
node src/weather.js --city="London" --format="csv" --filename="weather.csv"
```

You can just pass the city it will use the default arguments
```powershell
node src/weather.js --city="Roma"
```

The files created are stored in the "ressources" folder
