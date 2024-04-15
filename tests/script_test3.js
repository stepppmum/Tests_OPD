let testBtn = document.getElementById('okno');
let startBtn = document.getElementById('start');
let space = 32;
let second = 0;
let milisec = 0;
let timer = false;
let counter = 0;
let amount = 10;
const secFinal = document.getElementById('sec');
const milisecFinal  = document.getElementById('milisec');
let results = new Array(amount);

function block_space(btn) {
    if (btn.keyCode === space) {
        btn.preventDefault();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
    counter++;
    console.log("Counter = " + counter);
}        

function restartTest() {
    timer = false;
    second = 0;
    milisec = 0;
    testBtn.style.backgroundColor = "white";
}

function isSpaceKeyPressedAndCounterNotZero(event, counter) {
    if (testBtn.style.backgroundColor === "red"){
        return event.keyCode === 37 && counter !== 0;
        //если что это стрелочка влево
    }
    else if (testBtn.style.backgroundColor === "blue"){
        return event.keyCode === 38 && counter !== 0;
        //это стрелочка вверх
    }
    else {
        return event.keyCode === 39 && counter !== 0;
        //это стрелочка вправо
    }
}


startBtn.addEventListener('keydown', function (event) {
    block_space(event);
    if (isSpaceKeyPressedAndCounterNotZero(event, counter)) {
        if (counter < amount) {
            restartTest();
            const clr = setTimeout(startTest, getRandomInt(1, 5) * 1000);
            let dataSec = document.getElementById('sec').innerHTML;
            let dataMilisec = document.getElementById('milisec').innerHTML;
            results.push(dataSec + dataMilisec);
        } else {
            timer = false;
        }
    }
});

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