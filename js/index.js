// MANIPULAÇÃO DO DOM
//instanciar a minha classe
const game = new MemoryGame();

//capturando todos os elementos de html
const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const points = document.getElementById("points");
const board = document.getElementById("board");
const btnStart = document.getElementById("btnStart");

//adicionar o event listener no btnStart
btnStart.addEventListener("click", () => {
  // startScreen desapareça
  startScreen.classList.add("hide");
  // mostrar o gameScore
  gameScore.className = "show";

  game.player = inputName.value; //setando o nome do jogador na minha classe
  points.innerText = game.points; // setando o numero de tentativos no meu html
  playerName.innerText = game.player; // setando o nome do jogador no meu html

  game.renderDeck();

  settingUpGame();
});

function settingUpGame() {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  const allCardsBack = document.querySelectorAll(".cardBack");

  allCardsBack.forEach((cardBack) => {
    cardBack.addEventListener("click", () => {
      //o que acontece quando a carta é clicada

      const cardFront = cardBack.previousElementSibling;

      //mostra a carta da frente
      cardFront.className = "show cardFront";

      //esconde a carta de trás (carta verde)
      cardBack.className = "hide cardBack";

      game.flipCard(cardFront);
    });
  });
}
