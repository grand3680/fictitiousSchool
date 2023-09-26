import "../style.scss";
import questions from './questions.json';
import config from "./selectors";

import showQuestion from "./func/showQuestion";
import resetQuestion from "./func/resetQuestion";


// проверяет ответ по индексу
function checkAnswer(selectedIndex) {
    const question = questions[config.currentQuestion - 1];
    if (question.correctAnswer === selectedIndex) config.score++;
}

// ставит ивент слушатель, и изымает dataset.index от элемента на который нажали
config.optionsList.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        const selectedIndex = parseInt(event.target.dataset.index);
        checkAnswer(selectedIndex);
        showQuestion(questions);
    }
});

config.resetQuestionBtw.addEventListener("click", () => resetQuestion(questions));
config.nextButton.addEventListener("click", () => showQuestion(questions));

showQuestion(questions);
