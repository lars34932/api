//pokemon api
const pokemonImage = document.getElementById("js--pokemon-image")
let randomNumber = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
        pokemonName = realData.species.name;
        pokemonNameCap = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed === false) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = pokemonNameCap + " has fled!"
        }
        else {
            pokemonText.innerText = pokemonNameCap + " Caught!"
        }
        pokemonGamePlayed = true;
    }
}

//tvmaze api
const mazetvTitle = document.getElementById("js--mazetv-title");
const mazetvText = document.getElementById("js--mazetv-text");

let tvmaze = fetch("https://api.tvmaze.com/search/shows?q=breaking bad")
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        mazetvTitle.innerText = realData[0].show.name;
        mazetvText.innerHTML = realData[0].show.summary;
    });

//age api
const nameText = document.getElementById("js--name")
const inputField = document.getElementById("js--input");
inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function (response) {
                return response.json();
            })
            .then(function (realData) {
                inputField.style.display = "none";
                nameText.innerText = realData.age;
            });
    }
}

const labels = [
    'Playstation 2',
    'Gamecube',
    'Nintendo DS',
    'Nintendo Switch',
    'Playstation 4 Pro',
];

const data = {
    labels: labels,
    datasets: [{
        label: "Most played consoles in hours",
        data: [10000, 5000, 6000, 1000, 2000],
        backgroundColor: ['#2B5999', '#C0DBEE', '#80BBDD', '#58A5D6', '#23254B']
    }]
}

const config = {
    type: 'doughnut',
    data: data,
    maintainAspectRatio: false,
};

new Chart(
    document.getElementById("js--chart--1"),
    config
);



function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
    for (i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1;
                        break;
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
                    case 'flying':
                        flying = flying + 1;
                        break;
                    case 'poison':
                        poison = poison + 1;
                        break;
                    case 'ground':
                        ground = ground + 1;
                        break;
                    case 'rock':
                        rock = rock + 1;
                        break;
                    case 'bug':
                        bug = bug + 1;
                        break;
                    case 'ghost':
                        ghost = ghost + 1;
                        break;
                    case 'steel':
                        steel = steel + 1;
                        break;
                    case 'fire':
                        fire = fire + 1;
                        break;
                    case 'water':
                        water = water + 1;
                        break;
                    case 'grass':
                        grass = grass + 1;
                        break;
                    case 'electric':
                        electric = electric + 1;
                        break;
                    case 'psychic':
                        psychic = psychic + 1;
                        break;
                    case 'ice':
                        ice = ice + 1;
                        break;
                    case 'dragon':
                        dragon = dragon + 1;
                        break;
                    case 'dark':
                        dark = dark + 1;
                        break;
                    case 'fairy':
                        fairy = fairy + 1;
                        break;
                    case 'unknown':
                        unknown = unknown + 1;
                        break;
                    case 'shadow':
                        shadow = shadow + 1;
                        break;

                }
            }).then(function () {
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow];
                graph.update();
            });
    }
    const dataPokemon = {
        labels: labels,
        datasets: [{
            label: "Pokemon types",
            data: [],
            backgroundColor: ['#2B5999', '#C0DBEE', '#80BBDD', '#58A5D6', '#23254B']
        }]
    }
    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    };

    const graph = new Chart(
        document.getElementById("js--chart--2"),
        configPokemon
    );
}

getPokemon();

const labelsPhone = [
    'Apple',
    'Samsung',
    'Xiaomi',
    'OPPO',
    'Vivo',
    'Others',
];

const dataPhone = {
    labels: labelsPhone,
    datasets: [{
        label: "Most used phones",
        data: [23, 19, 11, 10, 8, 29],
        backgroundColor: ['#FFFFFF', '#23254B', '#FFA500', '#00ff00', '#ADD8E6', '#808080']
    }]
};

const configPhone = {
    type: 'doughnut',
    data: dataPhone,
    maintainAspectRatio: false,
};

new Chart(
    document.getElementById("js--chart--3"),
    configPhone
);

fetch("https://api.weatherapi.com/v1/forecast.json?key=0779b378ed5a455db0b124708231004&q=Amsterdam&days=7")
    .then(response => response.json())
    .then(data => {
        const temp = data.current.temp_c;
        const feelsLike = data.current.feelslike_c;
        const labelTemp = [
            'Temperatuur',
            'Gevoelens temperatuur',
        ];

        const dataTemp = {
            labels: labelTemp,
            datasets: [{
                label: "Temperatuur en gevoels temperatuur",
                data: [temp, feelsLike]
            }]
        };

        const configTemp = {
            type: 'bar',
            data: dataTemp
        };
        console.log(configTemp);
        new Chart(document.getElementById("js--chart--4"), configTemp);
    });