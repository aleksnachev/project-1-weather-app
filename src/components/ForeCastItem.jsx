function ForecastItem({ day }) {
    return (
        <div className="flex flex-col items-center text-center">

            <span className="text-sm text-gray-500">
                {day.day}
            </span>

            <img
                src={day.icon}
                alt="forecast icon"
                className="w-12 h-12"
            />

            <span className="text-sm font-semibold text-gray-700">
                {day.min}° / {day.max}°
            </span>

        </div>
    );
}

export default ForecastItem;
