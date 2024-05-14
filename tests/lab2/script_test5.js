let startBtn = document.getElementById('start');
let line = document.getElementById('line');
let second = 0;
let milisec = 0;
let timer = false;
let amount = 5;
let counter = amount;
const secFinal = document.getElementById('sec');
const milisecFinal  = document.getElementById('milisec');
let results = new Array(amount+1);
results[0] = 0;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function playNumber(number){
    audio = new Audio('../sounds/' + number + '.mp3');
    audio.play();
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
function startTest() {
    const firstNumber = getRandomInt(1, 10);
    const secondNumber = getRandomInt(1, 10);
    const plus = 10;
    playNumber(firstNumber);
    const int1 = setTimeout(playNumber, 700, plus);
    setTimeout(playNumber, 1500, secondNumber);
    const answer = firstNumber + secondNumber;
    finalNumber = answer;
    timer = true;
    const time = setTimeout(stopWatch, 2100);
    counter --;
    console.log("Counter = " + counter);
}        

function restartTest() {
    timer = false;
    second = 0;
    milisec = 0;
}

function isKeyPressedAndCounterNotZero(event){
    if (finalNumber % 2 === 0){
        return event.keyCode === 37
    }
    else{
        return event.keyCode === 39
    }
}


function doTest(){
        if (counter > 0){
            restartTest();
            setTimeout(startTest, getRandomInt(1, 5) * 1000);
            let dataSec = document.getElementById('sec').innerHTML;
            let dataMilisec = document.getElementById('milisec').innerHTML;
            results.push(dataSec + dataMilisec);
        }
        else {
            timer = false;
            let dataSec = document.getElementById('sec').innerHTML;
            let dataMilisec = document.getElementById('milisec').innerHTML;
            results.push(dataSec + dataMilisec);
        }
    
}

startBtn.addEventListener('keydown', function (event){
    block_space(event);
    if (isKeyPressedAndCounterNotZero(event)){
        if (counter !== amount && timer === true){
            doTest();
            fill(counter*(100/amount), line);
        }else{
            timer = false;
            fill(counter*(100/amount), line);
        }
    }
    else{
        if (counter !== amount && timer === true){
            doTest();
            fill(counter*(100/amount), line);
            results[0]++;
            console.log(incorrectAnswer);
        }else{
            timer = false;
            results[0]++;
            fill(counter*(100/amount), line);
        }
    }
})


startBtn.addEventListener('click', function () {
    if (counter === amount) {
        setTimeout(startTest, getRandomInt(1, 5) * 1000);
    }
});


function stopWatch() {
    if (timer) {
        milisec++;
        if (milisec === 100) {
            second++;
            milisec = 0;
        }
        let secString = second;
        let milisecString = milisec;

        if (second < 10) {
            secString = "0" + secString;
        }
        if (milisec < 10) {
            milisecString = "0" + milisecString;
        }
        secFinal.innerHTML = secString;
        milisecFinal.innerHTML = milisecString;
        setTimeout(stopWatch, 10);
    }
}