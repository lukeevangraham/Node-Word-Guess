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
        let preCheckString = word + "";
        word.testGuess(answers.enteredLetter)
        let postCheckString = word + ""

        if (preCheckString === postCheckString) {
            console.log("\nINCORRECT!")
        } else {
            console.log("\n CORRECT!")
        }
        console.log(word + '\n')
        guessCountRemaining --;
        console.log(guessCountRemaining, "Guesses Remaining\n")
        if (guessCountRemaining >= 1) {
            askForLetter()
        }
    })
}

var randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]

let word = new Word(randomWord)

let guessCountRemaining;

function setupNewWord() {
    guessCountRemaining = 10
    console.log(word + '\n')
}

setupNewWord()
askForLetter()





// word.testGuess("t")

// console.log(word + '')

// word.testGuess("e")

// console.log(word + '')
// console.log(possibleWords)
// console.log(randomWord)