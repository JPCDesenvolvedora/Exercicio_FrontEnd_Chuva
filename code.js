// Código ver mais
function verMais() {
   let reticencias = document.getElementById("points");
   let verMais = document.getElementById("mais");
   let textoBotao = document.getElementById("btnLeiaMais");

   if(verMais.style.display == "block") {
        verMais.style.display = "none";
        reticencias.style.display = "block";
        textoBotao.innerHTML = "Leia Mais";
   } else {
        verMais.style.display = "block";
        reticencias.style.display = "none";
        textoBotao.innerHTML = "Leia Menos";
   }
}

//Código para mostrar a área de criar tópicos ao clicar nos botões criar tópico e em criar novo tópico
function criarTopico() {
     let criarTopico = document.getElementById("area-criarTopico");
     let conteudoTopico = document.getElementById("area-inputs");

     let topicoEnviado = document.getElementById("container-topicoEnviado");
     let divTransparente = document.getElementById("div-transparente");

     if(conteudoTopico.style.display == "none") {
          conteudoTopico.style.display = "flex";
          topicoEnviado.style.display = "none";
          criarTopico.style.display = "none";
          divTransparente.style.display = "none";
     } 

}

//Código para pegar a pergunta que foi digitada pelo usuário e mostrar a área de tópico criado
function btnEnviar() {
     let conteudoTopico = document.getElementById("area-inputs");
     let topicoEnviado = document.getElementById("container-topicoEnviado");

     if(topicoEnviado.style.display == "none") {
          topicoEnviado.style.display = "flex";
          conteudoTopico.style.display = "none";
     }

     let valorPergunta = document.getElementById("input-assunto").value;
     let conteudoPergunta = document.getElementById("input-conteudo").value;

     let containerTopicoCriado = document.getElementById("container-topicoCriado");
     let divTransparente = document.getElementById("div-transparente");

     let assuntoPergunta = document.getElementById("assuntoPergunta");
     let corpoPergunta = document.getElementById("corpoPergunta");

     if(topicoEnviado.style.display == "flex") {
          containerTopicoCriado.style.display = "flex";
          divTransparente.style.display = "flex";

          assuntoPergunta.innerHTML = valorPergunta;
          corpoPergunta.innerHTML = conteudoPergunta;
          temporizador();
     }
}

// Código para ocultar a div transparente após um tempo
function temporizador() {
     let divTransparente = document.getElementById("div-transparente");

     setTimeout(function() {
          divTransparente.style.display = "none"
     }, 10000);
     
   }