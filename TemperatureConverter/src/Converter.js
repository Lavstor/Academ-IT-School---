(function () {
    var button = document.querySelector(".transfer");
    var inputValue = document.querySelector(".input");
    var fahrenheit = document.querySelector(".fahrenheit");
    var kelvin = document.querySelector(".kelvin");

    button.addEventListener("click", function () {
        kelvin.innerText = getKelvin(+inputValue.value);
        fahrenheit.innerText = getFahrenheit(+inputValue.value);
    });

    function getKelvin(value) {
        return value + 273.15;
    }

    function getFahrenheit(value) {
        return value * 9 / 5 + 32;
    }
})();




