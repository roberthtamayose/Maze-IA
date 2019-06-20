var w, h;
const coluna = 5;
const linha = 5;
const plano = new Array(coluna);
var inicio;
var final;
var pontoAberto = [];
var pontoFechado = [];
var pontoBest = [];
var caminho = [];

function setup() {
  createCanvas(500, 500);
  console.log('A*');
  // tamanho do ponto ( para o grafico )
  w = width / coluna;
  h = height / linha;

  // criando a matriz
  for (var i = 0; i < linha; i++) {
    plano[i] = new Array(linha);
  }

  //definindo um ponto no plano
  for (var i = 0; i < linha; i++) {
    for (var j = 0; j < coluna; j++) {
      plano[i][j] = new Ponto(i, j);
    }
  }

  //define paredes para o
  plano[0][1].parede = true
  plano[1][4].parede = true
  plano[2][0].parede = true
  plano[3][1].parede = true
  plano[4][3].parede = true
  



  // define pontos de vizinhos
  for (var i = 0; i < linha; i++) {
    for (var j = 0; j < coluna; j++) {
      plano[i][j].addVizinhos(plano);
    }
  }


  // define o ponto inicio e o final
  inicio = plano[0][0];
  final = plano[linha - 1][coluna - 1];
  //final = plano[0][4];
  inicio.parede = false;
  final.parede = false;

  // define o inicio da lista de pontos abertos (0,0)
  pontoAberto.push(inicio);
  pontoBest.push(inicio);

  console.log(pontoAberto);
  console.log(pontoFechado);
}