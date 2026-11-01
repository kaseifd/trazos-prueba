let contenedorHTML = document.getElementById("ejercicios-objetos")

// Ejercicio 1

// let car = {
//     color: "red",
//     brand: "Ford",
//     model: "Focus",
//     engine: {
//         cylinders: 4,
//         capacity: 2.2,
//     }
// }

// console.log(car);



// Ejercicio 2

// let person = {
//     name: "Marta",
//     age: 25,
// }

// console.log(person);

// person.height = 1.65

// console.log(person);



// Ejercicio 3

// let num = {
//     value: 0,
//     color: "",
// }

// num.value = parseFloat(prompt("Introduce un número:"))

// if (num.value > 200) num.color = "red"
// if (num.value <= 200) num.color = "yellow"
// if (num.value < 100) num.color = "green"

// contenedorHTML.innerHTML = `<p style="color: ${num.color}">${num.value}</p>`



// Ejercicio 4

// let randomObject = {
//     computer1: {
//         board: "broken",
//     }, 
// }

// console.log(randomObject.computer1.board);

// randomObject.computer1.name = prompt("Introduce el nombre de tu ordenador:")

// console.log(randomObject.computer1);



// Ejercicio 5

// let superheroe = {
//     nameLetter: "",
//     surname: "",
//     surnameLetter: "",
//     birthday: "00-00-0000",
//     birthdayLastNumber: "",
//     gender: ""
// }

// superheroe.nameLetter = prompt("Introduce tu nombre:").substring(0, 1).toUpperCase()

// superheroe.surname = prompt("Introduce tu apellido:")
// superheroe.surnameLetter = superheroe.surname.substring(superheroe.surname.length - 1, superheroe.surname.length).toLowerCase()

// superheroe.birthday = prompt("Introduce tu fecha de nacimiento (dd-mm-aaaa):")
// superheroe.birthdayLastNumber = superheroe.birthday.substring(superheroe.birthday.length - 1, superheroe.birthday.length).toLowerCase()

// superheroe.gender = prompt("Introduce el género de tu nombre de superhéroe. Masculino (M) / Femenino (F):").toLowerCase()

// let superheroeName = superheroe.nameLetter + superheroe.surnameLetter + superheroe.birthdayLastNumber

// contenedorHTML.innerHTML = `<p>Tu nombre de superhéroe es ${superheroeName}</p>`