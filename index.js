let inquirer = require("inquirer");
let Word = require("./Word")

console.log("Hello friend!")

// hi = new Word("hi")

let word = new Word("test")

console.log(word + '')

word.testGuess("t")

console.log(word + '')