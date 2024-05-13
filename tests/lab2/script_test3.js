let testBtn = document.getElementById('okno');
let startBtn = document.getElementById('start');
let second = 0;
let milisec = 0;
let timer = false;
let amount = 5;
let counter = amount;
const secFinal = document.getElementById('sec');
const milisecFinal  = document.getElementById('milisec');
let results = new Array(amount);
let incorrectAnswer = 0;

function block_space(btn){
    if (btn.keyCode == '32') {
        btn.preventDefault();
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fill(n, line) {
    line.style.backgroundImage = `linear-gradient(90deg, #444444 ${
      100 - n
    }%, #ffffff ${100 - n}%)`;
}

function startTest() {
    const colour = getRandomInt(1, 4);
    if (colour === 1){
        testBtn.style.backgroundColor = "red";
    }
    else if (colour === 2){
        testBtn.style.backgroundColor = "blue";
    }
    else{
        testBtn.style.backgroundColor = "green";
    }
    timer = true;
    stopWatch();
    counter --;
    console.log("Counter = " + counter);
}        

function restartTest() {
    timer = false;
    second = 0;
    milisec = 0;
    testBtn.style.backgroundColor = "white";
}

function isKeyPressedAndCounterNotZero(event) {
    if (testBtn.style.backgroundColor === "red"){
        return event.keyCode === 37
    }
    if (testBtn.style.backgroundColor === "blue"){
        return event.keyCode === 38
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
        }
    }
    else{
        if (counter !== amount && timer === true){
            doTest();
            fill(counter*(100/amount), line);
            incorrectAnswer ++;
            console.log(incorrectAnswer);
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