const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  // arrange
  const changeHandlerPrime = new ChangeHandler(618);

  const changeHandler25 = new ChangeHandler(25);
  const changeHandler10 = new ChangeHandler();
  const changeHandler5 = new ChangeHandler();
  const changeHandler1 = new ChangeHandler();

  const isPaymentSufficientTooMuch = new ChangeHandler(1);
  const isPaymentSufficientTooLittle = new ChangeHandler(1000);
  const isPaymentSufficientEqualTo = new ChangeHandler(25);

  const giveChange32 = new ChangeHandler(25);
  const giveChange10 = new ChangeHandler(10);
  const giveChange27 = new ChangeHandler(23);
  const giveChange68 = new ChangeHandler(7);
  
  // act
  changeHandler25.insertCoin("quarter");
  changeHandler10.insertCoin("dime");
  changeHandler5.insertCoin("nickel");
  changeHandler1.insertCoin("penny");

  isPaymentSufficientTooMuch.insertCoin("quarter");
  isPaymentSufficientTooLittle.insertCoin("penny");
  isPaymentSufficientEqualTo.insertCoin("quarter")

  giveChange32.insertCoin("quarter");
  giveChange32.insertCoin("quarter");
  giveChange32.insertCoin("nickel");
  giveChange32.insertCoin("penny");
  giveChange32.insertCoin("penny");

  giveChange10.insertCoin("dime");
  giveChange10.insertCoin("dime");

  giveChange27.insertCoin("quarter");
  giveChange27.insertCoin("quarter");

  giveChange68.insertCoin("quarter");
  giveChange68.insertCoin("quarter");
  giveChange68.insertCoin("quarter");

  // assert
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });
  // CONSTRUCTOR TESTS
  test("amountDue to be 618", () => {
    expect(changeHandlerPrime.amountDue).toEqual(618);
  });
  test("cashTendered is zero", () => {
    expect(changeHandlerPrime.cashTendered).toEqual(0);
  });
  // INSERT COIN TESTS
  test("cashTendered for quarter is 25", () => {
    expect(changeHandler25.cashTendered).toEqual(25);
  });
  test("cashTendered for dime is 10", () => {
    expect(changeHandler10.cashTendered).toEqual(10);
  });
  test("cashTendered for nickel is 5", () => {
    expect(changeHandler5.cashTendered).toEqual(5);
  });
  test("cashTendered for penny is 1", () => {
    expect(changeHandler1.cashTendered).toEqual(1);
  });
  // SUFFICIENT TENDER TESTS
  test("cashTendered > isPaymentSufficient is true", () => {
    expect(isPaymentSufficientTooMuch.isPaymentSufficient()).toEqual(true);
  });
  test("cashTendered > isPaymentSufficient is true", () => {
    expect(isPaymentSufficientTooLittle.isPaymentSufficient()).toEqual(false);
  });
  test("cashTendered > isPaymentSufficient is true", () => {
    expect(isPaymentSufficientEqualTo.isPaymentSufficient()).toEqual(true);
  });
  // GIVECHANGE TESTS
  test("32 change to 1q, 0d, 1n, 2p", () => {
    expect(giveChange32.giveChange()).toEqual({quarters: 1,
                                               dimes: 0,
                                               nickels: 1,
                                               pennies: 2});
  });
  test("10 change to 0q, 1d, 0n, 0p", () => {
    expect(giveChange10.giveChange()).toEqual({quarters: 0,
                                               dimes: 1,
                                               nickels: 0,
                                               pennies: 0});
  });
  test("27 change to 1q, 0d, 0n, 2p", () => {
    expect(giveChange27.giveChange()).toEqual({quarters: 1,
                                               dimes: 0,
                                               nickels: 0,
                                               pennies: 2});
  });
  test("68 change to 1q, 0d, 0n, 2p", () => {
    expect(giveChange68.giveChange()).toEqual({quarters: 2,
                                               dimes: 1,
                                               nickels: 1,
                                               pennies: 3});
  });

  // TODO: Add additional tests below...


});