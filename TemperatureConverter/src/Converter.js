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

    var inputValue = document.querySelector(".input");
    var fahrenheit = document.querySelector(".fahrenheit");
    var kelvin = document.querySelector(".kelvin");
    var errorMassage = document.querySelector(".error-massage");

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