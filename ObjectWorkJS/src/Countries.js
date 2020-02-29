(function () {
    function getMaxCityQuantityCountries(countries) {
        var count = 0;
        var result = [];

        countries.forEach(function (country) {
            var currentCitiesCount = country.cities.length;

            if (currentCitiesCount > count) {
                count = currentCitiesCount;
                result = [country];
            } else if (currentCitiesCount === count) {
                result.push(country);
            }
        });

        return result;
    }

    function getCountryPopulationObject(countries) {
        var keyValue = {};

        countries.forEach(function (country) {
            keyValue[country.name] = country.cities.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.population;
            }, 0);
        });

        return keyValue;
    }

    var countries = [
        {
            name: "Имаджинария",
            cities: [
                {
                    name: "Москва", population: 1
                },
                {
                    name: "Иркутск", population: 1
                },
                {
                    name: "Смурклянд", population: 1
                }
            ]
        },
        {
            name: "Помазаников",
            cities: [
                {
                    name: "Помяукин", population: 240
                },
                {
                    name: "Мяукин", population: 24
                },
                {
                    name: "Мякушкин", population: 100
                }
            ]
        },
        {
            name: "Пошкандыбал",
            cities: [
                {
                    name: "Город N", population: 299
                },
                {
                    name: "Новый пошкандыбал", population: 25464
                },
                {
                    name: "Старый пошкандыбал", population: 24776824
                }
            ]
        },
        {
            name: "Тюмень",
            cities: [
                {
                    name: "Город 1", population: 299
                },
                {
                    name: "Город два",
                    population: 25008464
                },
                {
                    name: "Третий город", population: 247769989824
                }
            ]
        }
    ];

    console.log("Страна(ы) с максимальным кол-вом городов: ", getMaxCityQuantityCountries(countries));
    console.log("Объект (страна/популяция): ", getCountryPopulationObject(countries));
})();
