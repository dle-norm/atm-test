module.exports = {
    /*
     * Give the cash asked in 2€, 5€, 10€ coins
     * @param number ask        the amount asked
     * @return object {
     *   two: 3,      3 coins of 2€
     *   five: 0,     0 banknotes of 5€
     *   ten : 0      0 banknotes of 10€
     *  }
     */
    atm: function (ask) {
        let ten = 0;
        let five = 0;
        let two = 0;

        if (typeof ask !== 'number' || ask < 0 || ask > 9007199254740991) {
            return null;
        }
        ten = ask / 10;
        ask = ask % 10;
        // if the number is not even we give 5€ change
        if (ask % 2 !== 0) {
            five = ask / 5;
            ask = ask % 5;
        }
        two = ask / 2;
        ask = ask % 2;
        if (ask !== 0) {
            return null;
        } else {
            return {
                'two': Math.floor(two),
                'five': Math.floor(five),
                'ten': Math.floor(ten)
            };
        }
    }
}
