import {conf} from "./types"
import questions from "./questions.json"

var quizContainer    = document.getElementById("quiz-container");
var optionsList      = document.getElementById("options-list");
var questionText     = document.getElementById("question-text");
var nextButton       = document.getElementById("next-button");

var resultContainer  = document.getElementById("result-container");
var resultText       = document.getElementById("result-text");
var countQuestion    = document.getElementById("countQuestion");
var resetQuestion    = document.getElementById("resetQuestion");
var questions_button = document.getElementById("result-questions_button");
var result_questions = document.getElementById("result-questions");


var config : conf = {
    "currentQuestion"  : 0,
    "score"            : 0,

    "saveQuestion"     : questions,
    "quizContainer"    : quizContainer,
    "userInfo"         : {},

    "optionsList"      : optionsList,
    "questionText"     : questionText,
    "nextButton"       : nextButton,
    "resultContainer"  : resultContainer,

    "resultText"       : resultText,
    "countQuestion"    : countQuestion,
    "resetQuestion"    : resetQuestion,
    "questionsButton"  : questions_button,
    "result_questions" : result_questions
}

export default config;