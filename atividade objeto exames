class Exames {
    #peso;
    #respostaCorreta;
    #avaliacoes;

    constructor(respostaCorreta, peso) {
        this.#peso = peso;
        this.#respostaCorreta = respostaCorreta;
        this.#avaliacoes = [];
    }

    adicionar(avaliacao) {
        this.#avaliacoes.push(avaliacao);
    }

    media() {
        if (this.#avaliacoes.length === 0) return 0;
        
        const pontuacaoTotal = this.#avaliacoes.reduce((soma, resposta) => {
            return soma + (resposta === this.#respostaCorreta ? this.#peso : 0);
        }, 0);
        
        return pontuacaoTotal / this.#avaliacoes.length;
    }

    minimo(quantidade = 1) {
        const notas = this.#obterNotas();
        const ordenadas = notas.sort((a, b) => a - b);
        return ordenadas.slice(0, quantidade);
    }

    maximo(quantidade = 1) {
        const notas = this.#obterNotas();
        const ordenadas = notas.sort((a, b) => b - a);
        return ordenadas.slice(0, quantidade);
    }

    /**
     * Retorna notas menores que o limite
     * @param {number} limite - Limite superior
     * @returns {Array<number>} Array com notas menores que o limite
     */
    menorQue(limite = this.#peso) {
        const notas = this.#obterNotas();
        return notas.filter(nota => nota < limite);
    }

    maiorQue(limite = 0) {
        const notas = this.#obterNotas();
        return notas.filter(nota => nota > limite);
    }

 
    #obterNotas() {
        return this.#avaliacoes.map(resposta => 
            resposta === this.#respostaCorreta ? this.#peso : 0
        );
    }

    obterInformacoes() {
        return {
            peso: this.#peso,
            respostaCorreta: this.#respostaCorreta,
            totalAvaliacoes: this.#avaliacoes.length,
            notas: this.#obterNotas()
        };
    }
}



##################################################################################################################################

exemplo de uso :  


// Criando uma questão com peso 2 e resposta correta 'a'
const questao1 = novo Exame('a', 2);

// Adicionando respostas 
questao1.adicionar('a'); // Acertou - nota: 2
questao1.adicionar('b'); // Errou - nota: 0
questao1.adicionar('a'); // Acertou - nota: 2
questao1.adicionar('c'); // Errou - nota: 0
questao1.adicionar('a'); // Acertou - nota: 2

// Testando 
console.log('Média:', questao1.media()); // 1.2
console.log('2 menores notas:', questao1.minimo(2)); // [0, 0]
console.log('2 maiores notas:', questao1.maximo(2)); // [2, 2]
console.log('Notas < 1:', questao1.menorQue(1)); // [0, 0]
console.log('Notas > 0:', questao1.maiorQue(0)); // [2, 2, 2]


console.log('Informações:', questao1.obterInformacoes());
