let contenedorHTML = document.getElementById("ejercicio-personas")
let userChoice = prompt("Introduce el nombre de la persona que quieras buscar:").toLowerCase()


for (let i = 0; i < people.length; i++) {
    if (userChoice == people[i].name.toLowerCase()) {
        contenedorHTML.innerHTML = `
        <div class="person-card" id="card-${(people[i].name).toLowerCase()}" style="background-color:${people[i].eyesColor}">
            <img src="${people[i].photo}" alt="">
            <div class="person-card-content">
                <h2>${people[i].name}</h2>
                <p>Edad: ${people[i].age}</p>
                <p>Email: ${people[i].email}</p>
                <p>Dirección: ${people[i].address}</p>
            </div>
        </div>
       `
    } else {
        contenedorHTML.innerHTML = `<p>Esa persona no existe</p>`
        i = people.length
    }
}