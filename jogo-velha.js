// http://127.0.0.1:5500/iniciante-em-programacao-2022/
const X = "X";
const O = "O";


let player = marcarJogadorAtivo;

function reiniciarJogo() {
    document. location. reload()
}

function selecionarArea(posicaoLinha, posicaoColuna) {
console.log("Chamando a função");
console.log(posicaoLinha, posicaoColuna)

 desenharSimbolo(X, posicaoLinha,posicaoColuna)
 desenharSimbolo(O, posicaoLinha,posicaoColuna)
}

