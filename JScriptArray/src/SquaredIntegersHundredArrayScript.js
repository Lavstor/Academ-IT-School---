(function () {
    var hundredArray = [];

    var fillHundredArray = function (array) {
        while (array.length !== 100) {
            array.push(array.length + 1);
        }
    };

    fillHundredArray(hundredArray);

    function getSquaresEvenNumbersList(array) {
        var squaresEvenNumbersList = [];

        array.filter(function (element) {
            return element % 2 === 0;
        }).forEach(function (value) {
            squaresEvenNumbersList.push(value * value);
        });

        return squaresEvenNumbersList;
    }

    console.log("Массив квадратов четных чисел от 1 до 100: ", getSquaresEvenNumbersList(hundredArray).join(", "));
}(1));


