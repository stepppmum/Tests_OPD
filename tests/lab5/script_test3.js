let okno = document.getElementById('okno');
let startBtn = document.getElementById('start');
let line = document.getElementById('line');
let results = new Array(2);
results[0] = 0;
results[1] = 0;
let numbers = Array.from({length: 25}, () => Math.floor(Math.random() * 9)+1);
let answers = [];
const firstRow = ["Приготовьтесь!", "Внимание!", "Ряд 1"];
const secondRow = ["", "", "", "", "Ряд 2"];
const thirdRow = ["", "", "", "", "Ряд 3"];
const forthRow = ["", "", "", "", "Ряд 4"];
const fifthRow = ["", "", "", "", "Ряд 5"];
const final = ["ВСЕ!", ""];
console.log(numbers);
let userAnswers = [];
let count = 0;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fill(n, line) {
    line.style.backgroundImage = `linear-gradient(90deg, #444444 ${
      100 - n
    }%, #ffffff ${100 - n}%)`;
}

function block_space(btn){
    if (btn.keyCode == '32') {
        btn.preventDefault();
    }
};

function countResults(){
    for (var i = 0; i < numbers.length; i++){
        if ((i+1) % 5 !== 0){
            answers.push((numbers[i] + numbers[i+1]))
        }else if (i === 0){
            answers.push(numbers[i] + numbers[i+1])
        }
    }
}

const array = [].concat(firstRow, numbers.slice(0, 5), secondRow, numbers.slice(5, 10), thirdRow, numbers.slice(10, 15), forthRow, numbers.slice(15, 20), fifthRow, numbers.slice(20, 25), final);
console.log(array);
countResults();
console.log(answers);
let amount = array.length;
let counter = amount;


function returnNumber(){
    counter --;
    count ++;
    console.log(array[count - 1]);
    okno.innerHTML = (array[count - 1]);
    setTimeout(() => {okno.innerHTML = ''}, 1900);
    fill(counter*(100/amount), line);
    return count;
}



function checkResult(){
    for (var i = 0; i < answers.length; i++){
        input = document.getElementById(i+1);
        value = input.value;
        userAnswers[i] = value * 1;
    }
}
function compare(){
    for (var i=0; i < answers.length; i++){
        if (answers[i] !== userAnswers[i] && userAnswers[i] !== 0){
            results[0]++;
        }else if (userAnswers[i] === 0){
            results[1]++;
        }
    }
    console.log('ghj', results);
}

function startTest() {
    const timerId = setInterval(returnNumber, 2000);
    setTimeout(() => {clearInterval(timerId)}, 100000);
    setTimeout(checkResult, 100000);
    setTimeout(compare, 100000);
}        



startBtn.addEventListener('click', function () {
    if (counter === amount) {
        setInterval(startTest(), 2000);
    }
});

