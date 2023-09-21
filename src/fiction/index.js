import "../style.css";
import questions from './questions.json';
import {config} from "./selectors";


let currentQuestion = 0; 
let score = 0; // кол-во правильных ответов


// показывает вопросы, берёт currentIndex от вопросов
function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        config.questionText.textContent = question.question;
        config.optionsList.innerHTML = "";
        question.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.dataset.index = index;
            config.optionsList.appendChild(li);
        });
        currentQuestion++;
		config.countQuestion.textContent = `${currentQuestion} из ${questions.length} вопросов`;
    } else {
        showResult();
    }
}


// показывает результат
function showResult() {
    config.quizContainer.style.display = "none";
    config.resultContainer.style.display = "block";
    config.resultText.textContent = `Ваш результат: ${score} из ${questions.length} правильных ответов.`;
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
