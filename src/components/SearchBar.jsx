import Forecast from "./Forecast.jsx"
import WeatherCard from "./WheaterCard.jsx"

export default function SearchBar({
    city,
    setCity,
    handleSearch,
    weather,
    forecast
}) {

    const onSubmit = (formData) => {
        const newCity = formData.get('city').trim()
        if(newCity.length === 0) return alert('You must write valid city')
        setCity(newCity)
        console.log(newCity);
        handleSearch(newCity)
    }
    return (

        <div className="w-full max-w-md flex flex-col items-stretch">
        <form action={onSubmit}>
            <input
                name="city"
                type="text"
                placeholder="Enter city name"
                className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <button
                className="px-5 py-2 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
            >
                Search
            </button>
        </form>
        {city && (
            <>
                <WeatherCard {...weather}/>
                <Forecast forecast={forecast}/>
            </>
        )}
        </div>


    )
}