let okno = document.getElementById('okno');
let startBtn = document.getElementById('start');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let line = document.getElementById('line');

function fill(n, line) {
    line.style.backgroundImage = `linear-gradient(90deg, #444444 ${
      100 - n
    }%, #ffffff ${100 - n}%)`;
}

const questions = [
    {
        text: 'Вопрос 1',
        options: ['Ответ', 'Ответ', 'Ответ', 'Ответ'],
        correctButton: 4
    },
    {
        text: 'Вопрос 2',
        options: ['Ответ', 'Ответ', 'Ответ', 'Ответ'],
        correctButton: 2
    },
    {
        text: 'Вопрос 3',
        options: ['Ответ', 'Ответ', 'Ответ', 'Ответ'],
        correctButton: 3
    },
    // Потом добавить остальные вопросы
];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var arr = [];
for (var i = 0; i < 3; i++)
    arr.push(i);
shuffle(arr);
console.log(arr);
var index = 0;
counter = arr.length;

function displayQuestion() {
    var randomIndex = arr[index];

    if (index != arr.length) {
        const text = questions[randomIndex];

        okno.innerText = text.text;
        option1.innerText = text.options[0];
        option2.innerText = text.options[1];
        option3.innerText = text.options[2];
        option4.innerText = text.options[3];

        index++;
        counter --;
        fill((counter)*(100/(arr.length)), line);
        console.log(randomIndex, index);
    }
    return randomIndex;
}

function checkAnswer(event) {
    const buttonId = event.target.id;
    const correctButton = questions[displayQuestion.currentIndex].correctButton;
    console.log(displayQuestion.currentIndex, correctButton, `option${correctButton}`, buttonId);
    if (buttonId === `option${correctButton}`) {
        console.log('Правильный ответ!');
    } else {
        console.log('Неправильный ответ!');
    }
}

option1.addEventListener('click', checkAnswer);
option2.addEventListener('click', checkAnswer);
option3.addEventListener('click', checkAnswer);
option4.addEventListener('click', checkAnswer);

startBtn.addEventListener('click', function () {
    displayQuestion.currentIndex = displayQuestion();
})

