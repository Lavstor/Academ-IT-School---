(function () {
    var peopleList = [
        {
            age: 16,
            name: "Никита",
            lastName: "Пушкин"
        },
        {
            age: 33,
            name: "Никита",
            lastName: "Мышкин"
        },
        {
            age: 45,
            name: "Никита",
            lastName: "Покрышкин"
        },
        {
            age: 57,
            name: "Никита",
            lastName: "Абрамович"
        },
        {
            age: 27,
            name: "Никита",
            lastName: "Сухоруков"
        },
        {
            age: 26,
            name: "Никита",
            lastName: "Шульц"
        },
        {
            age: 23,
            name: "Никита",
            lastName: "Адольфович"
        },
        {
            age: 25,
            name: "Никита",
            lastName: "Гитлер"
        },
        {
            age: 30,
            name: "Никита",
            lastName: "Нетфамильев"
        },
        {
            age: 21,
            name: "Никита",
            lastName: "Кошкин"
        }
    ];

    var averageAge = _.meanBy(peopleList, "age");
    console.log(averageAge);

    var sortedPeopleList = _.sortBy(_.filter(peopleList, function (o) {
        return o.age <= 30 && o.age >= 20;
    }), "age");

    console.log(sortedPeopleList);

    var updatedPeopleList = _.each(peopleList, function (currentObj) {
        _.updateWith(currentObj, '[fullName]', _.constant(currentObj.name + ' ' + currentObj.lastName), Object)
    });

    console.log(updatedPeopleList);
})();