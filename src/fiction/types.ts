export interface conf {
    "currentQuestion"  : number,
    "score"            : number,
    "quizContainer"    : any | null,
    "optionsList"      : any | null,
    "questionText"     : any | null,
    "nextButton"       : any | null,
    "resultContainer"  : any | null,
    "resultText"       : any | null,
    "countQuestion"    : any | null,
    "resetQuestionBtw" : any | null
}

export interface question {
    "question": String,
    "options": String[],
    "correctAnswer": number
}