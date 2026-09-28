const botao = document.querySelectorAll("button");  
      botoes.forEach(function(botao) {
         let curtiu = false;
      botao.addEventListner("click", botaoClicado);
      function botaoClicao() {
         console.log("fui clicado");
         let texto = botao.querySelctor("span");
        if(curtiu === false) {
         texto.textContent++;
        curtiu = true;
        } else{
          texto.textContent--;
          curtiu = false;
        }
      }
      })
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema(){
      const corpoPagina = document.body;
      if (corpoPagina.classList.contains("tema-escuro")) {
            corpoPagina.classList.remove("tema-escuro");
      } else{
            corpoPagina.classList.add("tema-escuro");
      }
}

function mudaTema(){
const corpoPagina = documement.body;
if (corpoPagina.classList.remove("tema-escuro");
} else {
      corpoPagina.classList.add("tema-escuro");
}
}
