(function () {
    var hundredArray = [];

    var getHundredArray = function (array) {
        while (array.length !== 100) {
            array.push(array.length + 1);
        }
    };

    getHundredArray(hundredArray);

    function getSquaresEvenNumbersList(array) {
        var squaresEvenNumbersList = [];

        array.filter(function (el) {
            return el % 2 === 0;
        }).forEach(function (value) {
            squaresEvenNumbersList.push(value * value);
        });

        return squaresEvenNumbersList;
    }

    console.log("Массив квадратов четных чисел от 1 до 100: ", getSquaresEvenNumbersList(hundredArray).join(", "));
}(1));


