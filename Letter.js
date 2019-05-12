function Letters(character, isKnown, revealer, checker) {
    this.character = character;
    this.isKnown = isKnown;
    this.toString = function() {
        if (isKnown === true) {
            return this.character;
        } else {
            return "_"
        }
    },
    this.checker = function checker(characterGuess) {
        if (characterGuess === this.character) {
            isKnown = true;
        }
    }
    console.log(this);
}

module.exports = Letters;