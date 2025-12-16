import ForecastItem from "./ForeCastItem.jsx";

export default function Forecast({ forecast }) {
    return (
        <div className="mt-4 bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                3-Day Forecast
            </h3>

            <div className="flex justify-between">
                {forecast.map((day, index) => (
                    <ForecastItem key={index} day={day} />
                ))}
            </div>
        </div>
    );
}

