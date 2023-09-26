import config from "../selectors";
import {question} from "../types";

// show result
function showResult (questions : question[]) : void {
    if (config.quizContainer == null || config.resultContainer == null || config.resultText == null) return;
    
    config.quizContainer.style.display = "none";
    config.resultContainer.style.display = "block";
    config.resultText.textContent = `Ваш результат: ${config.score} из ${questions.length} правильных ответов.`;
    console.log("testing");
}

export default showResult;