let inquirer = require("inquirer");
let Word = require("./Word")
let possibleWords = require("./PossibleWords")

let randomWord
let word
let guessCountRemaining;

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
        console.log("ANSWER: ", randomWord)
        console.log("CURRENT USER WORD: ", postCheckString.replace(/\s+/g, ''))
        if (postCheckString.replace(/\s+/g, '') === randomWord) {
            console.log("time for a new word!")
        }
        if (guessCountRemaining >= 1) {
            askForLetter()
        }
    })
}



function setupNewWord() {
    randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
    word = new Word(randomWord)
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