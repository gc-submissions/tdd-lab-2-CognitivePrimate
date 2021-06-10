const ChangeHandler = require("./ChangeHandler");
const formatCurrency = require("./formatCurrency");

let changeHandler = new ChangeHandler(0);
setupUI();

function setupUI() {
  const vendingForm = document.getElementById("vendingForm");
  const amountDueInput = document.getElementById("amountDue");
  const coinButtonContainer = document.getElementById("coins");
  const cashTenderedOutput = document.getElementById("cashTendered");
  const paymentSufficientAlert = document.getElementById("paymentSufficient");
  const getChangeButton = document.getElementById("getChangeButton");
  const changeSection = document.getElementById("change");
  const changeOutputs = changeSection.querySelectorAll(".change-count");
  const resetButton = document.getElementById("resetButton");


  amountDueInput.addEventListener("change", () => {
    const amountDue = Math.round(amountDueInput.value * 100);
    changeHandler = new ChangeHandler( amountDue );
    updateDisplay();
  });

  coinButtonContainer.addEventListener("click", (e) => {
    let type = e.target.getAttribute("data-type");
    if (type) {
      changeHandler.insertCoin(type);
      updateDisplay();
    }
  });

  vendingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (changeHandler.isPaymentSufficient) {
      const change = changeHandler.giveChange();
      changeOutputs[0].innerText = change.quarters;
      changeOutputs[1].innerText = change.dimes;
      changeOutputs[2].innerText = change.nickels;
      changeOutputs[3].innerText = change.pennies;
      changeSection.hidden = false;
    }
  });

  resetButton.addEventListener("click", () => {
    amountDueInput.value="";
    changeHandler = new ChangeHandler(0);
    updateDisplay();
  });

  function updateDisplay() {
    cashTenderedOutput.innerText = formatCurrency(changeHandler.cashTendered);
    const enoughTendered = changeHandler.amountDue !== 0 && changeHandler.isPaymentSufficient();
    paymentSufficientAlert.hidden = !enoughTendered;
    getChangeButton.disabled = !enoughTendered;
    changeSection.hidden = true;
  }
  
  updateDisplay();
}