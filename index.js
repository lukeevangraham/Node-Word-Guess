let inquirer = require("inquirer");
let Word = require("./Word")
let possibleWords = require("./PossibleWords")

console.log("Hello friend!")

// hi = new Word("hi")

var randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]



let word = new Word(randomWord)

console.log(word + '')

word.testGuess("t")

console.log(word + '')

word.testGuess("e")

console.log(word + '')
console.log(possibleWords)
console.log(randomWord)