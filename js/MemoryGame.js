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
        console.log("Cartas são iguais!!")
        // criar um indicador de que as cartas já foram viradas
        // limpar a minha array de cartas selecionadas
        // checar o status do jogo
    } else {
        console.log("Cartas são diferentes!")
        // remover ponto do jogador
        // desvirar as duas cartas
        // limpar a minha array de cartas selecionadas
        //checar o status do jogo 
    }
  }

  checkStatus() {
    // checar o status do jogo 
    // se o jogador ainda tem pontos
    // ainda existem cartas para serem viradas 
    
  }
}
