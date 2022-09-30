function getPin() {
  const pin = generatePin();
  const pinStr = pin + "";
  if (pinStr.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
document.getElementById("generate_btn").addEventListener("click", function () {
  const pin = getPin();

  const displayPin = document.getElementById("pin_input");
  displayPin.value = pin;
});
document.getElementById("calculator").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typeNumber = document.getElementById("typed_numbers");
  const previoutNumber = typeNumber.value;

  if (isNaN(number)) {
    if (number === "C") {
      typeNumber.value = "";
    } else if (number === "<") {
      const digits = previoutNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typeNumber.value = remainingDigits;
    }
  } else {
    const newNumber = previoutNumber + number;
    typeNumber.value = newNumber;
  }
});

document.getElementById("submit").addEventListener("click", function () {
  const displayPin = document.getElementById("pin_input");
  const currentPinValue = displayPin.value;

  const typedPin = document.getElementById("typed_numbers");
  const typedPinValue = typedPin.value;

  const pinSucessMessage = document.getElementById("pin_success");
  const pinWrongMessage = document.getElementById("pin_wrong");
  if (typedPinValue === currentPinValue) {
    console.log("corect");

    pinSucessMessage.style.display = "block";
    pinWrongMessage.style.display = "none";
  } else {
    pinSucessMessage.style.display = "none";
    pinWrongMessage.style.display = "block";
  }
});
