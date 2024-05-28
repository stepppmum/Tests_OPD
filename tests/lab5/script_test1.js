let testBtn = document.getElementById('okno');
let startBtn = document.getElementById('start');
let greenBtn = document.getElementById('green');
let redBtn = document.getElementById('red');
let blueBtn = document.getElementById('blue');
let yellowBtn = document.getElementById('yellow');
let blackBtn = document.getElementById('black');
let line = document.getElementById('line');
let second = 0;
let milisec = 0;
let timer = false;
let amount = 3;
let counter = amount;
const secFinal = document.getElementById('sec');
const milisecFinal  = document.getElementById('milisec');
let results = new Array(amount+1);
results[0] = 0;
let text = ['зеленый', 'синий', 'красный', 'желтый', 'черный', 'розовый', 'фиолетовый'];
let color = ['crimson', 'mediumblue', 'black', 'green', 'goldenrod'];
let finalNumber;



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fill(n, line) {
    line.style.backgroundImage = `linear-gradient(90deg, #444444 ${
      100 - n
    }%, #ffffff ${100 - n}%)`;
}


function startTest() {
    const randomColor = getRandomInt(1, 6);
    const randomText = getRandomInt(1, 8);
    okno.innerHTML = text[randomText - 1];
    okno.style.color = color[randomColor - 1];
    timer = true;
    stopWatch();
    counter --;
    console.log("Counter = " + counter);
}        

function restartTest() {
    timer = false;
    second = 0;
    milisec = 0;
}


function doTest(){
    if (counter > 0){
        restartTest();
        setTimeout(startTest, getRandomInt(1, 5) * 1000);
        let dataSec = document.getElementById('sec').innerHTML;
        let dataMilisec = document.getElementById('milisec').innerHTML;
        results.push(dataSec + dataMilisec);
        fill(counter*(100/amount), line);
    }
    else {
        timer = false;
        let dataSec = document.getElementById('sec').innerHTML;
        let dataMilisec = document.getElementById('milisec').innerHTML;
        results.push(dataSec + dataMilisec);
        fill(counter*(100/amount), line);
        console.log('dgh');
    }

}

greenBtn.addEventListener('click', function (){
    if (timer === true){
        if (okno.style.color === 'green'){
            if (counter !== amount && timer === true){
                doTest();
            }else{
                timer = false;
            }    
        }
        else{
            if (counter !== amount && timer === true){
                doTest();
                fill(counter*(100/amount), line);
                results[0]++;
                console.log(results[0]);
            }else{
                timer = false;
                results[0]++;
                console.log(results[0]);
                fill(counter*(100/amount), line);
            }
        }
    }
})

blueBtn.addEventListener('click', function (){
    if (timer === true){
        if (okno.style.color === 'mediumblue'){
            if (counter !== amount && timer === true){
                doTest();
            }else{
                timer = false;
            }    
        }
        else{
            if (counter !== amount && timer === true){
                doTest();
                fill(counter*(100/amount), line);
                results[0]++;
                console.log(results[0]);
            }else{
                timer = false;
                results[0]++;
                console.log(results[0]);
                fill(counter*(100/amount), line);
            }
        }
    }
})

redBtn.addEventListener('click', function (event){
    if (timer === true){
        if (okno.style.color === 'crimson'){
            if (counter !== amount && timer === true){
                doTest();
            }else{
                timer = false;
            }    
        }
        else{
            if (counter !== amount && timer === true){
                doTest();
                fill(counter*(100/amount), line);
                results[0]++;
                console.log(results[0]);
            }else{
                timer = false;
                results[0]++;
                console.log(results[0]);
                fill(counter*(100/amount), line);
            }
        }
    }
})

yellowBtn.addEventListener('click', function (event){
    if (timer === true){
        if (okno.style.color === 'goldenrod'){
            if (counter !== amount && timer === true){
                doTest();
            }else{
                timer = false;
            }    
        }
        else{
            if (counter !== amount && timer === true){
                doTest();
                fill(counter*(100/amount), line);
                results[0]++;
                console.log(results[0]);
            }else{
                timer = false;
                results[0]++;
                console.log(results[0]);
                fill(counter*(100/amount), line);
            }
        }
    }
})

blackBtn.addEventListener('click', function (event){
    if (timer === true){
        if (okno.style.color === 'black'){
            if (counter !== amount && timer === true){
                doTest();
            }else{
                timer = false;
            }    
        }
        else{
            if (counter !== amount && timer === true){
                doTest();
                fill(counter*(100/amount), line);
                results[0]++;
                console.log(results[0]);
            }else{
                timer = false;
                results[0]++;
                console.log(results[0]);
                fill(counter*(100/amount), line);
            }
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