
import { useState } from "react";
import SearchBar from "./SearchBar.jsx";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export default function Home() {
    const [city, setCity] = useState(null)
    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState([])

    const handleSearch = async (city) => {
        console.log(API_KEY);
        
        try {
            // current weather
            const weatherRes = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            const weatherData = await weatherRes.json();

            // forecast
            const forecastRes = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
            );
            const forecastData = await forecastRes.json();


            setWeather({
                city: weatherData.name,
                country: weatherData.sys.country,
                temperature: Math.round(weatherData.main.temp),
                description: weatherData.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            });

            // взимаме по 1 прогноза на ден (опростено)
            const daily = forecastData.list
                .filter((_, index) => index % 8 === 0)
                .slice(0, 3)
                .map(item => ({
                    day: new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
                    min: Math.round(item.main.temp_min),
                    max: Math.round(item.main.temp_max),
                    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                }));

            setForecast(daily);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center px-4">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Weather App
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Search for a city to see the current weather
                </p>


                <SearchBar setCity={setCity} city={city} handleSearch={handleSearch} weather={weather} forecast={forecast} />


            </div>

        </div>
    );
}
