document
  .getElementById("cash_out_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cash out btn clicked");

    const cashOut = document.getElementById("cash_out_input").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("cash_out_pin").value;
    console.log(cashOut, pinNumber);
    //  wrong way to verified pin number
    if (pinNumber === "1234") {
      const balance = document.getElementById("account_balance").innerText;
      const balanceNumber = parseFloat(balance);

      //    reduces balance
      const newBalance = balanceNumber - cashOutNumber;
      console.log(newBalance);
      //    update the ui?dom

      document.getElementById("account_balance").innerText = newBalance;
    } else {
      alert("failed withdraw");
    }
  });
