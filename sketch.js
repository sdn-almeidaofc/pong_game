
//VARIAVEIS DA BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// VELOCIDADE DA BOLINHA
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//VARIÁVEIS DA RAQUETE
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("darkblue");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(); 
  movimentaMinhaRaquete();
  colisaoMinhaRaquete();
}

 
function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if(xBolinha  + raio > width || xBolinha < 0){
    velocidadeXBolinha *= -1;
  }

 if(yBolinha + raio > height || yBolinha < 0){
   velocidadeYBolinha *= -1;
}
}

function mostraRaquete(){
   rect(xRaquete,yRaquete,raqueteLargura,raqueteAltura);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }  
}

function colisaoMinhaRaquete();{
  
}
