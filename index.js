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
            guessCountRemaining --;
        } else {
            console.log("\n CORRECT!")
        }
        console.log(word + '\n')
        console.log(guessCountRemaining, "Guesses Remaining\n")
        if (postCheckString.replace(/\s+/g, '') === randomWord) {
            console.log("You got it right!  Next word!")
            setupNewWord()
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