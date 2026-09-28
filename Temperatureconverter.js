
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertButton.addEventListener("click", function () {

    const inputValue = temperatureInput.value;
    const selectedUnit = unitSelect.value;

    errorMessage.textContent = "";

    if (inputValue === "") {

        errorMessage.textContent =
            "Please enter a temperature value.";

        clearResults();

        return;
    }


    const temperature = Number(inputValue);


    if (Number.isNaN(temperature)) {

        errorMessage.textContent =
            "Please enter a valid number.";

        clearResults();

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    if (selectedUnit === "celsius") {

        celsius = temperature;

        fahrenheit = (temperature * 9 / 5) + 32;

        kelvin = temperature + 273.15;

    }

    else if (selectedUnit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (temperature - 32) * 5 / 9;

        kelvin = celsius + 273.15;

    }

    else if (selectedUnit === "kelvin") {

        kelvin = temperature;

        celsius = temperature - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }


    if (kelvin < 0) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero.";

        clearResults();

        return;
    }


    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";
});


function clearResults() {

    celsiusResult.textContent = "-- °C";

    fahrenheitResult.textContent = "-- °F";

    kelvinResult.textContent = "-- K";
}
