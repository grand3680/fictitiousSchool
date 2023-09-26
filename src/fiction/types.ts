export interface conf {
    "currentQuestion"  : number,
    "score"            : number,
    "saveQuestion"     : ShowQuestion[],
    "userInfo"?        : userInf,
    "quizContainer"    : any | null,
    "optionsList"      : any | null,
    "questionText"     : any | null,
    "nextButton"       : any | null,
    "resultContainer"  : any | null,
    "resultText"       : any | null,
    "countQuestion"    : any | null,
    "resetQuestion"    : any | null,
    "questionsButton"  : any | null,
    "result_questions" : any | null,
}

export interface question {
    "question": String,
    "options": String[],
    "correctAnswer": number
}

export interface ShowQuestion {
    "question": String,
    "options": String[],
    "correctAnswer": number,
    "yourAnswer"? : String
}

export interface userInf {
    "Name"? : string,
    "Second-Name"? : string,
    "Class"? : string,
}
