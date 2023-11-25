let nome = prompt("Digite seu nome: ");
let cpf = prompt("Digite seu cpf: ");
let saldo = 1000;
let continuar;
let dinheiro;
let opcao;

do {
    alert(`Seu saldo atual é de R$${saldo.toFixed(2)}`);
    dinheiro = parseFloat(prompt("Digite um valor: "));
    opcao = parseInt(prompt("O que deseja fazer com esse valor ?\nDigite 1 para sacar.\nDigite 2 para depositá-lo."));
    realizarOperacao(opcao);
    querContinuar();
} while (continuar == 1);

alert(`Seu saldo é de R$${saldo.toFixed(2)}`);

function querContinuar() {
    continuar = parseInt(prompt("Insira 1 para continuar e 2 para parar"));
    switch (continuar) {
        case 1:
            continuar = 1;
            break;
        case 2:
            continuar = 2;
            break;
        default:
            alert("Opção inválida!");
            querContinuar();
    }
}

function realizarOperacao(opcao) {
    switch (opcao) {
        case 1:
            saque(dinheiro);
            alert(`Seu saldo atual é de R$${saldo.toFixed(2)}`);
            break;
        case 2:
            deposito(dinheiro);
            alert(`Seu saldo atual é de R$${saldo.toFixed(2)}`);
            break;
        default:
            alert("Opção inválida!");
            let novaOpcao = parseInt(prompt("Digite novamente a opção desejada: "));
            realizarOperacao(novaOpcao);
    }
}

function saque(valor) {
    if (valor < 0) {
        alert("Não é possível sacar um valor negativo!");
    } else if (valor > saldo){
        alert("Valor digitado é maior que o saldo atual.");
    } else {
        saldo -= valor;
    }
    return saldo;
}

function deposito(valor) {
    if (valor < 0) {
        alert("Não é possível depositar um valor negativo!");
    } else {
        saldo += valor;
    }
    return saldo;
}