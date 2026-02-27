function login() {
    window.location.href = "quiz.html";
}
const questions = [{
        id: 1,
        question: "What is 5 + 5?",
        options: ["8", "10", "12", "15"],
        answer: "10",
        topic: "Arithmetic",
        difficulty: 1
    },
    {
        id: 2,
        question: "Solve: 2x = 10",
        options: ["2", "5", "10", "20"],
        answer: "5",
        topic: "Algebra",
        difficulty: 2
    }
];
let difficulty = 2; // start medium
let filtered = questions.filter(q => q.difficulty === difficulty);
let performance = {
    Arithmetic: { correct: 0, total: 0 },
    Algebra: { correct: 0, total: 0 }
};
let correctStreak = 0;
let wrongStreak = 0;

function updateDifficulty(isCorrect) {
    if (isCorrect) {
        correctStreak++;
        wrongStreak = 0;
    } else {
        wrongStreak++;
        correctStreak = 0;
    }

    if (correctStreak >= 2 && difficulty < 3) {
        difficulty++;
        correctStreak = 0;
    }

    if (wrongStreak >= 2 && difficulty > 1) {
        difficulty--;
        wrongStreak = 0;
    }
}