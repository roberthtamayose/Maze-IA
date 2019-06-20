function draw() {
    debugger;
     // verificação para ver se existe pontos abertos
  if (pontoAberto.length > 0) {

    // define o ponto atual
    var aux = 0;
    for (var i = 0; i < pontoAberto.length; i++) {
      if (pontoAberto[i].f < pontoAberto[aux].f) {
        aux = i;
      }
    }
    
    var pontoAtual = pontoAberto[aux];
      

   
    
    // O ponto atual passa para a lista de fechados    
    for (var i = pontoAberto.length - 1; i >= 0; i--) {
      if (pontoAberto[i] == pontoAtual) {
        pontoAberto.splice(i, 1);
      }
    }
    pontoFechado.push(pontoAtual);
    


    // verifica os vizinhos
    var vizinhos = pontoAtual.vizinhos;
    for (var i = 0; i < vizinhos.length; i++) {
      var vizinho = vizinhos[i];

      // Verifica se é um ponto valido ( não é parede ou um ponto fechado)
      if (!pontoFechado.includes(vizinho) && !vizinho.parede) {
        var tempG = pontoAtual.g + heuristica(vizinho, pontoAtual);

        // verifica se é um caminho menor que o outro.
        var newcaminho = false;
        if (pontoAberto.includes(vizinho)) {
          if (tempG < vizinho.g) {
            vizinho.g = tempG;
            newcaminho = true;
          }
        } else {
          vizinho.g = tempG;
          newcaminho = true;
          pontoAberto.push(vizinho);
        }

        // Passa para o outro ponto.
        if (newcaminho) {
          vizinho.h = heuristica(vizinho, final);
          vizinho.f = vizinho.g + vizinho.h;
          vizinho.pontoAnt = pontoAtual;
          
        }
      }
    }



  // adicionando o caminho atual
    caminho = [];
    var temp = pontoAtual;
    caminho.push(temp);
    while (temp.pontoAnt) {
      caminho.push(temp.pontoAnt);
      temp = temp.pontoAnt;
    }

 // verifica se chegou ao ponto final
  if (pontoAtual === final) {
    noLoop();
    console.log("Chegou!!!");
  }
  
    //sem solução
  } else {
    console.log('Sem Solução');
    noLoop();
    return;
  }
  
  





  
  // Print do estado atual
  background(255);

  //print do plano (labirinto)
  for (var i = 0; i < linha; i++) {
    for (var j = 0; j < coluna; j++) {
      plano[i][j].printPonto();
    }
  }


  //print dos pontos fechados
  for (var i = 0; i < pontoFechado.length; i++) {
    pontoFechado[i].printPonto(color(255, 0, 0, 100));
    console.log("Ponto Fechado: " +pontoFechado[i].l,pontoFechado[i].c);
  }

  //print dos pontos abertos
  for (var i = 0; i < pontoAberto.length; i++) {
    pontoAberto[i].printPonto(color(0, 255, 0, 100));
    console.log("Ponto Aberto: " +pontoAberto[i].l,pontoAberto[i].c);
  
  }


  for (var i = caminho.length - 1 ; i > 0; i--) {
  console.log("Caminho: " + caminho[i].l,caminho[i].c);
  }
  console.log("..................")

  // print do caminho
  noFill();
  stroke(0, 0, 255, 200);
  strokeWeight(20);
  
  beginShape();
  for (var i = 0; i < caminho.length; i++) {
    vertex(caminho[i].c * w + w / 2, caminho[i].l * h + h / 2);
  }
  endShape();


  
}

