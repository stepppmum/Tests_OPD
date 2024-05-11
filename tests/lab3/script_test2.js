const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 400;
let startBtn = document.getElementById('start');
let space = 32;
let timer = false;
let counter = 0;
let amount = 5;
var continueAnimating = true;
let results = new Array(amount);
let pTimestamp = 0;
let angle = 0;
let angle1 = 0;
let angle2 = 0;
let radius = 130;
let incorrectAnswer = 0;

//рисует круг изначально
context.beginPath();
context.arc(canvas.width * (1/6),canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
context.stroke();

context.beginPath();
context.arc(canvas.width * (3/6),canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
context.stroke();

context.beginPath();
context.arc(canvas.width * (5/6),canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
context.stroke();

//рисует звездочку на круге изначально
context.beginPath();
star(15, canvas.width * (1/6), canvas.height/2 + radius, 6);
context.fillStyle = "pink";
context.fill();
context.stroke();

context.beginPath();
star(15, canvas.width * (3/6) - radius, canvas.height/2, 6);
context.fillStyle = "pink";
context.fill();
context.stroke();

context.beginPath();
star(15, canvas.width * (5/6), canvas.height/2 - radius, 6);
context.fillStyle = "pink";
context.fill();
context.stroke();

//рисует точку на круге изначально
context.beginPath();
context.arc(canvas.width * (1/6) + radius * Math.cos(angle),
    canvas.height / 2 + radius * Math.sin(angle), 10, 0, Math.PI * 2);
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.arc(canvas.width * (3/6) + radius * Math.cos(angle1),
    canvas.height / 2 + radius * Math.sin(angle1),
    10, 0, Math.PI * 2);
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.arc(canvas.width * (5/6) + radius * Math.cos(angle2),
    canvas.height / 2 + radius * Math.sin(angle2), 10, 0, Math.PI * 2);
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
    angle1 += dop_Angle1;
    angle2 += dop_Angle2;

//очищение по кадрам
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "blue";

    //рисует круги
    context.beginPath();
    context.arc(canvas.width * (1/6),canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
    context.stroke();
    
    context.beginPath();
    context.arc(canvas.width * (3/6),canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
    context.stroke();
    
    context.beginPath();
    context.arc(canvas.width * (5/6),canvas.height / 2, radius, -Math.PI*2, Math.PI * 2);
    context.stroke();
    
    //рисует звездочки
    context.beginPath();
    star(15, canvas.width * (1/6), canvas.height/2 + radius, 6);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
    
    context.beginPath();
    star(15, canvas.width * (3/6) - radius, canvas.height/2, 6);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
    
    context.beginPath();
    star(15, canvas.width * (5/6), canvas.height/2 - radius, 6);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
    
    //рисует точки
    context.beginPath();
    context.arc(canvas.width * (1/6) + radius * Math.cos(angle),
        canvas.height / 2 + radius * Math.sin(angle), 10, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.arc(canvas.width * (3/6) + radius * Math.cos(angle1),
        canvas.height / 2 + radius * Math.sin(angle1),
        10, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.arc(canvas.width * (5/6) + radius * Math.cos(angle2),
        canvas.height / 2 + radius * Math.sin(angle2), 10, 0, Math.PI * 2);
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


function checkTime(){
    if (dop_Angle2 !== 0){
        speed = Math.abs((60 * dop_Angle2) / (Math.PI));
        if ((canvas.height / 2 + radius * Math.sin(angle2)) < canvas.height / 2){
            if (dop_Angle2 > 0){
                //мы идем по часовой по окружности
                if ((canvas.width * (5/6) + radius * Math.cos(angle2)) < (canvas.width * (5/6))){
                    length = (((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle2)) - canvas.height / 2)) / radius)));
                }
                else{
                    length = -(((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle2)) - canvas.height / 2)) / radius)));
                }
            }
            else{
                //идем против часовой по окружности
                if ((canvas.width * (5/6) + radius * Math.cos(angle2)) < (canvas.width * (5/6))){
                    length = -(((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle2)) - canvas.height / 2)) / radius)));
                }
                else{
                    length = (((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle2)) - canvas.height / 2)) / radius)));
                }
            }
        }else{
            length = -(Math.PI / 4);
        }
        return speed, length;
    }else if (dop_Angle !== 0){
        speed = Math.abs((60 * dop_Angle) / (Math.PI));
        if ((canvas.height / 2 + radius * Math.sin(angle2)) > canvas.height / 2){
            if (dop_Angle > 0){
                //мы идем по часовой по окружности
                if ((canvas.width * (1/6) + radius * Math.cos(angle)) < (canvas.width * (1/6))){
                    length = -(((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)) / radius)));
                }
                else{
                    length = (((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)) / radius)));
                }
            }
            else{
                //идем против часовой по окружности
                if ((canvas.width * (1/6) + radius * Math.cos(angle)) < (canvas.width * (1/6))){
                    length = (((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)) / radius)));
                }
                else{
                    length = -(((Math.PI * radius) / 180) * Math.asin(1-(Math.abs(((canvas.height / 2 + radius * Math.sin(angle)) - canvas.height / 2)) / radius)));
                }
            }
        }else{
            length = -(Math.PI / 4);
        }
        return speed, length;
    }else{
        speed = Math.abs((60 * dop_Angle1) / (Math.PI));
        if ((canvas.width * (3/6) + radius * Math.cos(angle)) < canvas.width * (3/6)){
            if (dop_Angle1 > 0){
                //мы идем по часовой по окружности
                if ((canvas.height / 2 + radius * Math.sin(angle1)) > canvas.height / 2) {
                    length = (((Math.PI * radius) / 180) * Math.asin(1-(Math.abs((canvas.width * (3/6) - (canvas.width * (3/6) + radius * Math.cos(angle1)))) / radius)));
                }
                else{
                    length = -(((Math.PI * radius) / 180) * Math.asin(1-(Math.abs((canvas.width * (3/6) - (canvas.width * (3/6) + radius * Math.cos(angle1)))) / radius)));
                }
            }
            else{
                //идем против часовой по окружности
                if ((canvas.height / 2 + radius * Math.sin(angle1)) < canvas.height / 2){
                    length = -(((Math.PI * radius) / 180) * Math.asin(1-(Math.abs((canvas.width * (3/6) - (canvas.width * (3/6) + radius * Math.cos(angle1)))) / radius)));
                }
                else{
                    length = (((Math.PI * radius) / 180) * Math.asin(1-(Math.abs((canvas.width * (3/6) - (canvas.width * (3/6) + radius * Math.cos(angle1)))) / radius)));
                }
            }
        }else{
            length = -(Math.PI / 4);
        }
        return speed, length;
    }
    time = length / speed;
    return time;
    //время в секундах
}



