// let numero = parseInt(prompt("Digite um número: "));

// for (let contador = 1; contador <= numero; contador++) {
//     console.log(contador);    
// }

// for (let contador = 50; contador >= 0; contador-=5) {
//     console.log(contador);
// }

let numero = parseInt(prompt("Digite um número: "));

console.log(`Número ${numero}:                  Número ${numero + 1}:                  Número ${numero + 2}:`);
for (let index = 0; index <= 10; index++) {
    console.log(`Número ${numero} x ${index} = ${numero * index}      Número ${numero + 1} x ${index} = ${(numero + 1) * index}         Número ${numero + 2} x ${index} = ${(numero + 2) * index} `);   
}