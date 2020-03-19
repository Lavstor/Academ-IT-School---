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

    console.log(_.meanBy(peopleList, "age"));

   console.log(_.sortBy(peopleList, "age").filter(function (o) {
       return o.age >= 20 && o.age <= 30;
   })) ;

    console.log(_.forEach(peopleList, function (currentObj) {
        currentObj.fullName = currentObj.name + " " + currentObj.lastName;
    }));
})();