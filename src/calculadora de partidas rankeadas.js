// Variáveis
let vitórias = 1000;
let derrotas = 0;
let Herói = "Thiago"

// função
function calcular() {
   let resultado =  vitórias - derrotas
return resultado
}

let rank = calcular()

function niveis() {
let nivel;
if (rank < 10) {
    nivel = "Ferro";
} else if (rank >= 11 && rank <= 21) {
    nivel = "Bronze";
} else if (rank >= 21 && rank <= 51) {
    nivel = "Prata";
} else if (rank >= 51 && rank <= 81) {
    nivel = "Ouro";
} else if (rank >= 81 && rank <= 91) {
    nivel = "Diamante";
} else if (rank >= 91 && rank <= 101) {
    nivel = "lendário";
} else if (rank >= 101) {
    nivel = "imortal";
}
return nivel
}
// Saída
console.log(`O Herói ${Herói} tem saldo de ${calcular()} e está no nível de ${niveis()}`);
