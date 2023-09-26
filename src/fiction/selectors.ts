import {conf} from "./types"

var quizContainer   = document.getElementById("quiz-container");
var optionsList     = document.getElementById("options-list");
var questionText    = document.getElementById("question-text");
var nextButton      = document.getElementById("next-button");
var resultContainer = document.getElementById("result-container");
var resultText      = document.getElementById("result-text");
var countQuestion   = document.getElementById("countQuestion");
var resetQuestion   = document.getElementById("resetQuestion");


var config : conf = {
    "currentQuestion"  : 0,
    "score"            : 0,
    "quizContainer"    : quizContainer,
    "optionsList"      : optionsList,
    "questionText"     : questionText,
    "nextButton"       : nextButton,
    "resultContainer"  : resultContainer,
    "resultText"       : resultText,
    "countQuestion"    : countQuestion,
    "resetQuestionBtw" : resetQuestion
}

export default config;