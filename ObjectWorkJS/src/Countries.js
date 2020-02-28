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
                result.push([country]);
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
                    name: "2134", population: 1
                },
                {
                    name: "2fdf", population: 1
                },
                {
                    name: "2fdf", population: 1
                }
            ]
        },
        {
            name: "8423758234",
            cities: [
                {
                    name: "2134423re", population: 240
                },
                {
                    name: "2fdfwegdg", population: 24
                },
                {
                    name: "2fdf324525td3", population: 100
                }
            ]
        },
        {
            name: "8423758dsfdff",
            cities: [
                {
                    name: "2134345426e", population: 299
                },
                {
                    name: "2fdfwegdg", population: 25464
                },
                {
                    name: "2fdf324525td3", population: 24776824
                }
            ]
        },
        {
            name: "832432678567080f",
            cities: [
                {
                    name: "213434erwergdfs5426e", population: 299
                },
                {
                    name: "2fdfwegqwewqrt435dg",
                    population: 25008464
                },
                {
                    name: "2fdf3-0-525td3", population: 247769989824
                }
            ]
        }
    ];

    console.log("Страна(ы) с максимальным кол-вом городов: ", getMaxCityQuantityCountries(countries));
    console.log("Объект (страна/популяция): ", getCountryPopulationObject(countries));
})();
