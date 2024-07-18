let currentQuestion = 0;
let score = 0;
let userAnswers = {};

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
  renderScore();

  document
    .getElementById("next-question")
    .addEventListener("click", nextQuestion);
  document
    .getElementById("preview-question")
    .addEventListener("click", previewQuestion);
});

function renderQuestion() {
  const quizSection = document.querySelector(".quiz");
  quizSection.innerHTML = "";

  const question = questions[currentQuestion];

  const questionElement = document.createElement("div");

  questionElement.innerHTML = `
    <p>${currentQuestion + 1} - ${question.text}</p>
    <ul>
        ${question.options
          .map(
            (option, index) =>
              `
                 <li>
                    <button class="option-button" data-index="${index}" data-correct="${
                option.correct
              }" ${userAnswers[currentQuestion] != null ? "disabled" : ""}>${
                option.option
              }</button>
                </li>
                `
          )
          .join("")}
    </ul>
  `;
  quizSection.appendChild(questionElement);

  const optionButtons = document.querySelectorAll(".option-button");
  optionButtons.forEach((button) => {
    button.addEventListener("click", selectedOption);

    // Marcar a resposta selecionada
    let optionIndex = button.getAttribute("data-index");
    if (userAnswers[currentQuestion] != null) {
      if (userAnswers[currentQuestion] == optionIndex) {
        let isCorrect = button.getAttribute("data-correct");
        if (isCorrect === "true") {
          button.classList.add("correct-option");
        } else {
          button.classList.add("incorrect-option");

          // Encontrar e destacar a resposta correta
          const correctButton = quizSection.querySelector(
            `.option-button[data-correct="true"]`
          );
          if (correctButton) {
            correctButton.classList.add("correct-option");
          }
        }
      }
      button.disabled = true; // Desabilitar o botão se já foi selecionado
    }
  });

  // Desabilita o botão "Preview Question" se for a primeira pergunta
  document.getElementById("preview-question").disabled = currentQuestion === 0;
}

function renderScore() {
  const scoreView = document.getElementById("score");
  scoreView.innerHTML = `${score}/${questions.length}`;
}

function selectedOption(e) {
  let selected = e.target;
  let isCorrect = selected.getAttribute("data-correct");

  // Salvar resposta do usuário
  userAnswers[currentQuestion] = selected.getAttribute("data-index");

  if (isCorrect === "true") {
    score++;
    selected.classList.add("correct-option");
  } else {
    selected.classList.add("incorrect-option");

    // Encontrar e destacar a resposta correta
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach((button) => {
      if (button.getAttribute("data-correct") === "true") {
        button.classList.add("correct-option");
      }
    });
  }

  // Desabilitar todos os botões de opção após uma escolha
  const optionButtons = document.querySelectorAll(".option-button");
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  renderScore();
}

function nextQuestion() {
  if (currentQuestion + 1 <= questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    // Desabilita o botão "Next Question" se for a última pergunta
    document.getElementById("next-question").disabled = true;
  }
}

function previewQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
    // Habilita o botão "Next Question" se não for a última pergunta
    document.getElementById("next-question").disabled = false;
  }
}

function reloadQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = {};
  renderQuestion();
  renderScore();
  document.getElementById("next-question").disabled = false;
}
const buttonReload = document.querySelector("#reload-quiz");
buttonReload.addEventListener("click", reloadQuiz);
