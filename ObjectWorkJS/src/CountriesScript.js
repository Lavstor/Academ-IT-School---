function activateCountryScript() {
    function createCountry(name, cities) {
        return {
            name: name,
            cities: cities,
            getName: function () {
                return this.name;
            },
            getCities: function () {
                return cities;
            }
        };
    }

    function createCity(name, population) {
        return {
            name: name,
            population: population,
            getName: function () {
                return this.name;
            },
            getPopulation: function () {
                return this.population;
            }
        }
    }

    var countriesArray = [
        createCountry("Имаджинария", [createCity("Маленький городишка", 2),
            createCity("Большой городишка", 200), createCity("Город", 100),
            createCity("Город2", 100), createCity("Город3", 100)]),
        createCountry("Санктуарий", [createCity("Ромазановск", 900000000)]),
        createCountry("Новосибирская", [createCity("Помазаников", 900),
            createCity("Кошатник", 1)]),
        createCountry("Московская", [createCity("Пошкандыбал", 324534643753243254236243),
            createCity("Сведловск", 200), createCity("Многолюдовск", 223123124)]),
        createCountry("Смурфлэнд", [createCity("Смурфятник", 2000000000000000),
            createCity("Сумрфетник", 123124214), createCity("Смурффффяяяятинаа", 2)]),
        createCountry("Муркланд", [createCity("Мяу", 900),
            createCity("МфуМяу", 1000), createCity("Мяяяяу", 2000)])];

    function printMaxCityCountry(countries) {
        var count = 0;
        var answer = [];

        countries.forEach(function (country) {
            var currentCityCount = country.getCities().length;

            if (currentCityCount > count) {
                count = currentCityCount;
                answer = [country.getName()];
            } else if (currentCityCount === count) {
                answer.push([country.getName()]);
            }
        });

        console.log("Страна(ы) с максимальным кол-вом городов: ", answer.join(", "));
    }

    function getCityPopulationArray(countries) {
        var answer = [];

        countries.forEach(function (country) {
            var keyValue = {};

            keyValue[country.getName()] = country.getCities().reduce(function (previousValue, sum) {
                previousValue += sum.getPopulation();

                return previousValue;
            }, 0);

            answer.push(keyValue)
        });

        console.log(answer);
    }

    printMaxCityCountry(countriesArray);
    getCityPopulationArray(countriesArray);
}

activateCountryScript();