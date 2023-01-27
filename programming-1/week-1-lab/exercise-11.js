
let word = "amor"
let newString = ""

for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i]
}

let string = word.toUpperCase();

if (word == newString) {
    console.log("The word", string, "is a palindomo")

} else {
    console.log("The word", string, "is not a palindomo")
}