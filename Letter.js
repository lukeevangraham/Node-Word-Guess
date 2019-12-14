function Letters(character) {
    this.character = character;
    this.isKnown = false;
    this.checker = function checker(characterGuess) {
        if (characterGuess === this.character) {
            this.isKnown = true;
        }
    }
}

Letters.prototype.toString = function() {
    if (this.isKnown === true) {
        return this.character;
    } else {
        return "_"
    }
},

module.exports = Letters;