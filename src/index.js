//Projeto Mario Kart em Node.js
/*Data: 2024-06-15
1 - O computador deve receber dois personagens e simular uma corrida entre eles com base em seus atributos e nas condições da pista.

2 - Os personagens irão correr em uma pista aleatória de 5 rodadas
3 - A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
4 - Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
5 - Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
6 - Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto
7 - Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)
8 - Condição de vitória:
9 - Ao final, vence quem acumulou mais pontos*/

//Declaração dos objetos jogadores
const jogador1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};

const jogador2 = {
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};

const jogador3 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
};
const jogador4 = {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0,
};

const jogador5 = {
    nome: "yoshi",
    velocidade: 2,
    manobralidade: 4,
    poder: 3,
    pontos: 0,
};

const jogador6 = {
    nome: "Donkey",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};

//Declaração função para rodar o dado Async Funtions
//Funções são ações de código que podem ser reutilizadas várias vezes ao longo do programa

async function rolarDado() { // async significa que a função é assíncrona a função não acontece de forma imediata
    return Math.floor(Math.random() * 6) + 1; // metodo floor arredonda para baixo e random gera numero aleatorio
}

async function sortearBlocoPista() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }
     return result
}

async function inicioCorrida(character1, character2, character3, character4, character5, character6) {
    for (let random = 1; random <= 5; random++) {
        console.log(`  🚩 Rodada ${random}\n`);

        let blocoPista = await sortearBlocoPista()
        console.log(` 🛤️ Bloco da Pista: ${blocoPista}\n`);
    }
}

(async function main() {
    console.log(`\n 🚘 Inicio da Corrida Mario Kart enter ${jogador1.nome} e ${jogador2.nome} correndo...!\n`);
    await inicioCorrida(jogador1, jogador2, jogador3, jogador4, jogador5, jogador6);
})();


