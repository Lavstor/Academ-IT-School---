function printArrayOfIntegersWork() {
    var arrayOfIntegers = [500, 800, 900, 100, 1000, 10000, 6, 1, 2, 500, 1234, 414221, 5125];

    function sortArray(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });

        console.log("Отсортированный массив: " + array.join(", "));
    }

    function sliceArray(array) {
        var firstFiveIntegers = array.slice(0, 5);
        var lastFiveIntegers = array.slice(-5);

        console.log("Вырезка 5 элементов с начала массива: " + firstFiveIntegers.join(", "));
        console.log("Вырезка 5 элементов с конца массива: " + lastFiveIntegers.join(", "));
    }

    function printSum(array) {
        var sum = array.reduce(function (previousValue, sum) {
            if (sum % 2 === 0) {
                previousValue += sum;
            }

            return previousValue;
        }, 0);

        console.log(sum);
    }

    sortArray(arrayOfIntegers);
    sliceArray(arrayOfIntegers);
    printSum(arrayOfIntegers);
}

printArrayOfIntegersWork();