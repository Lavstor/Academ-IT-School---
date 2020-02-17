function printArrayOfIntegersWork() {
    var arrayOfIntegers = [500, 800, 900, 100, 1000, 10000, 6, 1, 2, 500, 1234, 414221, 5125];

    arrayOfIntegers.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log("Отсортированный массив: " + arrayOfIntegers.join(", "));

    var slicedArray1 = arrayOfIntegers.slice(0, 5);
    var slicedArray2 = arrayOfIntegers.slice(-5);

    console.log("Вырезка 5 элементов с начала массива: " + slicedArray1.join(", "));
    console.log("Вырезка 5 элементов с конца массива: " + slicedArray2.join(", "));

    var sum = arrayOfIntegers.reduce(function (previousValue, sum) {
        if (sum % 2 === 0) {
            previousValue += sum;
        }

        return previousValue;
    }, 0);


    console.log(sum);
}

printArrayOfIntegersWork();