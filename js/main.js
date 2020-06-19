function botao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"; // permite colocar textos ou outras coisas -->
    //pode colocar entre tag <b>texto</b> que fica em negrito
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://www.youtube.com/watch?v=y5MNhLo0Djc&list=PLJ4lbwalqv3Eaiay2pCeU_QU6vb-Hz989&index=14&t=1456s");
    //  window.location.href = "https://www.youtube.com/watch?v=y5MNhLo0Djc&list=PLJ4lbwalqv3Eaiay2pCeU_QU6vb-Hz989&index=14&t=1456s";
    // esse segundo abre na mesma pagina. o outro abre em outra aba
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    // alert("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"

}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

// function soma(n1, n2) {
//     return n1 + n2;
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar
// }
// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));
// alert(soma(5, 10));

// var d = new Date();
// alert(d); //traz data completa
// alert(d.getMonth());// tbm tem getMinutes entre outros

// var count;
// for (count = 0; count <=5; count ++){
//     alert(count);
// };

// var count = 0; // estrutura de repetição
// while(count <= 5){
//     console.log(count);
//     alert(count)
//     count = count + 1; // count ++
// };

// var idade = prompt("Qual sua idade?") // abre um dialogo para o usuario responder
// if (idade >= 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// };

// var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}] // lista de dicionarios
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = {nome:"maçã", cor:"vermelho"} // dicionario
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["Maçã", "Pêra", "Uva"];
// lista.push("Laranja"); // add novo
// lista.pop() // retira o ultimo
// console.log(lista.length); // tamanho da lista
// console.log(lista.reverse()); // motra lista ao contrario
// console.log(lista[0]) // mostra primeiro elemento da lista
// console.log(lista.toString()[0]); // mostra a primeira letra
// console.log(lista) 
// console.log(lista.join(" - ")); // troca a separação de ',' por outro elemento

// alert(lista[2]);

// var nome = "Alexandre CM";
// var idade = 27; // se colocar como string ele concatena os dois numeros
// var idade2 = 10;
// var frase = "Terceira página, agora em JS";

// alert(idade + idade2)
// alert(nome + " tem " + idade + " anos.")
// alert("Meu primeiro JS");

// console.log(nome);
// console.log(idade + idade2); // da para colocar outras operações
// console.log(frase.replace("Terceira", "Mais uma")); // troca a palavra
// console.log(frase.toUpperCase()); 
// console.log(frase.toLowerCase());
// alert(frase.replace("Terceira", "Mais uma"));
// apertando f12 na página aprece um 'inspecionar', logo clica em console e aparece as msgs daqui 