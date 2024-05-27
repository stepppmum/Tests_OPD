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
    // const firstNumber = getRandomInt(1, 5);
    // const secondNumber = getRandomInt(1, 5);
    // okno.innerHTML = firstNumber + ' + ' + secondNumber;
    // const answer = firstNumber + secondNumber;
    // finalNumber = answer;
    // if (count % 5 !== 0){
    //     setInterval(returnNumber, 2000);
    //     console.log(count);
    // }else if (count === 0){
    //     returnNumber();
    // }
    //count ++;
    const timerId = setInterval(returnNumber, 2000);
    //setTimeout(clearInterval(timerId), 10000);
    setTimeout(() => {clearInterval(timerId)}, 100000);
    setTimeout(checkResult, 100000);
    setTimeout(compare, 100000);
    // let timeId = setTimeout(() => {setInterval(returnNumber, 2000)}, 25000);
    // //setTimeout(() => {timerId}, 25000);
    // setTimeout(() => {clearInterval(timeId)}, 33000);
    //setTimeout(() => {setInterval(returnNumber, 2000)}, 48000);
    //setTimeout(() => {clearInterval(timerId)}, 56000);
    // if (returnNumber === 5){
    //     clearInterval(timerId);
    // }
    //console.log(count);
    //timer = true;
    //stopWatch();
    // counter --;
    // console.log("Counter = " + counter);
}        

// function restartTest() {
//     timer = false;
//     second = 0;
//     milisec = 0;
// }


// function isKeyPressedAndCounterNotZero(event){
//     if (finalNumber % 2 === 0){
//         return event.keyCode === 37
//     }
//     else{
//         return event.keyCode === 39
//     }
// }

// function doTest(){
//     if (counter > 0){
//         restartTest();
//         setTimeout(startTest, getRandomInt(1, 5) * 1000);
//         let dataSec = document.getElementById('sec').innerHTML;
//         let dataMilisec = document.getElementById('milisec').innerHTML;
//         results.push(dataSec + dataMilisec);
//     }
//     else {
//         timer = false;
//         let dataSec = document.getElementById('sec').innerHTML;
//         let dataMilisec = document.getElementById('milisec').innerHTML;
//         results.push(dataSec + dataMilisec);
//     }

// }

// startBtn.addEventListener('keydown', function (event){
//     block_space(event);
//     if (isKeyPressedAndCounterNotZero(event)){ 
//     //while (true){
//         if (counter !== amount && timer === true){
//             doTest();
//             fill(counter*(100/amount), line);
//         }else{
//             timer = false;
//             fill(counter*(100/amount), line);
//         }    
//     }
    // else{
    //     if (counter !== amount && timer === true){
    //         doTest();
    //         fill(counter*(100/amount), line);
    //         results[0]++;
    //         console.log(incorrectAnswer);
    //     }else{
    //         timer = false;
    //         results[0]++;
    //         fill(counter*(100/amount), line);
    //     }
    // }
//})


startBtn.addEventListener('click', function () {
    if (counter === amount) {
        setInterval(startTest(), 2000);
    }
});


// function stopWatch() {
//     if (timer) {
//         milisec++;
//         if (milisec === 100) {
//             second++;
//             milisec = 0;
//         }
//         let secString = second;
//         let milisecString = milisec;

//         if (second < 10) {
//             secString = "0" + secString;
//         }
//         if (milisec < 10) {
//             milisecString = "0" + milisecString;
//         }
//         secFinal.innerHTML = secString;
//         milisecFinal.innerHTML = milisecString;
//         setTimeout(stopWatch, 10);
//     }
// }