var Letter = require('./Letter.js');

function Word(answer) {
    this.objArray = [];

    for (let i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }
    
    this.currentDisplay = function() {
        currentDisplay = "";
        for (let i = 0; i < this.objArray.length; i++) {
            currentDisplay += this.objArry[i] + " ";
        }
        console.log(answerLog + "\n");
    }

    this.testGuess = function(guess) {
        Letter.checker(guess)
    }
    
    console.table(this);
}

test = new Word("test");