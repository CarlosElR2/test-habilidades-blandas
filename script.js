// Preguntas del test
const preguntas = [
    "Soy comprometido a mi trabajo",
    "Manejo el estrés fácilmente",
    "No me preocupa el futuro",
    "Pienso que pedir ayuda es esencial",
    "Es más probable que diga que sí que no",
    "Puedo pedir fácilmente ayuda a mis compañeros",
    "No me preocupo por problemas que no puedo manejar",
    "Puedo adaptar fácilmente mi manera de pensar al cambio",
    "Puedo recurrir a mis compañeros por cosas relacionadas al trabajo",
    "Puedo hablar fácilmente de mi trabajo a mis amigos y familia",
    "Recuerdo triunfos más que fracasos",
    "Me siento confiado que voy a triunfar en una actividad nueva",
    "No pierdo la confianza en mí mismo cuando algo no sale como lo planee",
    "Mantengo mis metas en mente y continuo cuando confronto una situación difícil",
    "Aprendo de fracasos y uso un enfoque diferente la próxima vez"
];

// Respuestas usuario
let respuestasUsuario = [];

// Elementos del DOM
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Función para mostrar el test
function mostrarTest() {
    main.innerHTML = '';
    preguntas.forEach((pregunta, index) => {
        const div = document.createElement('div');
        div.classList.add('question');
        div.innerHTML = `
            <p>${index + 1}. ${pregunta}</p>
            <label><input type="radio" name="pregunta${index}" value="a"> Siempre</label>
            <label><input type="radio" name="pregunta${index}" value="b"> A veces</label>
            <label><input type="radio" name="pregunta${index}" value="c"> Nunca</label>
        `;
        main.appendChild(div);
    });

    const botonEnviar = document.createElement('button');
    botonEnviar.textContent = 'Enviar respuestas';
    botonEnviar.addEventListener('click', calcularResultados);
    footer.innerHTML = '';
    footer.appendChild(botonEnviar);
}

// Función para calcular resultados
function calcularResultados() {
    respuestasUsuario = [];
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        respuestasUsuario.push(input.value);
    });

    let puntaje_a = 0;
    let puntaje_b = 0;
    let puntaje_c = 0;
    respuestasUsuario.forEach(respuesta => {
        if (respuesta === 'a') {
            puntaje_a += 3;
        } else if (respuesta === 'b') {
            puntaje_b += 2;
        } else if (respuesta === 'c') {
            puntaje_c++;
        }
    });

    const puntajefin = puntaje_a + puntaje_b + puntaje_c;

    let mensaje = '';
    if (puntajefin >= 31) {
        mensaje = "Felicidades, eres muy resiliente! El cambio no te afecta porque siempre eres positivo, ingenioso y abierto a aprender y tomar nuevos desafíos.";
    } else if (puntajefin >= 16) {
        mensaje = "Puedes adaptarte bien al cambio! Para dominar la adaptabilidad, piensa cuidadosamente si has considerado la mayoría de las nuevas situaciones y aplicar las estrategias necesarias para aceptar el cambio efectivamente.";
    } else {
        mensaje = "Necesitas mejorar tu capacidad de adaptación. De alguna manera aún resistes el cambio. Podría ser porque eres inestable de lo que podría traer. Aplica los tips previamente mencionados. No será fácil pero vale el esfuerzo.";
    }

    main.innerHTML = `
        <h2>Resultados:</h2>
        <p>Puntaje total: ${puntajefin}/45</p>
        <p>${mensaje}</p>
    `;
    footer.innerHTML = '';
}

// Mostrar el test al cargar la página
mostrarTest();