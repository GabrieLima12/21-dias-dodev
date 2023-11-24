let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));
let cnh = confirm("Você possui CNH ?");
let carro = confirm("Você tem carro ?");

if (idade < 18 || cnh == false) {
    console.log(`${nome}, você não pode dirigir!`);
} else if (idade >= 18 && cnh == true && carro == true) {
    console.log(`${nome}, você será o motorista!`)
} else {
    console.log(`${nome}, você pode dirigir mas não tem um carro`)
}