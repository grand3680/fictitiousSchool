import "../style.css";
import questionses from './questions.json'

const questions = questionses;

let currentQuestion = 0; 
let score = 0; // кол-во правильных ответов

const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const countQuestion = document.getElementById("countQuestion");


// показывает вопросы, берёт currentIndex от вопросов
function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionText.textContent = question.question;
        optionsList.innerHTML = "";
        question.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.dataset.index = index;
            optionsList.appendChild(li);
        });
        currentQuestion++;
		countQuestion.textContent = `${currentQuestion} из ${questions.length} вопросов`;
    } else {
        showResult();
    }
}


// показывает результат
function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = `Ваш результат: ${score} из ${questions.length} правильных ответов.`;
}

// проверяет ответ по индексу
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion - 1];
    if (question.correctAnswer === selectedIndex) score++;
    
}

// ставит ивент слушатель, и изымает dataset.index от элемента на который нажали
optionsList.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        const selectedIndex = parseInt(event.target.dataset.index);
        checkAnswer(selectedIndex);
        showQuestion();
    }
});

nextButton.addEventListener("click", showQuestion);

showQuestion();
