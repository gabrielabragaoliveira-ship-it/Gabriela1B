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
