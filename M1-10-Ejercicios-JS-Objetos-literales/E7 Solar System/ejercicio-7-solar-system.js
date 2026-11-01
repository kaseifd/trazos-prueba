import solarSystem from "./planets.js"

let contenedorHTML = document.getElementById("selected-planets")

for (let i = 1; i <= 3; i++) {
    let selectedPlanet = prompt(`Elige un planeta (${i}/3)`).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Todo lo que no entiendo es que le quita los acentos

    if (!solarSystem[selectedPlanet]) {
        contenedorHTML.innerHTML += `<p>${selectedPlanet} no existe en el Sistema Solar</p>`

    } else {
        if (!solarSystem[selectedPlanet].selected) {
            if (solarSystem[selectedPlanet]) {
                contenedorHTML.innerHTML += `
            <div class="planet-card" id="card-${solarSystem[selectedPlanet].name.toLowerCase()}" style="background-color:${solarSystem[selectedPlanet].colorCode}">
            <img src="${solarSystem[selectedPlanet].image}" alt="">
            <div class="planet-card-content">
            <h2>${solarSystem[selectedPlanet].name}</h2>
            <p>Temperatura: ${solarSystem[selectedPlanet].temperature} °C</p>
            <p>Color: ${solarSystem[selectedPlanet].color}</p>
            </div>
            </div>
            `
                solarSystem[selectedPlanet].selected = true
            }
        } else {
            alert(`Ya has seleccionado ${selectedPlanet}. Escoge otro`)
            i = i - 1
        }
    }
}