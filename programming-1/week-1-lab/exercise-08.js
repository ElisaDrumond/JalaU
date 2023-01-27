
let largest = 0

for (i = 1; i <= 4; i++) {

    let number = Math.floor(Math.random() * 65536)

    if (number > largest) {
        largest = number
    }
}

console.log(largest, "is the largest number generated")