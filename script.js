const buttons = Array.from(document.querySelectorAll(".tipka"));
firstNumber = [];
secondNumber = [];
operator = 0;
const disp = document.querySelector("#display");
let int;
let int2;
function activateElements() {
  buttons.forEach((button) => {
    button.addEventListener("click", buttonClicked);
  });
}
activateElements();
function buttonClicked(e) {
  const id = e.target.id;
  if (secondNumber.length == 0 && operator == 0) {
    numberInput(firstNumber, id);
  }
  if (firstNumber.length > 0 && secondNumber.length == 0) {
    int = displayNumber(firstNumber, int);
  }
  //----------------Dotato za domaci zadatak
  if (
    (secondNumber == 0 && id === "sqrt") ||
    id === "sin" ||
    id === "cos" ||
    id === "round"
  ) {
    showResult(id, int, null);
  }
  //----------------------------------------
  if (
    secondNumber == 0 &&
    (id === "add" || id === "sub" || id === "mul" || id === "divide")
  ) {
    chooseOperator(id);
    disp.innerHTML = operator;
  }
  if (operator != 0) {
    numberInput(secondNumber, id);
  }
  if (secondNumber.length > 0) {
    int2 = displayNumber(secondNumber, int2);
  }
  if (
    firstNumber.length > 0 &&
    secondNumber.length > 0 &&
    operator != 0 &&
    id === "result"
  ) {
    showResult(operator, int, int2);
    firstNumber.length = 0;
    secondNumber.length = 0;
    operator = 0;
  }
  if (id === "clr") {
    firstNumber.length = 0;
    secondNumber.length = 0;
    operator = 0;
    disp.innerHTML = "...";
  }
}

function numberInput(collection, id) {
  if (collection.length < 8) {
    if (id === "one") {
      collection.push("1");
    }
    if (id === "two") {
      collection.push("2");
    }
    if (id === "three") {
      collection.push("3");
    }
    if (id === "four") {
      collection.push("4");
    }
    if (id === "five") {
      collection.push("5");
    }
    if (id === "six") {
      collection.push("6");
    }
    if (id === "seven") {
      collection.push("7");
    }
    if (id === "eight") {
      collection.push("8");
    }
    if (id === "nine") {
      collection.push("9");
    }
    if (id === "zero") {
      collection.push("0");
    }
    if (id === "comma" && !collection.includes(".")) {
      collection.push(".");
    }
    if (id === "plusMinus" && !collection.includes("-")) {
      collection.unshift("-");
    } else if (id === "plusMinus" && collection.includes("-")) {
      collection.shift();
    }
  }
}
function chooseOperator(id) {
  switch (id) {
    case "add":
      operator = "+";
      break;
    case "sub":
      operator = "&#8722;";
      break;
    case "mul":
      operator = "&#215;";
      break;
    case "divide":
      operator = "&#247;";
      break;
  }
}
function showResult(operator, value1, value2) {
  if (operator === "+") {
    const addRes = (value1 + value2).toString();
    disp.innerHTML = addRes.substring(0, 9);
  }
  if (operator === "&#8722;") {
    const subRes = (value1 - value2).toString();
    disp.innerHTML = subRes.substring(0, 9);
  }
  if (operator === "&#215;") {
    const multRes = (value1 * value2).toString();
    disp.innerHTML = multRes.substring(0, 9);
  }
  if (operator === "&#247;" && value2 != 0) {
    const divRes = (value1 / value2).toString();
    disp.innerHTML = divRes.substring(0, 9);
  }
  if (operator === "&#247;" && value2 == 0) {
    firstNumber.length = 0;
    secondNumber.length = 0;
    operator = 0;
    disp.innerHTML = "Error";
  }
  //----------Dodato za domaci zadatak
  if (operator === "sqrt") {
    const square = Math.sqrt(value1).toString();
    if (!isNaN(square)) {
      disp.innerHTML = square.substring(0, 9);
    } else {
      disp.innerHTML = "Error";
    }
  }
  if (operator === "sin") {
    const sinus = Math.sin(value1).toString();
    disp.innerHTML = sinus.substring(0, 9);
  }
  if (operator === "cos") {
    const cosinus = Math.cos(value1).toString();
    disp.innerHTML = cosinus.substring(0, 9);
  }
  if (operator === "round") {
    const rounded = Math.round(value1).toString();
    disp.innerHTML = rounded.substring(0, 9);
  }
  //-------------------------------------
}
function displayNumber(collection, variable) {
  variable = Number(collection.join(""));
  disp.innerHTML = variable;
  return variable;
}
