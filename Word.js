var Letter = require("./Letter")

// let h = new Letter("h")

// console.log(h + '')

// h.checker("h")

// console.log(h + '')

function Word(answer) {
    this.wordObject = [];

    for (let i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.wordObject.push(letter);
    }
    
    this.toString = function() {
        return this.wordObject.join(" ")
    }

    this.testGuess = function(guess) {
        for (let i = 0; i < this.wordObject.length; i++) {
            this.wordObject[i].checker(guess)
        }
    }
}

module.exports = Word;