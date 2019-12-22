let inquirer = require("inquirer");
let Word = require("./Word")
let possibleWords = require("./PossibleWords")

function askForLetter() {
    inquirer.prompt([
        {
            name: "enteredLetter",
    message: "Guess a letter"
        }
    ]).then(function(answers) {
        word.testGuess(answers.enteredLetter)
        console.log(word + '\n')
        askForLetter()
    })
}

var randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]

let word = new Word(randomWord)

console.log(word + '\n')


askForLetter()





// word.testGuess("t")

// console.log(word + '')

// word.testGuess("e")

// console.log(word + '')
// console.log(possibleWords)
// console.log(randomWord)