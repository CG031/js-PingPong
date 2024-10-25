//variáveis da bolinha
let diametro = 20;
let xBolinha = 100;
let yBolinha = 100;
let raio = diametro / 2


//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente(); 
  incluiPlacar ();
  marcaPonto();
  bolinhaNaoFicaPresa();
}







function mostraBolinha () {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio <0){
    velocidadeXBolinha *= -1;
    
  }
  if (yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete (x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){
     yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
     yRaquete += 10;
  } 
  
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
     velocidadeXBolinha *= -1;
     raquetada.play();
     }
}

function verificaColisaoRaqueteOponente(){
  if(xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente) {
     velocidadeXBolinha *= -1;
    raquetada.play();
     }
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
  
}

function incluiPlacar () {
  stroke(255);
  fill("orange");
  rect(130,8, 40, 30);
  rect(430,8, 40, 30);
  fill(255);
  text (meusPontos, 150, 26);
  textSize (22);
  textAlign (CENTER, CENTER);
  text (pontosOponente, 450, 26)
  
}

function marcaPonto(){
  if (xBolinha < 5) {
    pontosOponente += 1;
    ponto.play();
  }
  if(xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
