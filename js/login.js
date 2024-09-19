// document.getElementById('id).addEventListener('click', function(){})

//  search: form submit reloading the page

// step-1 : event handler
document
  .getElementById("login_btn")
  .addEventListener("click", function (event) {
    // step-2: protect the page reload
    event.preventDefault();
    // step-3 get the phone number input input field
    const phoneNumber = document.getElementById("phone_number").value;
    console.log(phoneNumber);
    console.log("button clicked");
  });
