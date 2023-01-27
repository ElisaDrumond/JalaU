
let workedHours = 168
let valuePerHour = 7

let grossSalary = workedHours * valuePerHour

let netSalary
console.log(grossSalary)

function calculatesNet(rate) {
    netSalary = grossSalary - (grossSalary * rate/100)
    return netSalary
}

function printMessage() {
    console.log("Gross Salary: R$" + grossSalary + " | Net Salary: R$" + netSalary)    
}

if (grossSalary <= 1302) {
    netSalary = calculatesNet(7.5)
    printMessage()

} else if (grossSalary >= 1302.01 && grossSalary <= 2571.29) {
    netSalary = calculatesNet(9)
    printMessage()

} else if (grossSalary >= 2571.30 && grossSalary <= 3856.94) {
    netSalary = calculatesNet(12)
    printMessage()

} else if (grossSalary >= 3856.95 && grossSalary <= 7507.49) {
    netSalary = calculatesNet(14)
    printMessage()
}