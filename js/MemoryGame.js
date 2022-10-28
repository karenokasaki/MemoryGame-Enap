// CLASSE

class MemoryGame {
  constructor() {
    this.player = "";
    this.points = 5;
    this.deck = [
      "./assets/harmonia.svg",
      "./assets/poder.svg",
      "./assets/projetar.svg",
      "./assets/refletir.svg",
      "./assets/harmonia.svg",
      "./assets/poder.svg",
      "./assets/projetar.svg",
      "./assets/refletir.svg",
    ];
    this.selectedCards = [];
  }

  renderDeck() {
    //randomizar o deck ->> EMBARALHAR -> shufle
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });

    console.log(this.deck);

    //capturar o board
    const board = document.getElementById("board");

    //iterar pela array do deck e criar as minhas cartas
    this.deck.forEach((element) => {
      const imgFront = document.createElement("img"); // <img />
      imgFront.src = element; // <img src="./assets/refletir.svg" />
      imgFront.className = "hide cardFront";

      const imgBack = document.createElement("img"); // <img />
      imgBack.src = "./assets/fe.svg"; //<img src="./assets/fe.svg" />
      imgBack.className = "show cardBack";

      board.appendChild(imgFront);
      board.appendChild(imgBack);
    });
  }

  flipCard(card) {
    this.selectedCards.push(card);

    if (this.selectedCards.length === 2) {
      console.log("Duas cartas foram viradas. Vamos compara-las");
      this.checkPair();
    }
  }

  checkPair() {
    console.log(this.selectedCards);
    if (this.selectedCards[0].src === this.selectedCards[1].src) {
      console.log("Cartas são iguais!!");
      // criar um indicador de que as cartas já foram viradas
      this.selectedCards[0].classList.add("turn");
      this.selectedCards[1].classList.add("turn");

      // limpar a minha array de cartas selecionadas
      this.selectedCards = [];

      // checar o status do jogo
      this.checkStatus();
    } else {
      console.log("Cartas são diferentes!");
      // remover ponto do jogador
      this.points--;

      // desvirar as duas cartas
      setTimeout(() => {
        console.log("Fechando as cartas selecionadas");

        //esconder as cartas que estão abertas!!
        this.selectedCards[0].className = "hide cardFront";
        this.selectedCards[1].className = "hide cardFront";

        //mostrando os cards-back
        this.selectedCards[0].nextElementSibling.className = "show cardBack";
        this.selectedCards[1].nextElementSibling.className = "show cardBack";

        //limpando a minha array de cartas selecionadas
        this.selectedCards = [];

        //checar o status do jogo
        this.checkStatus();
      }, 1500);
    }
  }

  checkStatus() {
    // checar o status do jogo
    console.log(
      "Checando se o jogador ainda tem pontos OU se ele venceu o jogo!!"
    );
    // se o jogador ainda tem pontos -> perdeu
    if (this.points === 0) {
      console.log("Você perdeu por pontos");
      alert(`${this.player}, você não tem mais pontos! Tente novamente`);

      const board = document.querySelector("#board");
      board.classList.add("hide");
    }

    // ainda existem cartas para serem viradas -> ganhou
    const cardsTurn = document.querySelectorAll(".turn");
    if (cardsTurn.length === this.deck.length) {
      console.log("Venceu!!");
      alert(`${this.player} você venceu!!`);
    }
  }
}
