document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("cityInput");
    const getWeatherBtn = document.getElementById("getWeather");
    const result = document.getElementById("weatherResult");

    if (!cityInput || !getWeatherBtn || !result) return;

    // Вставь свой API key от OpenWeatherMap
    const API_KEY = "DEIN_API_KEY_HIER";

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        result.textContent = "Lade Wetterdaten...";

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=de`
            );
            if (!res.ok) {
                result.textContent = "Stadt nicht gefunden.";
                return;
            }
            const data = await res.json();
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            result.textContent = `${city}: ${temp}°C, ${desc}`;
        } catch (e) {
            result.textContent = "Fehler beim Laden der Daten.";
        }
    });
});
