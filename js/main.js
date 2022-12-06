// Test your Might- JavaScript Quiz Application
const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit-btn');
let currentQuiz = 0;
let score = 0;
const quizData = [{
        question: 'Where do you write JavaScript?',
        a: 'in the JS file',
        b: 'in the CSS file',
        c: 'in the HTML file',
        d: 'in the JSX file',
        correct: 'a'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<script>',
        b: '<scripting>',
        c: '<js>',
        d: '<javascript>',
        correct: 'a'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        a: 'The <body> section',
        b: 'Both the <head> section and the <body> section are correct',
        c: 'The <head> section',
        d: 'none of the above',
        correct: 'b'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        a: 'msg("Hello World");',
        b: 'alertBox("Hello World");',
        c: 'alertMsg("Hello World");',
        d: 'alert("Hello World");',
        correct: 'd'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i=5',
        b: 'if i==5 then',
        c: 'if i=5 then',
        d: 'if (i==5)',
        correct: 'd'
    },
];

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function getSelected() {
    let answer = null;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <h1>You answered correctly ${score}/${quizData.length} questions</h1>
        <button class="btn green" onclick="location.reload()">Try again</button>
        `;
    }
})