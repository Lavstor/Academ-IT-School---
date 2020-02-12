let array = [500, 800, 900, 100, 1000, 10000, 6, 1, 2, 500];

array.sort(function (e1, e2) {
    return e2 - e1;
});

console.log(array);

let listSlice2 = array.slice(0, 5);
let listSlice1 = array.slice(5);

console.log(listSlice1);
console.log(listSlice2);

function f(e) {
    return e % 2 === 0;
}

let filter = function (list, f) {
    let sum = 0;

    for (let i = 0; i < list.length; ++i) {
        let el = list[i];

        if (f(el)) {
            sum += el;
        }
    }

    return sum;
};

const result = filter(array, f);

console.log(result);