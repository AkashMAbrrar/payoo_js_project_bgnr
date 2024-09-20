// add money to the account
/**
 * add event listener
 * prevent default reload
 * get money to be added to the account balances
 * **/

// step -1
document
  .getElementById("add_money_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // step -2 get money
    const addMoneyInput = document.getElementById("add_money_input").value;
    console.log(addMoneyInput);
    // step-2 get the pin number
    const pinNumberInput = document.getElementById("pin_input").value;
    console.log(pinNumberInput);

    // get -3 verify the pin number (this is not the proper way to validate pin number)
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");
      //   step -4 get the current balances
      const balance = document.getElementById("account_balance").innerText;
      const balanceNumber = parseFloat(balance);
      //  step -5 add money with current balances
      const addMoneyNumber = parseFloat(addMoneyInput);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      //    step -6 update the balance in the UI/ DOm
      document.getElementById("account_balance").innerText = newBalance;
    } else {
      alert("failed to added");
    }
  });
