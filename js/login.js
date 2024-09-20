// document.getElementById('id).addEventListener('click', function(){})

//  search: form submit reloading the page

// step-1 : event handler
// document
//   .getElementById("login_btn")
//   .addEventListener("click", function (event) {
//     // step-2: protect the page reload
//     event.preventDefault();
//     // step-3 get the phone number and pin number  input input field
//     const phoneNumber = document.getElementById("phone_number").value;
//     const pinNumber = document.getElementById("pin_input").value;

//     console.log(phoneNumber, pinNumber);

//     //  step -4 validate phone and pin
//     // this not the ideal way
//     if (phoneNumber === "5" && pinNumber === "1234") {
//       console.log("you are logged in");
//     } else {
//       alert("Wrong phone number or pin");
//     }

//     //  step -5 alow user to use the website
//   });

document
  .getElementById("login_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get phone number
    const phoneNumber = document.getElementById("phone_number").value;
    const pinNumber = document.getElementById("pin_input").value;
    // console.log(phoneNumber, pinNumber);

    //  poor way to validate(not recommended)
    if (phoneNumber === "369" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = "/home.html";
    } else {
      alert("invalid phone or pin number");
    }
  });
