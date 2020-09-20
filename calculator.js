var openPerenNum = 0;
var closedPerenNum = 0;
var noShowNumbers = "";
var hasUsedJavascript = false;
function AppendNumber(number) {
  if (hasUsedJavascript == false) {
    let output = document.getElementById("output");
    output.innerText = "";
    output.innerText += number;
    noShowNumbers += number;
    hasUsedJavascript = true;
  } else {
    let output = document.getElementById("output");
    output.innerText += number;
    noShowNumbers += number;
  }
}
function AppendDop(op) {
  noShowNumbers += op;
  output.innerText = "now the next side of your term";
  hasUsedJavascript = false;
}

function equalFunc() {
  let evaluatedNumbers = eval(noShowNumbers);
  output.innerText = evaluatedNumbers;
}

function backspace() {
  if (noShowNumbers.length > 0) {
    if (noShowNumbers.charAt(noShowNumbers.length - 1) == "(") {
      openPerenNum--;
      noShowNumbers = noShowNumbers.substring(0, noShowNumbers.length - 1);
    } else if (noShowNumbers.charAt(noShowNumbers.length - 1) == ")") {
      closedPerenNum--;
      noShowNumbers = noShowNumbers.substring(0, noShowNumbers.length - 1);
    } else if (output.innerText.length > 0) {
      noShowNumbers = noShowNumbers.substring(0, noShowNumbers.length - 1);
      output.innerText = output.innerText.substring(
        0,
        output.innerText.length - 1
      );
    }
  }
}

function clearAll() {
  noShowNumbers = "";
  output.innerText = "your text will show up here";
  hasUsedJavascript = false;
  openPerenNum = 0;
  closedPerenNum = 0;
}
function peren(perenthisis) {
  noShowNumbers += perenthisis;
}
