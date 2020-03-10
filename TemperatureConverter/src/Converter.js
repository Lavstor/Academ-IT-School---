document.addEventListener("DOMContentLoaded", function () {
    function getKelvin(value) {
        return (value + 273.15).toFixed(2);
    }

    function getFahrenheit(value) {
        return (value * 9 / 5 + 32).toFixed(2);
    }

    var converterPage = document.querySelector(".converter-container");
    var inputValue = document.querySelector(".input");
    var fahrenheit = document.querySelector(".fahrenheit");
    var kelvin = document.querySelector(".kelvin");
    var errorMassage = converterPage.querySelector(".error-message");

    var button = document.querySelector(".transfer");
    button.addEventListener("click", function () {
        if (inputValue.value === "") {
            errorMassage.style.display = "block";

            return;
        }

        errorMassage.style.display = "none";

        kelvin.innerText = getKelvin(+inputValue.value);
        fahrenheit.innerText = getFahrenheit(+inputValue.value);
    });
});