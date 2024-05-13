function block_space(btn){
    if (btn.keyCode == '32') {
        btn.preventDefault();
    }
};

let startBtn = document.getElementById('start');
let okno = document.getElementById('okno');
let line = document.getElementById('line');


let second = 0; 
let milisec = 0; 
let amount = 5;
let counter = amount;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fill(n, line) {
    line.style.backgroundImage = `linear-gradient(90deg, #444444 ${
      100 - n
    }%, #ffffff ${100 - n}%)`;
}


function startTest(){
    okno.style.backgroundColor = "red";
    timer = true; 
    stopWatch(); 
    counter --;
    console.log("Counter = " + counter);
}

function restartTest(){
    timer = false;
    second = 0;
    milisec = 0;
    okno.style.backgroundColor = "white";    
}

startBtn.addEventListener('keydown', function (btn) {
    if (btn.keyCode == 32 & counter != amount){     
        if (counter > 0){
            restartTest();
            setTimeout(startTest, getRandomInt(1, 5)*1000);        
            fill(counter*20, line);
        }
        else{
            timer = false;
            fill(counter*20, line);
        }
    }  
});


startBtn.addEventListener('click', function () {
    if (counter == amount){     
        const clr = setTimeout(startTest, getRandomInt(1, 5)*1000);
    }  
});

  
function stopWatch() { 
    if (timer) { 
        milisec++; 
  
        if (milisec == 100) { 
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
  
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('milisec').innerHTML = milisecString; 
        setTimeout(stopWatch, 10); 
    } 
}
