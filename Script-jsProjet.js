let score = 0;
let currentLevel = 1;
const questions = [
    {
        question:"Quelle est la capitale de la france?",
        answer: ["Hydrogène","Oxygène","Azote","Carbone"],
        correcteAnswer: 0
    }
];

function showQuestion() {

    const container = document.getElementById("question-container");
    if (!container) return;
    if (currentLevel > questions.length) {
        container.innerHTML ="<p>Votre score:" + score + "/" + questions.length +"</p>";
        return;
    }
    const q = question[currentLevel - 1];
    let html = "<p>"+ q.question  +"</p>";
    q.answer.forEach((ans,i) =>{
        html += '<button onclick="chec'
    }
)
}