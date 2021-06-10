const formatCurrency = require("../src/js/formatCurrency");

describe("formatCurrency", () => {
  it("formats 0", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  it("formats 1", () => {
    expect(formatCurrency(1)).toBe("$0.01");
  });
  it("formats 100", () => {
    expect(formatCurrency(100)).toBe("$1.00");
  });
  it("formats 150", () => {
    expect(formatCurrency(150)).toBe("$1.50");
  });
  it("formats 3333", () => {
    expect(formatCurrency(3333)).toBe("$33.33");
  });
  it("formats -100", () => {
    expect(formatCurrency(-100)).toBe("-$1.00");
  });
});