(function () {
    function getKelvin(value) {
        return value + 273.15;
    }

    function getFahrenheit(value) {
        return value * 9 / 5 + 32;
    }

    var inputValue = document.querySelector(".input");
    var fahrenheit = document.querySelector(".fahrenheit");
    var kelvin = document.querySelector(".kelvin");

    var button = document.querySelector(".transfer");
    button.addEventListener("click", function () {
        kelvin.innerText = getKelvin(+inputValue.value);
        fahrenheit.innerText = getFahrenheit(+inputValue.value);
    });
})();