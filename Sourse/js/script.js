const questions = [
    {
        question: "Что такое HTML?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Как объявить переменную в JavaScript?",
        options: ["let myVar = 1;", "variable myVar = 1;", "var myVar = 1;", "const myVar = 1;"],
        correctAnswer: 2
    },
    {
        question: "Что делает CSS?",
        options: ["Управляет структурой страницы", "Определяет стиль и внешний вид элементов", "Выполняет вычисления на сервере", "Создает анимации и графику"],
        correctAnswer: 1
    },
    {
        question: "Что такое оператор 'typeof' в JavaScript?",
        options: ["Определяет тип переменной", "Определяет размер переменной", "Определяет значение переменной", "Определяет сумму переменных"],
        correctAnswer: 0
    },
    {
        question: "Что такое массив в программировании?",
        options: ["Список элементов", "Переменная", "Функция", "Множество чисел"],
        correctAnswer: 0
    },
    {
        question: "Что означает аббревиатура 'HTTP'?",
        options: ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hypertext Transfer Page", "Highway Traffic Transfer Protocol"],
        correctAnswer: 0
    },
    {
        question: "Что такое 'рекурсия' в программировании?",
        options: ["Процесс, когда функция вызывает саму себя", "Процесс, когда функция вызывает другую функцию", "Процесс, когда функция вызывает системную функцию", "Процесс, когда функция вызывает функцию из сторонней библиотеки"],
        correctAnswer: 0
    },
    {
        question: "Какая функция используется для вывода текста в консоль в JavaScript?",
        options: ["print()", "console.log()", "output()", "displayMessage()"],
        correctAnswer: 1
    },
    {
        question: "Что такое 'цикл' в программировании?",
        options: ["Библиотека", "Структура данных", "Конструкция для выполнения повторяющихся действий", "Коллекция элементов"],
        correctAnswer: 2
    },
    {
        question: "Какая операция выполняет оператор '===' в JavaScript?",
        options: ["Проверяет на равенство значений", "Проверяет на равенство значений и типов", "Проверяет на больше или меньше", "Проверяет на наличие значения"],
        correctAnswer: 1
    },
    {
        question: "Что такое 'интерфейс' в контексте объектно-ориентированного программирования?",
        options: ["Класс", "Служебная функция", "Описывает методы и свойства объекта", "Сеттер и геттер"],
        correctAnswer: 2
    },
    {
        question: "Что такое 'SQL'?",
        options: ["Язык программирования", "Система управления базами данных", "Язык структурированных запросов", "Система контроля версий"],
        correctAnswer: 2
    },
    {
        question: "Какой символ используется для обозначения комментариев в JavaScript?",
        options: ["//", "/* */", "##", "--"],
        correctAnswer: 0
    },
    {
        question: "Что такое 'API'?",
        options: ["Компьютерный вирус", "Интерфейс приложения", "Служба доставки пиццы"],
        correctAnswer: 1
    },
    {
        question: "Какой оператор используется для объединения строк в JavaScript?",
        options: ["+", "&", "||", "$$"],
        correctAnswer: 0
    },
    {
        question: "Что означает 'DOM' в веб-разработке?",
        options: ["Древо объектов документа", "Стиль элемента", "Язык разметки документа", "Digital Object Model"],
        correctAnswer: 0
    },
    {
        question: "Какая функция используется для преобразования строки в число в JavaScript?",
        options: ["convertToNumber()", "parseInt()", "stringToNumber()"],
        correctAnswer: 1
    },
    {
        question: "Что такое 'URL'?",
        options: ["Ссылка на страницу", "Утилита для чтения файлов", "Служба обновления операционной системы", "Uniform Resource Locator"],
        correctAnswer: 0
    },
    {
        question: "Какой символ используется для обозначения начала комментария в CSS?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 1
    },
    {
        question: "Что такое 'регулярное выражение' в программировании?",
        options: ["Структура данных", "Инструмент для поиска и обработки текста", "Специальная функция", "Список элементов"],
        correctAnswer: 1
    },
];


let currentQuestion = 0;
let score = 0;

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
