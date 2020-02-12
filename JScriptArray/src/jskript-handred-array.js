let list = [];

let hundredArray = function (list) {
    while (list.length !== 100) {
        list.push(list.length + 1);
    }
};

function f(e) {
    return e % 2 === 0;
}

let filter = function (list, f) {
    let result = [];

    for (let i = 0; i < list.length; ++i) {
        let el = list[i];

        if (f(el)) {
            result.push(el * el);
        }
    }

    return result;
};

hundredArray(list);

let sortedList = filter(list, f);

console.log(sortedList);