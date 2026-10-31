let contenedorHTML = document.getElementById("ejercicios-arrays")

// Ejercicio 1

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < array.length; i++) {
//     contenedorHTML.innerHTML += `<p>${array[i]}</p>`
// }



// Ejercicio 2

// let array = []

// for (let i = 1; i <= 3; i++) {
//     let userValue = prompt("Introduce un texto:")
//     array.push(userValue)
// }

// contenedorHTML.innerHTML += `
//                             <p>${array[1]}</p>
//                             <p>${array[2]}</p>
//                             <p>${array[0]}</p>
//                             `


// Ejercicio 3

// let array = []

// for (let i = 20; i >= 11; i--) {
//     array.push(i)
// }

// for (let i = 0; i < array.length; i++) {
//     contenedorHTML.innerHTML += `<p>${array[i]}</p>`
// }



// Ejercicio 4

// let array = []

// for (let i = 1; i <= 10; i++) {
//     array.push(prompt(`Introduce 10 valores (${i}/10):`))  
// }

// for (let i = 0; i < array.length; i++) {
//     contenedorHTML.innerHTML += `<p>${array[i]}</p>`
// }



// Ejercicio 5 

// let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

// let userOption = parseInt(prompt("Introduce un número del 1 (Enero) al 12 (Diciembre)"))
// if (userOption > 12 || userOption < 1) {
//     alert("Número no válido")

// } else {
//     for (let i = 0; i < months.length; i++) {
//         if (userOption - 1 == i) {
//             console.log(months[i].substring(0, 1))
//             let capitalLetter = months[i].substring(0, 1).toUpperCase()
//             contenedorHTML.innerHTML = `<p>${capitalLetter}${months[i].substring(1, months[i].length)}</p>`
//         }
//     }
// }



// Ejercicio 6

// let valuesList = []
// let value

// for (let i = 1; i <= 3; i++) {
//     value = parseInt(prompt("Introduce un número:"))
//             console.log(value)

//     if (value) {
//         valuesList.push(value)
//         console.log(valuesList)

//     } else {
//         alert("Tienen que ser números")
//         i = i - 1
//     }
// }

// if (valuesList[0] < valuesList[1] && valuesList[0] < valuesList[2]) {
//       alert(`${valuesList[0]} es el más pequeño`)  

// } else if (valuesList[1] < valuesList[0] && valuesList[1] < valuesList[2]){
//     alert(`${valuesList[1]} es el más pequeño`)

// } else {
//     alert(`${valuesList[2]} es el más pequeño`)
// }



// Ejercicio 7

// let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let suma = 0

// for (i = 0; i < numbersList.length; i++) {
//     suma += numbersList[i]
// }
// let media = suma / numbersList.length
// console.log(media)



// Ejercicio 8

// let studentsAges = []
// let suma = 0

// for (let i = 0; i < 20; i++) {
//     studentsAges.push(parseInt(Math.random() * (35 - 18) + 18))
// }

// for (let i = 0; i < studentsAges.length; i++) {
//     suma += studentsAges[i]
// }

// let media = suma / studentsAges.length
// console.log(media)



// Ejercicio 9

// let array = []
// let userValue = 0

// for (i = 0; i < 10; i++) {
//     array.push(1)
// }

// while (userValue < 10) {
//     userValue = parseInt(prompt(`
//         ${array}
//         Introduce un valor entre 0 y 9.
//         `))

//     array[userValue] = array[userValue] * 2       
// }



// Ejercicio 10

// let array = []
// let userValue = 0

// for (let i = 0; i < 11; i++) {
//     array.push(0)
// }

// while (userValue >= 0) {
//     userValue = parseInt(prompt(`
//         ${array}
//         Introduce un valor entre 0 y 10.
//         `))

//     if (userValue > 10) {
//         alert("Número incorrecto")

//     } else if (userValue < 0) {
//         for (let i = 0; i < array.length; i++) {
//             contenedorHTML.innerHTML += `<p>Posición ${i} del array -> ${array[i]}</p>`
//         }

//     } else {
//         array[userValue] += 1
//     }
// }



// Ejercicio 11

// let array = []
// let arrayPares = []
// let arrayImpares = []
// let suma = 0
// let mult = 1

// for (let i = 0; i < 20; i++) {
//     array.push(parseInt(Math.random() * 100))
// }


// for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 0) {
//         arrayPares.push(array[i])

//     } else {
//         arrayImpares.push(array[i])
//     }  
// }

// for (let i = 0; i < 10; i++) {
//     suma += arrayPares[i]
//     mult *= arrayImpares[i]
// }


// alert(`
//     El array completo es ${array}

//     La suma de los números de la posición par (${arrayPares}) es ${suma}

//     La multiplicación de los números de la posición impar (${arrayImpares}) es ${mult}
//     `)



// Ejercicio 12

// let array = ["vaca", "perro", "elefante", "mariquita", "rinoceronte"]

// console.log(array.sort())



// Ejercicio 13

// let starWarsCharacters = ["Luke Skywalker", "Yoda", "Han Solo"]

// // a
// console.log(starWarsCharacters);

// // b
// starWarsCharacters.sort()
// console.log(starWarsCharacters);


// // c  //REVISAR CODIGO PORQUE NO SE COMO HACER QUE BUCLEE TODO EL PROCESO Y VAYA AÑADIENDO PERSONAJES A LA LISTA
// let userCharacter = prompt("Introduce un personaje de Star Wars. Introduce salir para salir:")
// let foundCharacter = false
// let exit = false

// // while (!exit) {
// //     userCharacter = 
// //     if (userCharacter == "salir") {
// //         exit = true
// //     } else {

// //     }
// // }


// for (let i = 0; i < starWarsCharacters.length; i++) {
//     if (userCharacter == starWarsCharacters[i].toLowerCase()) {
//         foundCharacter = true
//         i = starWarsCharacters.length
//         console.log(`${userCharacter} está en la posición ${i} del array`);
//     }
// }

// if (!foundCharacter) {
//     starWarsCharacters.push(userCharacter.charAt(0).toUpperCase() + userCharacter.slice(1)) // userCharacter.charAt(0).toUpperCase() + userCharacter.slice(1) -> pone en mayúsculas la inicial
//     alert(`
//         Personaje añadido.
//         Personajes: ${starWarsCharacters.join(", ")}
//         Personajes totales: ${starWarsCharacters.length}
//         `)
// }

// console.log(starWarsCharacters);



// Ejercicio 14

// let values = [] // Array de 20 números random
// let howMany = [] // [0, 0, 0, 0, 0, 0, 0, 0, 0]
// let numbersToText = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
// let counter = 1

// for (let i = 0; i < 20; i++) {
//     values.push(parseInt(Math.random() * (10 - 1) + 1))
// }

// for (let i = 0; i < 9; i++) {
//     howMany.push(0)
// }

// for (let j = 0; j < howMany.length; j++) { // 9 veces
//     for (let i = 0; i < values.length; i++) { // 20 veces
//         if (values[i] == counter) {
//             howMany[j] += 1 // ese 0 tendra que ser j
//         }
//     }
//     counter++
// }

// contenedorHTML.innerHTML = `<p>Array completo: ${values.join(", ")}</p>`

// for (let i = 0; i < howMany.length; i++) {
//     contenedorHTML.innerHTML += `<p>Hay ${howMany[i]} ${numbersToText[i]}/s (${i + 1})</p>`
// }



// Ejercicio 15

// let userNumber = 0
// let decimalNumbers = [] // Números decimales
// let wholeNumbers = [] // Números enteros

// let sum = 0
// let media

// while (parseFloat(userNumber) >= 0) {
//     userNumber = prompt("Introduce un número decimal o entero:")

//     if (userNumber.includes(".") || userNumber.includes(",")) {
//         decimalNumbers.push(parseFloat(userNumber.replace(",", ".")))

//     } else {
//         if (!userNumber.includes("-")) {
//             wholeNumbers.push(parseInt(userNumber))
//         }
//     }
// }

// alert(`Has creado ${decimalNumbers.length} números decimales y ${wholeNumbers.length} números enteros`)


// //Este for calcula la suma de los numeros enteros 
// for (let i = 0; i < wholeNumbers.length; i++) {
//     sum += wholeNumbers[i]    
// }

// alert(`La suma de los números enteros introducidos es ${sum}`)



// let allNumbers = decimalNumbers.concat(wholeNumbers)

// //Este for calcula la suma de todos los numeros introducidos que luego se usará para calcular la media
// for (let i = 0; i < allNumbers.length; i++) {
//     sum += allNumbers[i]   
// }

// media = sum / allNumbers.length
// alert(`La media de TODOS los números introducidos es ${media}`)



// Ejercicio 16

let students = []
let studentsGrades = []
let namesWithMaxGrade = []
let namesWithMinGrade = []

let student
let grade
let salir = false

let gradesSum = 0
let media

let maxGrade = 0
let minGrade = 10


while (!salir) {
    student = prompt("Introduce el nombre del alumno. Escribe salir para salir.:")
    salir = student == "salir"
    
    if (!salir) {
        grade = parseFloat(prompt(`Introduce la nota de ${student}:`))
        if (grade >= 0 && grade <= 10) {
            students.push(student)
            studentsGrades.push(grade)

        } else {
            alert("Nota incorrecta")
            
        }
    }
}


for (let i = 0; i < studentsGrades.length; i++) {
    gradesSum += studentsGrades[i]
}

media = gradesSum / studentsGrades.length // Calculamos la media
contenedorHTML.innerHTML = `<p>La media de la clase es ${media}</p>` // Mostramos la media

for (let i = 0; i < studentsGrades.length; i++) {
    contenedorHTML.innerHTML += `<p>${students[i]}: ${studentsGrades[i]}</p>`

    if (studentsGrades[i] > media || media == 10) {
        for (let j = 0; j < students.length; j++) {
            contenedorHTML.innerHTML += `<p>${students[i]} supera la media de la clase</p>`
            j = students.length
        }
    }

}


for (let i = 0; i < studentsGrades.length; i++) {
    if (studentsGrades[i] > maxGrade) maxGrade = studentsGrades[i]
    if (studentsGrades[i] < minGrade) minGrade = studentsGrades[i]
}

for (let i = 0; i < studentsGrades.length; i++) {
    if (studentsGrades[i] == maxGrade) namesWithMaxGrade.push(students[i])
    if (studentsGrades[i] == minGrade) namesWithMinGrade.push(students[i])
}

contenedorHTML.innerHTML += `<p>Nota máxima: ${maxGrade}</p>`
contenedorHTML.innerHTML += `<p>Alumnos con la nota máxima: ${namesWithMaxGrade}</p>`
contenedorHTML.innerHTML += `<p>Nota mínima: ${minGrade}</p>`
contenedorHTML.innerHTML += `<p>Alumnos con la nota mínima: ${namesWithMinGrade}</p>`
