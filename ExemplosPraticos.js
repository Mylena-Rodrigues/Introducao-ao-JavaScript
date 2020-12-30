/*
//INTRODUÇÃO
// Variaveis devem ser declaradas antes de serem usadas
var nome = "Mylena";
alert("Bem vinda " + nome); 
// Tipagem dinamica
var idade = 29;
var idade2 = 10;
//Se idade = "29" ele entenderia 29 como uma string
//alert(nome + " tem " + idade +" anos");
console.log(nome);
console.log(idade+idade2)

var frase = "Japão é o melhor time do mundo";
console.log(frase) //Imprime que o japão é o melhor time do mundo
console.log(frase.replace("Japão", "Brasil")) //Imprime que o Brasil é o melhor time do mundo
// pode ser feito tanto no console.log quanto no alert
console.log(frase.toUpperCase()) //Vai trazer tudo para maiusculo;
var fraseD = "MEU NOME É MYLENA";
console.log(fraseD.toLowerCase()); //Transformar toda a frase em minuscula
//Com números pode se fazer qualquer conta


//LISTAS
var lista = ["maçã", "pêra", "laranja"];
//Caso queira acrescentar algo a lista
lista.push("uva");
//Caso queira remover o ultimo elemento de um array
lista.pop();
//Caso queira remover o ultimo elemento de um array e retornar ele
var listapop = lista.pop();
console.log(listapop);
//Caso queira saber o tamanho de uma string
var ola = lista[1].toString();//Tranformou uma opção do array em uma string, mas pode ser feito com a lista toda
console.log(ola.length);//imprimir tamanho
//Caso queira imprimir toda a lista de uma vez
console.log(lista);
//Caso queira imprimir uma de cada vez
var contador = 0;
for(contador = 0; contador<3; contador++){
console.log(lista[contador]);
}
//Imprimir lista ao contrário
console.log(lista.reverse());
//Transforma de array para string
console.log(lista.toString());
//Diferenças no tratamento de array e de string
//*Array
console.log(lista[0]); //Imprime o primeiro elemento da lista
//*String
console.log(lista.toString()[0]); //Imprime só uma letra pq trata o array como se ele fosse uma grande frase
//No lugar de virgula imprimir um traço por exemplo
console.log(lista.join("-"));


//DICIONÁRIO
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta); //Objeto JSON, como um typedef em C
console.log(fruta.nome); //Imprime apenas o nome
alert(fruta.cor);
//Lista de Dicionários
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome); //Lembrete: LISTAS COMEÇAM DO 0, por isso imprime uva

//CONDICIONAIS
var idade = 18;
if(idade>=18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
//Suponha-se que está no página onde deve-se perguntar ao usuário qual a sua idade
var idade = prompt("Qual a sua idade? "); //O que ele responder será salvo nessa variavel
if(idade>=18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}

//REPETIÇÃO
var count = 0;
while(count<=5){
    console.log(count); //alert também aguenta
    count++;
}

var i;
for(i=0; i<=5; i++){
    alert(i);
}

//DATA
var d = new Date();
alert(d); //Imprime dia, mês, horá, fuso-horário e de qual fuso-horário
alert(d.getMonth()+1); //Imprime número do mês - sem o +1 imprime mês anterior
alert(d.getMinutes()); //Imprime minutos
alert(d.getDay()); //Imprime um inteiro como dia da semana, por exemplo 0=Domingo, 1=Segunda, 2=Terça, 3=Quarta, etc;
alert(d.getHours()); //Imprime hora

//FUNÇÕES
function soma (n1, n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
//se não chamar o alert não acontece nada
alert(soma(5, 10));
//Chama função para substituir nome Japão por Brasil
alert (setReplace("Vai Japão", "Japão", "Brasil"));

//VARIAVEIS LOCAIS E GLOBAIS
function validarIdade(idade){
    var validar; //Variavel local
    if(idade >=18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade? "); //Variavel global
console.log(validarIdade(idade));
*/
