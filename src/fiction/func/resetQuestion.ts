import config from "../selectors";
import {question} from "../types";
import showQuestion from "./showQuestion";

// показывает результат
function resetQuestion(questions : question[]) {
    config.quizContainer.style.display = "block";
    config.resultContainer.style.display = "none";
    config.currentQuestion = 0;
    config.score = 0;

    showQuestion(questions);
}
export default resetQuestion;