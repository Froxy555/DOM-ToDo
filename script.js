document.getElementById("search-button").addEventListener("click", function() {
    const city = document.getElementById("city-input").value;
    const apiKey = "e3b2b230eeff9ca1a00c108eabebd0dd"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hu`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("A város nem található. Kérjük, próbálja újra.");
                return;
            }
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText = `Hőmérséklet: ${data.main.temp}°C`;
            document.getElementById("weather-description").innerText = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            const weatherIcon = document.getElementById("weather-icon");
            weatherIcon.setAttribute("src", iconUrl);
            weatherIcon.style.display = "block";
        })
        .catch(error => {
            alert("Hiba történt. Kérjük, próbálja újra.");
        });
});
