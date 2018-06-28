function Calculate(num) {
    this.num = num;
    this.sum = function() {
        let total = 0;
        for (const value of this.num) {
            total += value;
        }
        return total;
    };
    this.minus = function() {
        let result = 0;
        let min = 0;

        for (let i = 1; i < this.num.length; i += 1) {
            min = num[i - 1] - num[i];
            result = num[i] = min;

        }
        return result;
    }

    this.mult = function() {
        let result = 1;

        for (const value of this.num) {
            result *= value;
        }

        return result;
    };
};


let arr = [];
const Calc = new Calculate(arr);
let operator;

do {
    const userInput = prompt("Введите числа для вычисления! К примеру если 2 - 1, введите сначала 2 потом 1 и = для окончания", '=');

    if (userInput === null) {
        alert("Отмена пользователем");
        break;
    } else if (userInput === "=") {
    		changeOperation();
        break;
    } else {
        const userNumber = Number.parseFloat(userInput);
        arr.push(userNumber);
    }

} while (true);

function changeOperation() {
    const userOperation = prompt("Выберите операцию для ваших чисел! введите * - умножение, + - сумма, - разница");
    if (userOperation === null) {
        alert("Отмена пользователем!");
    } else if (userOperation === "*") {
    		operator = "*";
    		console.log(operator);
    		const result = Calc.mult();
    		alert("Ваша операция " + massageArr(arr));
        alert(`Результат умножения = ${result}`);
    } else if (userOperation === "+") {
    		operator = "+";
        const result = Calc.sum();
        alert("Ваша операция " + massageArr(arr));
        alert(`Результат сложения = ${result}`);
    } else if (userOperation === "-") {
    		operator = "-";
        const result = Calc.minus();
        alert("Ваша операция " + massageArr(arr));
        alert(`Результат сложения = ${result}`);
    }

    function massageArr (arr){
    	let arrNum = arr;
    	for (const value of arrNum) {
    		const idx = arrNum.indexOf(value);
    		if(idx % 2 === 1) {
    			arrNum.splice(idx, 0, operator);
    		}
    	}

    	return arrNum.join(" ");
    }
}