
let number = 10
let restOfDivision = 0
let counter = 0

const specialCases = number == 0 || number == 1

for (var i = 1; i <= number; i++){
    restOfDivision = number % i

    if (restOfDivision == 0) {
        counter = counter + 1
    }
}

if (!(specialCases) && counter <= 2) {
    console.log(number, "is a prime number!" )

} else if (specialCases || counter >= 3) {
    console.log(number, "is not a prime number!")
}