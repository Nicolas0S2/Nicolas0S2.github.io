var projects = [
    "Inteligência artificial que joga xadrez utilizando um algoritmo baseado em teoria dos jogos.",
    "Inteligência artificial que utiliza diferentes métodos de busca as cegas para resolver um labirinto.",
    "JO KEN PO interativo, onde é possível jogar player x player, player x computador e computador x computador.",
    "Jogo do tipo plataforma utilizando o ambiente do Contruct 3.",
    "Aplicativo multimidia que toca músicas utilizando o Processing",
    "E-commerce com banco de dados, php, html, css, javascript"
];
var showContent = function() {
    var content = "";
    for (let i = 0; i < projects.length; i++) {
        content += '<div class="card"># ' + projects[i] + '</div>'
    }
    var element = document.getElementById("cards");
    element.innerHTML = content;
  };

showContent();
