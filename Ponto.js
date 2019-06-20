function Ponto(l,c) {

  //coordenada
  this.l = l;
  this.c = c;

  // f,g,h valores para funcão da A*
  this.f = 0;
  this.g = 1;
  this.h = 0;

  // pontos vizinhos
  this.vizinhos = [];

  // ponto anterior
  this.pontoAnt = undefined;

  // Parede
  this.parede = false;
  //if (random(1) < 0.3) {
  //this.parede = true;
 //}

  // print da (parede ou ponto)
  this.printPonto = function(col) {
    if (this.parede) {
      fill(0);
      strokeWeight(4);
      stroke(51);
      rect(this.c * w, this.l * h, w, h);
    } else if (col) {
      fill(col);
      ellipse(this.c * w + w / 2, this.l * h + h / 2, w / 2, h / 2);
    }
  }

  // Define o vizinho
  this.addVizinhos = function(plano) {
    var l = this.l;
    var c = this.c;
    if (l < coluna - 1) {
      this.vizinhos.push(plano[l + 1][c]);
    }
    if (l > 0) {
      this.vizinhos.push(plano[l - 1][c]);
    }
    if (c < linha - 1) {
      this.vizinhos.push(plano[l][c + 1]);
    }
    if (c > 0) {
      this.vizinhos.push(plano[l][c - 1]);
    }

  }
}