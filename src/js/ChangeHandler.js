/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = null;
        this.cashTendered = null;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      // TODO
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      // TODO
    }

    giveChange() {
        // TODO return the correct change in the following format...
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}

module.exports = ChangeHandler;