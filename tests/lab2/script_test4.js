let testBtn = document.getElementById('okno');
let startBtn = document.getElementById('start');
let second = 0;
let milisec = 0;
let timer = false;
let counter = 0;
let amount = 3;
const secFinal = document.getElementById('sec');
const milisecFinal  = document.getElementById('milisec');
let results = new Array(amount);
let finalNumber;
let incorrectAnswer = 0;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function startTest() {
    const firstNumber = getRandomInt(1, 5);
    const secondNumber = getRandomInt(1, 5);
    okno.innerHTML = firstNumber + ' + ' + secondNumber;
    const answer = firstNumber + secondNumber;
    finalNumber = answer;
    timer = true;
    stopWatch();
    counter++;
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
    if (counter < amount){
        restartTest();
        const clr = setTimeout(startTest, getRandomInt(1, 5) * 1000);
        let dataSec = document.getElementById('sec').innerHTML;
        let dataMilisec = document.getElementById('milisec').innerHTML;
        results.push(dataSec + dataMilisec);
    }
    else {
        timer = false;
    }

}

startBtn.addEventListener('keydown', function (event){
    if (isKeyPressedAndCounterNotZero(event)){ 
        if (counter !==0 && timer === true)
            doTest();
    }
    else{
        if (counter !== 0 && timer === true){
            doTest();
            incorrectAnswer++;
            console.log(incorrectAnswer);
        }
    }
})


startBtn.addEventListener('click', function () {
    if (counter === 0) {
        const clr = setTimeout(startTest, getRandomInt(1, 5) * 1000);
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