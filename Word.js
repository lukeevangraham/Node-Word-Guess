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
    
    this.currentDisplay = this.wordObject + ''

    this.testGuess = function(guess) {
        for (let i = 0; i < this.wordObject.length; i++) {
            this.wordObject[i].checker(guess)
            
        }
        // Letter.checker(guess)
    }
    
    // console.log("LOOK HERE: ", this);
}

test = new Word("test");

test.testGuess("t")

console.log("BIG TIME: ", test)