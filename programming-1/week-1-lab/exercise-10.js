
const entrance = require('prompt-sync')({sigint: true})

let kmDriven = entrance("How many km to reach the destination? ")
let consumoMedio = entrance("What is the average consumption of the vehicle? ")
let valueOfFuel = entrance("Qual o valor do combustível? ")

let travelcost = (kmDriven / consumoMedio) * valueOfFuel
console.log("The cost of the trip was R$" + travelcost.toFixed(2))