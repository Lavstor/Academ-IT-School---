(function () {
    var numbers = [500, 800, 900, 100, 1000, 10000, 6, 1, 2, 500, 1234, 414221, 5125];

    function sortArray(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    function getEvenNumbersSum(array) {
        return array.reduce(function (previousValue, sum) {
            if (sum % 2 === 0) {
                return previousValue + sum;
            }

            return previousValue;
        }, 0);
    }

    sortArray(numbers);
    console.log("Отсортированный массив: " + numbers.join(", "));
    console.log("Вырезка 5 элементов с начала массива: " + numbers.slice(0, 5).join(", "));
    console.log("Вырезка 5 элементов с конца массива: " + numbers.slice(-5).join(", "));
    console.log("Сумма элементов массива, которые являются четными числами: " + getEvenNumbersSum(numbers));
})();
