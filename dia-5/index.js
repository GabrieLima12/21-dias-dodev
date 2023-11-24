// let n1 = parseInt(prompt("Digite um número: "));
// let n2 = parseInt(prompt("Digite outro número: "));

// let escolha = parseInt(prompt("Digite 1 para somar os valores \nDigite 2 para multiplicar os valores \nDigite 3 para dividir os valores \n"));

// switch (escolha) {
//     case 1:
//         let soma = n1 + n2;
//         console.log(`A soma dos valores são: ${soma}`);
//         break;
//     case 2:
//         let multiplicacao = n1 * n2;
//         console.log(`A multiplicação entre os valores são: ${multiplicacao}`);
//         break;
//     case 3:
//         let divisao = n1 / n2;
//         console.log(`A divisão entre os valores são: ${divisao}`);
//         break;
//     default:
//         console.log("Opção inválida!");
//         break;
// }

alert("Bem-vindo ao posto Dois Irmãos!");
let opcao = parseInt(prompt("Digite 1 para abastecer gasolina \nDigite 2 para abastecer alcool \nDigite 3 para encher o pneu "));

switch (opcao) {
    case 1:
        let valorGasolina = parseFloat(prompt("Digite o valor que quer pagar: \nObs: gasolina R$5,00"));
        let litrosGasolina = valorGasolina / 5;
        console.log(`Você abastecerá ${litrosGasolina} litros.`);
        break;
    case 2:
        let valorAlcool = parseFloat(prompt("Digite o valor que quer pagar: \nObs: alcool R$3,00"));
        let litrosAlcool = valorAlcool / 3;
        console.log(`Você abastecerá ${litrosAlcool} litros.`);
        break;
    case 3:
        console.log(`Pneus calibrados com sucesso!`);
        break;
    default:
        console.log("Opção inválida!");
        break;
}