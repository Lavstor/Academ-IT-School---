(function () {
    var fillArray = function (array, length) {
        for (var i = 0; i < length; i++) {
            array[i] = i + 1;
        }
    };

    function getEvenNumbersSquaresList(array) {
        return array.filter(function (element) {
            return element % 2 === 0;
        }).map(function (value) {
            return value * value
        });
    }

    var hundredArray = [];
    fillArray(hundredArray, 100);

    console.log("Массив квадратов четных чисел от 1 до 100: ", getEvenNumbersSquaresList(hundredArray).join(", "));
})();


