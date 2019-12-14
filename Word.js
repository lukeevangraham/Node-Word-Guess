var Letter = require('./Letter.js');

function Word(answer) {
    this.objArray = [];

    for (let i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }

}
    
    Word.prototype.currentDisplay = function() {
        let toDisplay = []
        for (let index = 0; index < answer.length; index++) {
            toDisplay.push(letter.toString)
        }
        return toDisplay.concat()
    }

    this.testGuess = function(guess) {
        Letter.checker(guess)
    }
    console.log("THIS: ", this.objArray[0].toString)
    console.log("LOOK HERE: ", this.currentDisplay());

test = new Word("test");

// module.exports = Word;