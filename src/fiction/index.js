import "../style.css";
import questions from './questions.json';
import {config} from "./selectors";


let currentQuestion = 0; // текущий вопрос
let score = 0; // кол-во правильных ответов

config.resetQuestionBtw.addEventListener("click", () => {
    resetQuestion();
})

// показывает вопросы, берёт currentIndex от вопросов
function showQuestion() {
    // Показывает результат если кол-во вопросов закончилось
    if (currentQuestion >= questions.length) showResult();

    const question = questions[currentQuestion]; // текущий вопрос
    config.questionText.textContent = question.question; // заголовок
    config.optionsList.innerHTML = "";

    // создаёт элемент Li и в Dataser ложит индекс
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.dataset.index = index;
        config.optionsList.appendChild(li);
    });
    currentQuestion++;
    config.countQuestion.textContent = `${currentQuestion} из ${questions.length} вопросов`;
}

// показывает результат
function showResult() {
    config.quizContainer.style.display = "none";
    config.resultContainer.style.display = "block";
    config.resultText.textContent = `Ваш результат: ${score} из ${questions.length} правильных ответов.`;
}

// показывает результат
function resetQuestion() {
    config.quizContainer.style.display = "block";
    config.resultContainer.style.display = "none";
    currentQuestion = 0;
    score = 0;

    showQuestion();
}

// проверяет ответ по индексу
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion - 1];
    if (question.correctAnswer === selectedIndex) score++;
}

// ставит ивент слушатель, и изымает dataset.index от элемента на который нажали
config.optionsList.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        const selectedIndex = parseInt(event.target.dataset.index);
        checkAnswer(selectedIndex);
        showQuestion();
    }
});

config.nextButton.addEventListener("click", showQuestion);

showQuestion();
