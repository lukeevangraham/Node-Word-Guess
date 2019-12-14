function Letter(character) {
    this.character = character;
    this.known = false;
    this.toString = function() {
        if (this.known) {
            return this.character
        } else {
            return "_"
        }
    }
    this.checker = function(guess) {
        if (guess === this.character) {
            this.known = true
        }
    }
}

module.exports = Letter;