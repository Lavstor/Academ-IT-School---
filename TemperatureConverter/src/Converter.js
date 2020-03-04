document.addEventListener("DOMContentLoaded", function () {
    function getKelvin(value) {
        return floorNumber(value + 273.15);
    }

    function getFahrenheit(value) {
        return floorNumber(value * 9 / 5 + 32);
    }

    function floorNumber(number) {
        return Math.floor(number * 100) / 100;
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