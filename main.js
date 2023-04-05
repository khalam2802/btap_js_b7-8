let numbers = [];
let integers = [];
let decimals = [];

function addNumber() {
  let input = document.getElementById("input-numbers");
  let value = parseInt(input.value);
  if (!isNaN(value)) {
    numbers.push(value);
    input.value = "";
    showNumbers();
  }
}

function showNumbers() {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Các số được thêm: " + numbers.join(", ");
}

function sumPositive() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Tổng các số dương: " + sum;
}
function countPositive() {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Số lượng số dương: " + count;
}

function findMin() {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Số nhỏ nhất: " + min;
}

function findMinPositive() {
    let minPositive = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            if (minPositive === -1 || numbers[i] < minPositive) {
                minPositive = numbers[i];
            }
        }
    }
    let resultDiv = document.getElementById("result");
    if (minPositive === -1) {
        resultDiv.innerHTML = "Không có số dương";
    } else {
        resultDiv.innerHTML = "Số dương nhỏ nhất: " + minPositive;
    }
}
function findLastEven() {
    let lastEven = -1
    for (let i = numbers.length - 1; i >= 0; i--) {
		if (numbers[i] % 2 === 0) {
			lastEven = numbers[i];
			break;
		}
	}
	let resultDiv = document.getElementById("result");
	if (lastEven === -1) {
		resultDiv.innerHTML = "Không có số chẵn";
	} else {
		resultDiv.innerHTML = "Số chẵn cuối cùng: " + lastEven;
	}
}

function swap() {
    let index1 = parseInt(document.getElementById("input-index1").value);
    let index2 = parseInt(document.getElementById("input-index2").value);
    if (!isNaN(index1) && !isNaN(index2) && index1 >= 0 && index2 >= 0 && index1 < numbers.length && index2 < numbers.length) {
      let temp = numbers[index1];
      numbers[index1] = numbers[index2];
      numbers[index2] = temp;
      showNumbers();
    }
  }

function sortAscending() {
	numbers.sort(function(a, b){return a-b});
	showNumbers();
}
