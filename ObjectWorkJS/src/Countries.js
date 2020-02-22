(function () {
    var countriesArray = [{
        name: "Имаджинария",
        cities: [{name: "2134", population: 1}, {name: "2fdf", population: 1}, {name: "2fdf", population: 1},
            {name: "2fdf68585568", population: 1}]
    }, {
        name: "8423758234",
        cities: [{name: "2134423re", population: 240}, {name: "2fdfwegdg", population: 24},
            {name: "2fdf324525td3", population: 2424}]
    }, {
        name: "8423758dsfdff",
        cities: [{name: "2134345426e", population: 299}, {name: "2fdfwegdg", population: 25464},
            {name: "2fdf324525td3", population: 24776824}]
    }, {
        name: "832432678567080f",
        cities: [{name: "213434erwergdfs5426e", population: 299}, {name: "2fdfwegqwewqrt435dg", population: 25008464},
            {name: "2fdf3-0-525td3", population: 247769989824}]
    }];

    function getMaxCityPopulationCountry(countries) {
        var count = 0;
        var result = [];

        countries.forEach(function (country) {
            var currentCitiesCount = country.cities.length;

            if (currentCitiesCount > count) {
                count = currentCitiesCount;
                result = [country.name];
            } else if (currentCitiesCount === count) {
                result.push([country.name]);
            }
        });

        return result;
    }

    function getCityPopulationArray(countries) {
        var keyValue = {};

        countries.forEach(function (country) {
            keyValue[country.name] = country.cities.reduce(function (previousValue, sum) {
                previousValue += sum.population;

                return previousValue;
            }, 0);
        });

        return keyValue;
    }

    console.log("Страна(ы) с максимальным кол-вом городов: ", getMaxCityPopulationCountry(countriesArray).join(", "));
    console.log("Объект (страна/популяция): ", getCityPopulationArray(countriesArray));
})();
