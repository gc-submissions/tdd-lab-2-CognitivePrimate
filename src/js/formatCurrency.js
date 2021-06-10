function formatCurrency(cents) {
  if (cents < 0) {
    return "-" + formatCurrency(-cents);
  }
  return "$" + (cents / 100).toFixed(2);
}

module.exports = formatCurrency;