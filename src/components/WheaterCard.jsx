function WeatherCard({ 
    city,
    country, 
    temperature, 
    description, 
    icon 
}) {
    return (
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 text-center">

            <h2 className="text-2xl font-bold text-gray-800">
                {city}, {country}
            </h2>

            <div className="flex justify-center items-center my-4">
                <img
                    src={icon}
                    alt="weather icon"
                    className="w-20 h-20"
                />
                <span className="text-5xl font-bold text-gray-800 ml-2">
                    {temperature}°C
                </span>
            </div>

            <p className="text-gray-500 capitalize">
                {description}
            </p>

        </div>
    );
}

export default WeatherCard;
