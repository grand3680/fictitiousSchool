import "../style.scss";
import questions from './questions.json';
import config from "./selectors";

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
        config.userInfo = {
            "Name" : Name,
            "Second-Name" : SecondName,
            "Class" : Class,
        }
        Logins.classList.add("hidden");
        resetQuestion(questions)        

        for (let [key, value] of Object.entries(config.userInfo)) {
            userName.textContent += `${value} `; // name:John, затем age:30
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

// config.resetQuestion.addEventListener("click", () => resetQuestion(questions));
config.nextButton.addEventListener("click", () => showQuestion(questions));
config.questionsButton.addEventListener("click", () => config.result_questions.classList.remove("hidden"));

// showQuestion(questions);
