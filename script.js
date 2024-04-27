const questions = [
    "Estoy comprometido con mi trabajo",
    "Manejo el estrés fácilmente",
    "No me preocupa mi futuro",
    "Pedir ayuda es esencial",
    "Es más probable que diga que sí a que diga que no",
    "Puedo pedir fácilmente ayuda a mis compañeros",
    "No me preocupo por problemas que no puedo manejar",
    "Puedo adaptar fácilmente mi manera de pensar al cambio",
    "Puedo recurrir a mis compañeros por cosas relacionadas al trabajo",
    "Puedo hablar fácilmente de mi trabajo/escuela a mis amigos y familia",
    "Recuerdo mis triunfos más que mis fracasos",
    "Me siento confiado que voy a triunfar en una actividad nueva",
    "No pierdo la confianza en mí mismo cuando algo no sale como lo planee",
    "Mantengo mis metas en mente aun en situaciones complicadas",
    "Aprendo de mis fracasos aplicando un enfoque diferente la próxima vez"
];

const answers = [
    "Siempre", "A veces", "Nunca"
];

let currentQuestion = 0;
let userAnswers = [];

function displayQuestion() {
    const testContainer = document.getElementById("test-container");
    testContainer.innerHTML = `
        <div class="question">${questions[currentQuestion]}</div>
        <div class="options">
            ${answers.map(answer => `
                <button class="option-btn" value="${answer}" onclick="selectAnswer('${answer}')">${answer}</button>
            `).join('')}
        </div>
        <button onclick="nextQuestion()">Siguiente</button>
    `;
}

function selectAnswer(selectedAnswer) {
    userAnswers.push(selectedAnswer);
    // Obtenemos todos los botones de las opciones
    const optionButtons = document.querySelectorAll('.option-btn');
    // Quitamos la clase 'selected' de todos los botones
    optionButtons.forEach(button => {
        button.classList.remove('selected');
    });
    // Agregamos la clase 'selected' al botón seleccionado
    const selectedButton = document.querySelector(`.option-btn[value="${selectedAnswer}"]`);
    selectedButton.classList.add('selected');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    const totalQuestions = questions.length;
    const correctAnswers = userAnswers.filter(answer => answer === 'Siempre').length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    let message;
    if (percentage >= 70) {
        message = "¡Felicidades, eres muy resiliente! El cambio no te afecta porque siempre eres positivo, ingenioso y abierto a aprender y tomar nuevos desafíos.";
    } else if (percentage >= 40) {
        message = "Puedes adaptarte bien al cambio, pero para dominar la adaptabilidad, piensa cuidadosamente si has considerado la mayoría de las nuevas situaciones y aplicar las estrategias necesarias.";
    } else {
        message = "Necesitas mejorar tu capacidad de adaptación. De alguna manera aún resistes el cambio.";
    }

    resultContainer.innerHTML = `
        <div class="result">${message}</div>
        <button onclick="restartTest()">Volver al inicio</button>
    `;
    resultContainer.style.display = "block";
}

function restartTest() {
    currentQuestion = 0;
    userAnswers = [];
    document.getElementById("result-container").style.display = "none";
    displayQuestion();
}

displayQuestion();
function nextQuestion() {
    const selectedAnswer = document.querySelector('button.option-btn.selected');
    if (!selectedAnswer) {
        alert("Por favor selecciona una opción.");
        return; // Detenemos la función si no hay opción seleccionada
    }
    
    userAnswers.push(selectedAnswer.value);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}
