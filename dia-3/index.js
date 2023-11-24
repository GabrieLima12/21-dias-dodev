let nomeUsuario = prompt("Digite seu nome: ");
let idadeUsuario = parseInt(prompt("Digite sua idade: "));
let alturaUsuario = parseInt(prompt("Digite sua altura em centímetros: \nObs: Não use pontos ou vírgula."));
let pesoUsuario = parseInt(prompt("Digite seu peso: \nObs: Não use pontos ou vírgula."));
let alturaFormatada = 0;
let imc = 0;
let anoDeNascimento = 2023 - idadeUsuario;

if (alturaUsuario < 100) {
    alturaFormatada = alturaUsuario;
    imc = pesoUsuario / ((alturaFormatada / 100) * (alturaFormatada / 100));
} else {
    alturaFormatada = (alturaUsuario / 100);
    imc = pesoUsuario / (alturaFormatada * alturaFormatada);
}

if (alturaFormatada < 1) {
    console.log(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos, nasceu em ${anoDeNascimento}, tem ${alturaFormatada}m de altura, pesa ${pesoUsuario.toFixed(2)}Kg e seu IMC é de ${imc.toFixed(2)} Kg/m2`);
} else {
    console.log(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos, nasceu em ${anoDeNascimento}, tem ${alturaFormatada}cm de altura, pesa ${pesoUsuario.toFixed(2)}Kg e seu IMC é de ${imc.toFixed(2)} Kg/m2`);
}