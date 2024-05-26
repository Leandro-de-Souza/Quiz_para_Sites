// Declaração de variáveis

const question = document.querySelector("#question");

const answersBox = document.querySelector("#answers-box");

const quizzContainer = document.querySelector("#quizz-container");

const scoreContainer = document.querySelector("#score-container");

const letters = ["a", "b", "c", "d", "e"];

let points = 0;

let actualQuestion = 0;

// Perguntas

const questions = [
    {
      "question": "Em qual revista lançada em 1938, o Superman estreou nos quadrinhos ?",
      "answers": [
        {
          "answer": "Action Comics nº1",
          "correct": true
        },
        {
          "answer": "DC Adventures nº1",
          "correct": false
        },
        {
          "answer": "The Adventures of Superman nº1",
          "correct": false
        },
        {
          "answer": "The World of Krypton nº1",
          "correct": false
        },
        {
          "answer": "Superman nº1, é óbvio",
          "correct": false
        },
      ]
    },
    {
      "question": "A Terra e seus Lanternas Verdes estão vinculados a qual setor do espaço ?",
      "answers": [
        {
          "answer": "2245",
          "correct": false
        },
        {
          "answer": "2814",
          "correct": true
        },
        {
          "answer": "2326",
          "correct": false
        },
        {
          "answer": "2151",
          "correct": false
        },
        {
          "answer": "2692",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual mini-série clássica dos anos 80, traz o Batman retornando da aposentadoria aos 55 anos de idade para combater o crime ?",
      "answers": [
        {
          "answer": "Batman: A Piada Mortal",
          "correct": false
        },
        {
          "answer": "Batman do Futuro",
          "correct": false
        },
        {
          "answer": "Batman: O Messias",
          "correct": false
        },
        {
          "answer": "Batman: Ego",
          "correct": false
        },
        {
          "answer": "Batman: O Cavaleiro das Trevas",
          "correct": true
        },
      ]
    },
    {
      "question": "A ilha de Themyscira, lar da Mulher-Maravilha, também é conhecida como:",
      "answers": [
        {
          "answer": "Ilha das Mulheres Guerreiras",
          "correct": false
        },
        {
          "answer": "Ilha Novo Olimpo",
          "correct": false
        },
        {
          "answer": "Ilha Paraíso",
          "correct": true
        },
        {
          "answer": "Ilha Esquecida",
          "correct": false
        },
        {
          "answer": "Ilha Utopia",
          "correct": false
        },
      ]
    },
    {
      "question": "De onde sai o uniforme do Barry Allen quando ele precisa se transformar no Flash ?",
      "answers": [
        {
          "answer": "De um portal interdimencional.",
          "correct": false
        },
        {
          "answer": "De uma dobra no tempo.",
          "correct": false
        },
        {
          "answer": "Da força do pensamento.",
          "correct": false
        },
        {
          "answer": "De seu anel.",
          "correct": true
        },
        {
          "answer": "O uniforme está sempre por baixo de suas roupas civis.",
          "correct": false
        },
      ]
    },
    {
      "question": "Hoje, Helena Bertinelli é a Caçadora. Mas quando foi criada, em 1977, a identidade secreta da heroína era:",
      "answers": [
        {
          "answer": "Helena Gordon",
          "correct": false
        },
        {
          "answer": "Helena Dent",
          "correct": false
        },
        {
          "answer": "Helena Grayson",
          "correct": false
        },
        {
          "answer": "Helena Wayne",
          "correct": true
        },
        {
          "answer": "Helena Nigma",
          "correct": false
        },
      ]
    },
    {
      "question": "Quais personagens atendem ou já atenderam pelo nome de Capuz Vermelho ?",
      "answers": [
        {
          "answer": "Dick Grayson e Ra's al Ghul",
          "correct": false
        },
        {
          "answer": "Jason Todd e Coringa",
          "correct": true
        },
        {
          "answer": "Bárbara Gordon e Selina Kyle",
          "correct": false
        },
        {
          "answer": "Alfred Pennyworth e Harvey Dent",
          "correct": false
        },
        {
          "answer": "Harvey Bullock e Jean Paul Valley",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual das personagens abaixo é manipuladora das artes místicas ?",
      "answers": [
        {
          "answer": "Zatana Zatara",
          "correct": true
        },
        {
          "answer": "Doutora Luz",
          "correct": false
        },
        {
          "answer": "Vixen",
          "correct": false
        },
        {
          "answer": "Espinho Negro",
          "correct": false
        },
        {
          "answer": "Canário Negro",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual desses planetas não faz parte do Universo DC ?",
      "answers": [
        {
          "answer": "OA",
          "correct": false
        },
        {
          "answer": "Thanagar",
          "correct": false
        },
        {
          "answer": "Apokolipse",
          "correct": false
        },
        {
          "answer": "Tamaran",
          "correct": false
        },
        {
          "answer": "Spartax",
          "correct": true
        },
      ]
    },
    {
      "question": "Dos nomes abaixo, qual nunca foi o de uma equipe de titãs ?",
      "answers": [
        {
          "answer": "Turma Titã",
          "correct": false
        },
        {
          "answer": "Jovens Titãs",
          "correct": false
        },
        {
          "answer": "Força Titã",
          "correct": true
        },
        {
          "answer": "Novos Titãs",
          "correct": false
        },
        {
          "answer": "Titãs",
          "correct": false
        },
      ]
    },
  ]  
  

// Substituição do quizz para a primeria pergunta
function init() {
  // criar a primeira pergunta
  createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i) {

  // Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere as alternativas
  questions[i].answers.forEach(function(answer, i) {

    // Cria o template do botão do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remover hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir a alternativa na tela
    answersBox.appendChild(answerTemplate);

    // Inserir um evento de click no botão
    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    });

  });

  // Incrementar o número da questão
  actualQuestion++;

}

// Verificando resposta do usuário
function checkAnswer(btn) {

  // selecionar todos botões
  const buttons = answersBox.querySelectorAll("button");

  // verifica se a resposta está correta e adiciona classes nos botões
  buttons.forEach(function(button) {

    if(button.getAttribute("correct-answer") === "true") {

      button.classList.add("correct-answer");

      // checa se o usuário acertou a pergunta
      if(btn === button) {
        // incremento dos pontos
        points++;
      }

    } else {

      button.classList.add("wrong-answer");

    }

  });

  // Exibir próxima pergunta
  nextQuestion();

}

// Exibie a próxima pergunta no quizz
function nextQuestion() {

  // timer para usuário ver as respostas
  setTimeout(function() {

    // verifica se ainda há perguntas
    if(actualQuestion >= questions.length) {
      // apresenta a msg de sucesso
      showSucccessMessage();
      return;
    }

    createQuestion(actualQuestion);

  }, 4000);

}

// Exibe a tela final
function showSucccessMessage() {

  hideOrShowQuizz();

  // trocar dados da tela de sucesso

  // calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // alterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

// Mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {

  // zerar o jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();

});

// Inicialização do Quizz
init();