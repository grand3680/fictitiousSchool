import "../style.scss";
import questions1 from './questions.json';
import config from "./selectors";
import { changeValueRandomly } from "./randomFunc"

function shuffleList(arr) {
for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}

const shuffledList = shuffleList(questions1);
var questions = shuffledList;


import showQuestion from "./func/showQuestion";
import resetQuestion from "./func/resetQuestion";

var Logins = document.getElementById("loginName");
var userName = document.getElementById("userLogins");

Logins.addEventListener('submit', function(event) {
    event.preventDefault();
    var Name = document.getElementById('FORMname').value;
    var SecondName = document.getElementById('FORMsecName').value;
    var Class = document.getElementById('FORMclass').value;

    if (Name && SecondName && Class) {
        resetQuestion(questions)        
        if (Name.toLowerCase().includes("женя") && SecondName.toLowerCase().includes("воеводов"))  {
            config.score = -20;
            Name = ";DDDD";
            document.body.classList.add("specious");
        }

        if (Name.includes("grand"))  {
            Name = "";
            config.currentQuestion = questions.length - 1;
            config.score = 1000000;
            showQuestion(questions);
            config.resultText.classList.add("grand2");
            changeValueRandomly(userName);
            document.body.classList.add("grand");
        }

        config.userInfo = {
            "Name" : Name,
            "Second-Name" : SecondName,
            "Class" : Class,
        }
        Logins.classList.add("hidden");

        for (let [key, value] of Object.entries(config.userInfo)) {
            userName.textContent += `${value} `;
        }
    }
});

// проверяет ответ по индексу
function checkAnswer(selectedIndex) {
    const question = questions[config.currentQuestion - 1];
    if (question.correctAnswer === selectedIndex) config.score++;
}

// ставит ивент слушатель, и изымает dataset.index от элемента на который нажали
config.optionsList.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        const selectedIndex = parseInt(event.target.dataset.index);
        var answer = config.saveQuestion[config.currentQuestion - 1];
        answer.yourAnswer = selectedIndex;

        checkAnswer(selectedIndex);
        showQuestion(questions);
    }
});

config.nextButton.addEventListener("click", () => showQuestion(questions));
config.questionsButton.addEventListener("click", () => config.result_questions.classList.remove("hidden"));