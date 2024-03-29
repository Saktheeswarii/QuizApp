const questions = [
    {
        question: "The brain of any computer system is",
        answers: [
            { text: "ALU", correct: false },
            { text: "Memory", correct: false },
            { text: "CPU", correct: true },
            { text: "Control unit", correct: false },
        ]
    },
    {
        question: "A computer program that converts assembly language to machine language is",
        answers: [
            { text: "Compiler", correct: false },
            { text: "Interpreter", correct: false },
            { text: "Comparator", correct: false },
            { text: "Assembler", correct: true },
        ]
    },
    {
        question: "A single packet on a data link is known as",
        answers: [
            { text: "Frame", correct: true },
            { text: "Path", correct: false },
            { text: "Block", correct: false },
            { text: "Group", correct: false },
        ]
    },
    {
        question: "Which method is used to connect a remote computer?",
        answers: [
            { text: "Device", correct: false },
            { text: "Dialup", correct: true },
            { text: "Diagnostic", correct: false },
            { text: "Logic circuit", correct: false },
        ]
    },
    {
        question: "Data that enhances the database's usability and performance are referred to as",
        answers: [
            { text: "Data Dictionary", correct: false },
            { text: "Indexes", correct: true },
            { text: "Application Meta Data", correct: false },
            { text: "User Data", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score-container");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    resetState();

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => {
            selectAnswer(answer.correct);
        });
        answerButtonElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.style.display = "none";
    answerButtonElement.style.display = "none";
    scoreContainer.innerHTML = `<h1 class="total-score">Your Total Score: <span>${score}</span></h1>`;
}

// Start the quiz when the page loads
startQuiz();
