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

let countries = [
    createCountry("Имаджинария", [createCity("Маленький городишка", 2),
        createCity("Большой городишка", 200), createCity("Город", 100)]),

    createCountry("Санктуарий", [createCity("Ромазановск", 900000000)]),

    createCountry("Новосибирская", [createCity("Помазаников", 900),
        createCity("Кошатник", 1)]),

    createCountry("Московская", [createCity("Пошкандыбал", 324534643753243254236243),
        createCity("Сведловск", 200), createCity("Многолюдовск", 223123124),]),

    createCountry("Смурфлэнд", [createCity("Смурфятник", 2000000000000000),
        createCity("Сумрфетник", 123124214), createCity("Смурффффяяяятинаа", 2000000000000000000000000000000)]),

    createCountry("Муркланд", [createCity("Мяу", 900),
        createCity("МфуМяу", 1000), createCity("Мяяяяу", 2000)])];

function getMaxCityCountry(country) {
    let count = 0;
    let answer = [];

    for (let i = 0; i < country.length; i++) {
        let currentCityCount = country[i].getCities().length;

        if (currentCityCount > count) {
            count = currentCityCount;
            answer = [country[i]];
        } else if (currentCityCount === count) {
            answer.push([country[i]]);
        }
    }
    return answer;
}

console.log(getMaxCityCountry(countries));

function getArray(countries) {
    let answer = [];

    for (let i = 0; i < countries.length; i++) {
        let a = {};
        let name = countries[i].getName();

        let population = 0;
        countries[i].getCities().forEach(e => population += e.getPopulation());
        a[name] = population;

        answer.push(a)
    }

    return answer;
}

console.log(getArray(countries));