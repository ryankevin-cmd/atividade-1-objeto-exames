function operacaoVetor(operacao, vetor) {
    switch (operacao) {
        case "sum":
            return vetor.reduce((acumulador, valor) => acumulador + valor, 0);

        case "sumOdds":
            return vetor
                .filter(valor => valor % 2 !== 0)
                .reduce((acumulador, valor) => acumulador + valor, 0);

        case "product":
            return vetor.reduce((acumulador, valor) => acumulador * valor, 1);

        default:
            throw new Error("Operação inválida");
    }
}



#######################################################################################################################
'exemplo de uso'

console.log(operacaoVetor("sum", [1, 2, 3]));              // 6
console.log(operacaoVetor("sumOdds", [1, 2, 3]));          // 4
console.log(operacaoVetor("product", [1, 2, 3]));          // 6

console.log(operacaoVetor("sum", [1, 2, 3, 4, 5, 6]));     // 21
console.log(operacaoVetor("sumOdds", [1, 2, 3, 4, 5, 6])); // 9
console.log(operacaoVetor("product", [1, 2, 3, 4, 5, 6])); // 720
