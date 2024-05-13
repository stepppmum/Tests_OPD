const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
let startBtn = document.getElementById('start');
let space = 32;
let timer = false;
let amount = 5;
let counter = amount;
var continueAnimating = true;
let results = new Array(amount);
let pTimestamp = 0;
let angle = 0;
let radius = 150;

function fill(n, line) {
    line.style.backgroundImage = `linear-gradient(90deg, #444444 ${
      100 - n
    }%, #ffffff ${100 - n}%)`;
}


//рисует круг изначально
context.beginPath();
context.arc(canvas.width / 2,canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
context.stroke();

//рисует звездочку на круге изначально
context.beginPath();
star(20, canvas.width/2, canvas.height/2 - radius, 10);
context.fillStyle = "pink";
context.fill();
context.stroke();

//рисует точку на круге изначально
context.beginPath();
context.arc(canvas.width / 2 + radius * Math.cos(angle),
    canvas.height / 2 + radius * Math.sin(angle),
    10, 0, Math.PI * 2
);
context.fillStyle = "blue";
context.fill();
context.stroke();


function tick(timestamp){
    if(!continueAnimating){
        return angle;
    }

    const diff = timestamp - pTimestamp;
    pTimestamp = timestamp;

//скорость движения кружочка
    angle += dop_Angle;

//очищение по кадрам
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "blue";

    context.beginPath();
    context.arc(canvas.width / 2,canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
    context.stroke();

//рисует звездочку на круге
    context.beginPath();
    star(20, canvas.width/2, canvas.height/2 - radius, 10);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();

//рисует точку
    context.beginPath();
    context.arc(canvas.width / 2 + radius * Math.cos(angle),
        canvas.height / 2 + radius * Math.sin(angle),
        10, 0, Math.PI * 2
    );
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    requestAnimationFrame(tick);
}

//функция для звездочки
function star(R, cX, cY, N) {
    context.beginPath();
    context.moveTo(cX + R,cY);
    for(var i = 1; i <= N * 2; i++){
      if(i % 2 == 0){
        var theta = i * (Math.PI * 2) / (N * 2);
        var x = cX + (R * Math.cos(theta));
        var y = cY + (R * Math.sin(theta));
      }else{
        var theta = i * (Math.PI * 2) / (N * 2);
        var x = cX + ((R/2) * Math.cos(theta));
        var y = cY + ((R/2) * Math.sin(theta));
      }
      context.lineTo(x ,y);
    }
    context.closePath();
    context.stroke();
}


function block_space(btn){
    if (btn.keyCode === space) {
        btn.preventDefault();
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// тут я заебалась
// если юзер не успел нажать до того как шарик покинул верхнюю половину то
// ответ все равно надо записать (это будет время между моментом когда шарик
// был наверху и моментом когда шарик был справа (в нуле) взятое с минусом)

function checkTime(){
    speed = Math.abs((60 * dop_Angle) / (Math.PI));
    if ((canvas.height / 2 + radius * Math.sin(angle)) < canvas.height / 2){
        if (dop_Angle > 0){
            //мы идем по часовой по окружности
            if ((canvas.width / 2 + radius * Math.cos(angle)) < (canvas.width / 2)){
                length = (((Math.PI * radius) / 180) * Math.asin(1+(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)/ radius)));
            }
            else{
                length = -(((Math.PI * radius) / 180) * Math.asin(1+(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)/ radius)));
            }
        }
        else{
            //идем против часовой по окружности
            if ((canvas.width / 2 + radius * Math.cos(angle)) < (canvas.width / 2)){
                length = -(((Math.PI * radius) / 180) * Math.asin(1+(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)/ radius)));
            }
            else{
                length = (((Math.PI * radius) / 180) * Math.asin(1+(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2) / radius)));
            }
        }
    }else{
        length = -(Math.PI / 4);
    }
    time = length / speed;
    return time;
    //время в секундах
}

function block_space(btn){
    if (btn.keyCode == '32') {
        btn.preventDefault();
    }
};

function startTest() {
    continueAnimating = true;
    dop_Angle = Math.PI * ((getRandomInt(-50, 50))/1000);
    requestAnimationFrame(tick);
    timer = true;
    counter--;
    console.log("Counter = " + counter);
}        


function restartTest() {
    timer = false;
    continueAnimating = false;
}


function isKeyPressedAndCounterNotZero(event){
    return event.keyCode === 32;
}


function doTest(){
    if (counter > 0){
        restartTest();
        setTimeout(startTest, getRandomInt(1, 5) * 1000);
        results.push(checkTime());
        console.log(results);
    }
    else{
        continueAnimating = false;
        results.push(checkTime());
        console.log(results);
    }
}


startBtn.addEventListener('keydown', function (event){
    block_space(event);
    if (isKeyPressedAndCounterNotZero(event)){ 
        if (counter !== amount && continueAnimating === true){
            doTest();
            fill(counter*(100/amount), line);
        }else{
            continueAnimating = false;
            fill(counter*(100/amount), line);
        }
    }
})


startBtn.addEventListener('click', function () {
    if (counter === amount) {
        setTimeout(startTest, getRandomInt(1, 5) * 1000);
    }
});