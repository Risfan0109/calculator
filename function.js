const changeBg = () => {
  const changeBg = document.getElementById("changeBg");
  calculator.style.backgroundColor = "#5e5eda";
};

const changeBg3 = () => {
  const changeBg3 = document.getElementById("changeBg3");
  calculator.style.backgroundColor = "#661053";
};

function inputNumber(val) {
  document.getElementById("calculator-screen").value += val;
}

function clean() {
  document.getElementById("calculator-screen").value = "";
}

function backspace() {
  var val = document.getElementById("calculator-screen").value;
  document.getElementById("calculator-screen").value = val.substring(0, val.length - 1);
}

function equal() {
  var val = document.getElementById("calculator-screen").value;
  if (val) {
    document.getElementById("calculator-screen").value = eval(val);
  }
}
