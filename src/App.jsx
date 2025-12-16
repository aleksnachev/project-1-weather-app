import { useState } from "react";

function App() {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (!city.trim()) return;
        console.log("Searching for:", city);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center px-4">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Weather App
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Search for a city to see the current weather
                </p>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />

                    <button
                        onClick={handleSearch}
                        className="px-5 py-2 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
                    >
                        Search
                    </button>
                </div>

            </div>

        </div>
    );
}

export default App;
