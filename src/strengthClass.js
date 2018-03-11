class passStrength {

    /**
     * constructor
     */

    constructor() {
        this.score = 0;
    }

    _init(password) {
        this._findUnique(password);
        this._bonusMix(password);

        return this._implementScore()
    }


    _findUnique(password) {
        let letters = new Object();
        for (let i = 0; i < password.length; i++) {
            letters[password[i]] = (letters[password[i]] || 0) + 1;
            this.score += 5.0 / letters[password[i]];
        }
    }

    _bonusMix(password) {
        let variations = {
            digits: /\d/.test(password),
            lower: /[a-z]/.test(password),
            upper: /[A-Z]/.test(password),
            nonWords: /\W/.test(password),
        };
        let variationCount = 0;
        for (let check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        this.score += (variationCount - 1) * 10;
    }

    _implementScore() {
        if (this.score > 80) {
            console.log("strong");
            return this.score;
        }
        if (this.score > 60) {
            console.log("good");
            return this.score;
        }
        if (this.score >= 30) {
            console.log("weak");
            return this.score;
        }

        return this.score;

    }

    check(password) {
        this.score = 0;
        return this._init(password);
    }

}

module.exports = passStrength;