import "./styles.scss";

const display = document.querySelector(".display");
const btnClear = document.querySelector(".btn-clear");
const allBtnNum = document.querySelectorAll(".btn-num");
const allBtnOperator = document.querySelectorAll(".operator");

const Calculator = {
  result: "0",
  operator: null,
  starter: null,
  isEnd: false,
  clear() {
    this.result = "0";
    this.operator = null;
    this.starter = null;
    this.isEnd = false;
  },
  show() {
    display.innerText = this.result;
  },
  insertNumber(number) {
    if (this.isEnd) {
      this.result = number;
      this.isEnd = false;
    } else {
      this.result = this.result === "0" ? number : this.result + number;
    }
  },
  applyOperator(operator) {
    // enter more operator
    if (this.operator && this.isEnd) {
      this.operator = operator;
      return;
    }

    const number = parseFloat(this.result);

    if (this.starter === null && !isNaN(number)) {
      this.starter = number;
    } else if (this.operator) {
      const result = this.calculate(this.starter, this.operator, number);
      this.result = result;
      this.starter = result;
    }

    this.isEnd = true;
    this.operator = operator;
  },
  calculate(starter, operator, value) {
    switch (operator) {
      case "+":
        return starter + value;
      case "-":
        return starter - value;
      case "*":
        return starter * value;
      case "/":
        return starter / value;
      default:
        return value;
    }
  }
};

// numbers
allBtnNum.forEach((btn) => {
  btn.addEventListener("click", function ({ target }) {
    Calculator.insertNumber(target.value);
    Calculator.show();
  });
});

// operators
allBtnOperator.forEach((btn) => {
  btn.addEventListener("click", function ({ target }) {
    Calculator.applyOperator(target.value);
    Calculator.show();
  });
});

// clear
btnClear.addEventListener("click", function () {
  Calculator.clear();
  Calculator.show();
});

// display
Calculator.show();
