const questions = [
    {
        question: "If you have 9 candies and eat 4, how many are left?",
        answer: [
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "3", correct: false },
        ]
    },
    {
        question: "What is 8 + 7?",
        answer: [
            { text: "14", correct: false },
            { text: "15", correct: true },
            { text: "16", correct: false },
            { text: "13", correct: false },
        ]
    },
    {
        question: "If you have 15 balloons and 6 burst, how many are left?",
        answer: [
            { text: "9", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "7", correct: false },
        ]
    },
    {
        question: "What is 11 - 5?",
        answer: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "4", correct: false },
        ]
    },
    {
        question: "If one box has 4 toys, how many toys are in 5 boxes?",
        answer: [
            { text: "20", correct: true },
            { text: "18", correct: false },
            { text: "16", correct: false },
            { text: "22", correct: false },
        ]
    },
    {
        question: "What is 6 × 3?",
        answer: [
            { text: "18", correct: true },
            { text: "16", correct: false },
            { text: "20", correct: false },
            { text: "15", correct: false },
        ]
    },
    {
        question: "If you have 5 bags with 6 marbles each, how many marbles do you have?",
        answer: [
            { text: "30", correct: true },
            { text: "28", correct: false },
            { text: "25", correct: false },
            { text: "32", correct: false },
        ]
    },
    {
        question: "What is 13 - 4?",
        answer: [
            { text: "8", correct: false },
            { text: "9", correct: true },
            { text: "10", correct: false },
            { text: "7", correct: false },
        ]
    },
    {
        question: "If you have 3 boxes with 9 chocolates each, how many chocolates do you have?",
        answer: [
            { text: "27", correct: true },
            { text: "24", correct: false },
            { text: "30", correct: false },
            { text: "21", correct: false },
        ]
    },
    {
        question: "What is 12 + 9?",
        answer: [
            { text: "20", correct: false },
            { text: "21", correct: true },
            { text: "22", correct: false },
            { text: "19", correct: false },
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("ans-buttons");
const nextButton =document.getElementById("next");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){ 
        resetState();   
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";                   
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function  handleNextButton(){
      currentQuestionIndex ++;
      if(currentQuestionIndex<questions.length){
        showQuestion();
      }else{
        showScore();
      }
}
nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();