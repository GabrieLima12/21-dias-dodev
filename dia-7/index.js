let querCadastrarOutraNota = true;
let nota = [];
let sexo = [];
let qtdHomens = 0;
let qtdMulheres = 0;
let qtdOutros = 0;
let qtdDeMulheresComNotaAcimaDeSete = 0;
let maiorNotaDosHomens = -1;
let somaDasNotas = 0;
let mediaGeral = 0;

// Loop para checar se quer adicionar mais notas.

while (querCadastrarOutraNota) {
    if (querCadastrarOutraNota) {
        nota.push(parseFloat(prompt("Digite a nota do aluno: ")));
        sexo.push(prompt("Qual o sexo do aluno? \nDigite M - para masculino.\nDigite F - para feminino.\nDigite O - para outros.").toUpperCase());
        querCadastrarOutraNota = confirm(`Deseja adicionar outra nota ?\nPressione "Confirmar" para sim e "Cancelar" para não.`);
    }
}

// Loop para atribuir o valor das notas, descobrir o sexo dos alunos, descobrir a quantidade de mulheres com a nota maior que 7 e descobrir qual a maior nota entre os homens.

for (let contador = 0; contador < nota.length; contador++) {
    somaDasNotas += nota[contador];
    if (sexo[contador] == "M") {
        qtdHomens += 1; 
    } else if (sexo[contador] == "F") {
        qtdMulheres += 1;
    } else {
        qtdOutros += 1;
    }

    if (sexo[contador] == "F" && nota[contador] >= 7) {
        qtdDeMulheresComNotaAcimaDeSete += 1; 
    }

    if (sexo[contador] == "M" && nota[contador] > maiorNotaDosHomens) {
        maiorNotaDosHomens = nota[contador];
    }
}

// Descobrindo a média dos alunos.

mediaGeral = somaDasNotas / nota.length;

// Fazendo os prints no console.

console.log(`A media geral dos alunos foi: ${mediaGeral}.`);

if (qtdHomens < 1) {
    console.log(`Nenhum homem teve sua nota cadastrada.`);
} else if (qtdHomens == 1) {
    console.log(`Só um homem teve sua nota cadastrada.`);
} else {
    console.log(`A quantidade de homens que enviara suas notas foram: ${qtdHomens} homens.`);
}

if (qtdDeMulheresComNotaAcimaDeSete < 1) {
    console.log(`Não houve mulheres com a nota maior que 7.`);
} else if (qtdDeMulheresComNotaAcimaDeSete == 1) {
    console.log(`Somente uma mulher obteve a nota maior que 7.`);
} else {
    console.log(`A quantidade de mulheres que tiveram a sua nota acima de sete foram: ${qtdDeMulheresComNotaAcimaDeSete} mulheres.`);
}

if (maiorNotaDosHomens == -1) {
    console.log(`Nenhum homem teve sua nota cadastrada.`);
} else {
    console.log(`A maior nota dos homens foi: ${maiorNotaDosHomens}.`)
}
