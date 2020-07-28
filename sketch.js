// Aluno: Heitor Pereira, turma 1, 2020.5
// https://www.youtube.com/watch?v=3bgpvfbUmVg&feature=youtu.be
var x = 80;
var y = 100;
var x1 = 500; 
var y1 = 500;
var opcao = 1;
var tela = 0;
let jumper;
var count = 0;
var erros = 0;
let img1;
let img2;

function preload() {
img1 = loadImage('foto1.jpg');
img2 = loadImage('foto2.jpg');
}

class Jumper { 
	constructor() {
		this.pos = createVector(50);
		this.vel = createVector();
		this.grav = 0.2;
	}
	update() {
        var d = int(dist(x1, y1, this.pos.x, this.pos.y));
		this.vel.y += this.grav; 
		this.pos.y += this.vel.y; 
		this.pos.y = constrain(this.pos.y, 0, 532);
        this.pos.x += keyIsDown(RIGHT_ARROW);
        this.pos.x -= keyIsDown(LEFT_ARROW);
        if(keyIsDown(UP_ARROW) && this.pos.y>450) { 
	    jumper.vel.y = -5; 
        }
        if(keyIsDown(UP_ARROW) && this.pos.y>531){
        count = count + 1;      
        }
        text(count, 275, 55);
        fill(255);
        text('FALHAS:', 40, 40);
        text(erros, 70, 70);
        if(count<=20){
        text('INICIANTE', 225, 200);
        x1 = x1-1;  
        }
        if(count>20 && count<=50){
        text('INTERMEDIARIO', 200, 200);
        x1 = x1-2;
        }
        if(count>50){
        text('DIFICIL', 250, 200)
        x1 = x1-3;
        }
        if(d<25){
        x1 = 700;
        count = count+1;
        }
        if(x1>-50 && x1<900) {
        x1 = x1-1;
        }
        if(x1<-49){
        x1=600;
        }   
        if(x1<-46){
        erros = erros +1;
        }
		return this;
}
	display() {
		ellipse(this.pos.x,this.pos.y, 35, 35);
        ellipse(x1, y1, 100, 100);
		return this;
	}
	run() {
		return this.update().display();
	}
}

function setup() {
  createCanvas(600, 550);
  jumper = new Jumper();
}

function draw() {
  background(100, 100, 200)
  if(tela==0) {
    menu();
  }
  if(tela==1) {
    fase1();
  }
  if(tela==2) {
    instrucoes();
  }
  if(tela==3) {
    creditos();
  }
} 
function menu() {
  rect(x, y, 450, 80, 55, 55, 55);
  textSize(40);
  textFont('Helvetica');
  text('JUMPING GAME', 150, 60);
  text('JOGAR', 225,150);
  text('INSTRUÇÕES', 175, 300);
  text('CRÉDITOS', 200, 450);
}
   
function fase1() {
textSize(30)
text('GAMEPLAY',200 , 40);
clear();
gameplay();
}   

function instrucoes() {
textSize(30)
text('INSTRUÇÕES:',180 , 80);
text('Pular em direção dos obstáculos ',100,250);
text('e acumular mais pontos!',125, 300);
text('P. Alvo: Ensino fundamental 1', 100, 350);
}   

function creditos() {
textSize(30)
text('CRÉDITOS:',200 , 80); 
  image(img1, 30, 100);
  image(img2, 300, 100);
  text('Programador:Heitor Pereira', 30, 400);
  text('Educador:Thiago Lopes', 250, 500);
}

function keyPressed(){
if(key=="ArrowUp" && y>130) {
  y=y-150;
  opcao = opcao - 1;
  console.log(opcao)
}
if(key=="ArrowDown" && y<400) {
  y=y+150
  opcao = opcao + 1;
  console.log(opcao)
}
if(key=="Enter"){
  tela=opcao
}
if(key=="Escape"){
  tela=0
}
}

function gameplay(){
  background(0, 200, 100);
  jumper.run(); 
}