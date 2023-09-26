import config from "../selectors";
import {question} from "../types";
import showResult from "./showResult";

var interval : any;
var isActive : boolean = false;
var time : number = 0;

let element : any = document.getElementById("timer-list");
var desp : string = "время на викторине в секундах";

function setName() : void {
    element.textContent = `${desp} - ${time}`;    
}


// показывает вопросы, берёт currentIndex от вопросов
function showQuestion(questions : question[]) : void {
    if (!isActive) {
        interval = setInterval(() => {
            time += 1;
            setName();
        }, 1000)
        
        interval;    
        isActive = true;
    }
    // Показывает результат если кол-во вопросов закончилось
    if (config.currentQuestion >= questions.length) {
        desp = "всего потратили на тест";
        clearInterval(interval);
        setName();
        showResult(questions);
    }

    const FRquestion = questions[config.currentQuestion]; // текущий вопрос
    config.questionText.textContent = FRquestion.question; // заголовок
    config.optionsList.innerHTML = "";

    // создаёт элемент Li и в Dataser ложит индекс
    FRquestion.options.forEach((option : any, index : any) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.dataset.index = index;
        config.optionsList.appendChild(li);
    });
    config.currentQuestion++;
    config.countQuestion.textContent = `${config.currentQuestion} из ${questions.length} вопросов`;
}

export default showQuestion;