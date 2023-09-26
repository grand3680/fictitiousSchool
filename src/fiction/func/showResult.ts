import config from "../selectors";
import {question} from "../types";

// show result
function showResult (questions : question[]) : void {
    if (config.quizContainer == null || config.resultContainer == null || config.resultText == null) return;
    
    config.quizContainer.style.display = "none";
    config.resultContainer.style.display = "block";
    config.resultText.textContent = `Ваш результат: ${config.score} из ${questions.length} правильных ответов.`;

    for (let i = 0; i <= config.saveQuestion.length; i++) {
        const FRquestion : any = config.saveQuestion[i]; // текущий вопрос

        const h2 = document.createElement("h2");
        h2.textContent = FRquestion.question;
        h2.className = "correct";
        
        config.result_questions.appendChild(h2);

    
        // создаёт элемент Li и в Dataser ложит индекс
        FRquestion.options.forEach((option : any, index : any) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.dataset.index = index;


            if (index === FRquestion.yourAnswer) {
                if (FRquestion.correctAnswer === FRquestion.yourAnswer) {
                    li.className = "correct";
                } else {
                    li.className = "uncorrect";
                }
            }        
            if (FRquestion.correctAnswer == index) li.className = "correct";

            config.result_questions.appendChild(li);
        });
    }

    // config.saveQuestion
    console.table(config.saveQuestion);
}

export default showResult;