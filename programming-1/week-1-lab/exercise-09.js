
const entrance = require('prompt-sync')({sigint: true})

let accountValue = 15394
let password = 3245

let passwordTyped = entrance("Inform the password: ")

if (password == passwordTyped) {

    console.log("Correct password!")
    
    let withdrawal = entrance("Enter withdrawal amount: ")

    if (withdrawal <= accountValue) {
        console.log("withdrawal from R$" + withdrawal + " allowed!")
    
    } else {
        console.log("Value not allowed. Insufficient funds!")
    }

} else {
    console.log("Incorrect password!")
}