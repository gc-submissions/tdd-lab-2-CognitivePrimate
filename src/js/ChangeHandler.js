/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      switch(type) {
        case "quarter":
          this.cashTendered += 25;
          break;
        case "dime":
          this.cashTendered += 10;
          break;
        case "nickel":
          this.cashTendered += 5
          break;
        case "penny": 
          this.cashTendered += 1;
          break;
        default:
          console.log("Khajit haz wares if you haz coin.");
      };
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      return this.cashTendered >= this.amountDue ? true : false;
    }

    giveChange() {
        // TODO return the correct change in the following format...
        let change = this.cashTendered - this.amountDue;

        let coins = {
          quarters: 0,
          dimes: 0,
          nickels: 0,
          pennies: 0
        };

        while (change > 0){
          switch(true){
            case (change >= 25):
              coins.quarters++;
              change -= 25;
              break;
            case (change >= 10):
              coins.dimes++;
              change -= 10;
              break;
            case (change >= 5):
              coins.nickels++;
              change -= 5;
              break;
            case (change >= 1):
              coins.pennies++;
              change -= 1;
              break;
            default: 
              (console.log("Human, what have you done?"));
              break;
          };
        };
        return coins;
    }
}

module.exports = ChangeHandler;