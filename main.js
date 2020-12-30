/*
//Sem ID no h3
function clicou(){
    alert("Obrigado por clicar");
}
*/
function clicou() {
    //Pega elemento do documento pelo ID
    //document.getElementById("agradecimento"); 
    //É possivel usar funções com esse "pegar"
    //Por exemplo essa que mostra um texto 
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>"; //innerHTML aceita até tags
    //MOSTRA O DOCUMENT.getElementById chamando o elemento com id agradecimento no console
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //REDIRECIONA E ABRE EM UMA NOVA GUIA
    window.open("https://mylena-rodrigues.github.io/projetoInstagram/");
    //REDIRECIONA NA MESMA GUIA
    window.location.href = "https://mylena-rodrigues.github.io/projetoInstagram/";
}
//NO CASO DE CHAMAR O ID
function trocar(){
    //Vai literalmente trocar a frase
   document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

//NO CASO DE SE PASSAR COMO PARAMETRO
function trocarP(elemento){
   elemento.innerHTML = "Obrigada por passar o mouse";
}
function voltarP(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}
//COLETA QUAL VALOR SELECIONADO NO SELECT
function funcaoChange(elemento){
    console.log(elemento.value);
}