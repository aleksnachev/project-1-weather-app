
import { useState } from "react";
import SearchBar from "./SearchBar.jsx";

export default function Home() {
        const [city,setCity] = useState(null)
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center px-4">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Weather App
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Search for a city to see the current weather
                </p>
                
                
                <SearchBar setCity={setCity} city = {city}/>


            </div>

        </div>
    );
}
