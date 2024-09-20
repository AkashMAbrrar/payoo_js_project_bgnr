// another way to add money

/**
 * 1 add event listener to the add money button (form submit)
 *
 * 2 make sure to prevent default to set the page reloads
 *
 * 3 get the user wants to add also get the pin number
 *
 * 3 verify the pin number for wrong pin number ==> failed to add for the right pin number
 *
 * 4 get the current balance
 *
 * 5 add money to be added with the current balance
 *
 * 6 display/ update the balance in the DOM/ Ui
 *
 * **/

document
  .getElementById("add_money_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //  get money and the pin number
    const addMoney = document.getElementById("add_money_input").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("pin_input").value;
    console.log(addMoneyNumber);

    //  poor way to verify the pin number
    if (pinNumber === "1234") {
      //   add money to the account
      const balance = document.getElementById("account_balance").innerText;
      const balanceNumber = parseFloat(balance);
      console.log(balanceNumber);

      // new balance adding
      const newBalance = balanceNumber + addMoneyNumber;
      //    updated the dom with updated balance
      document.getElementById("account_balance").innerText = newBalance;
      console.log(newBalance);
    } else {
      alert("Invalid Pin Number");
    }
  });