function startTest() {
    const num = getRandomInt(1, 4);
    if (num === 1){
        dop_Angle = Math.PI * ((getRandomInt(-50, 50))/1000);
        dop_Angle1 = 0;
        dop_Angle2 = 0;
    }else if (num === 2){
        dop_Angle1 = Math.PI * ((getRandomInt(-50, 50))/1000);
        dop_Angle = 0;
        dop_Angle2 = 0;
    }else{
        dop_Angle2 = Math.PI * ((getRandomInt(-50, 50))/1000);
        dop_Angle = 0;
        dop_Angle1 = 0;
    }
    continueAnimating = true;
    requestAnimationFrame(tick);
    timer = true;
    counter++;
    console.log("Counter = " + counter);
}        


function restartTest() {
    timer = false;
    continueAnimating = false;
}


function isKeyPressedAndCounterNotZero(event){
    if (dop_Angle !== 0){
        return event.keyCode === 37;
    }else if (dop_Angle1 !== 0){
        return event.keyCode === 38;
    }else {
        return event.keyCode === 39;
    }
}


function doTest(){
    if (counter < amount){
        restartTest();
        const clr = setTimeout(startTest, getRandomInt(1, 5) * 1000);
        results.push(checkTime());
        console.log(results);
    }
    else {
        timer = false;
        continueAnimating = false;
        results.push(checkTime());
        console.log(results);
    }
}


startBtn.addEventListener('keydown', function (event){
    if (isKeyPressedAndCounterNotZero(event)){ 
        if (counter !==0 && timer === true)
            doTest();
    }else {
        if (counter !== 0 && timer === true){
            doTest();
            incorrectAnswer ++;
            console.log(incorrectAnswer);
        }
    }
})


startBtn.addEventListener('click', function () {
    if (counter === 0) {
        const clr = setTimeout(startTest, getRandomInt(1, 5) * 1000);
    }
});