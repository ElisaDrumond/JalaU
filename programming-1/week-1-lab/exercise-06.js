
function encrypt(text) {

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codes = [];

    for (let i in text) {
        codes.push(alphabet.indexOf(text[i].toUpperCase()) + 1);
    }
    return codes;
}

var encrypted = encrypt("acdA")
var result = encrypted.join("")

console.log(result)