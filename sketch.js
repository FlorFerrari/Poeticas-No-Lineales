let img;
let circleDiameter = 100;
let positionX = 130;
let positionY = -220;
let activado = false;

let angle = 90; // Ángulo inicial
let radius = 100; // Radio de la órbita

let centerX, centerY; // Centro de la órbita

function preload() {
  

  cromo = loadImage("poema.jpg");
  
}

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  centerX = -200;
  centerY = 100;
}

function draw() {
  background(200);
  
  pointLight(255, 100, 200, -200, 0, 0);
  pointLight(170, 255, 0, 200, 0, 0);
  specularMaterial(0);
  noStroke();
  orbitControl();
  
  //----------------------------piso madera
  push();
  translate(0, 200, 0);
  rotateX(90);
  noStroke();
  texture(cromo);
  plane(1000);
  pop();

  //ESFERA
  push();
  ambientLight(255);
  texture(cromo);
  sphere(800);
  pop();

  angle += 50;
}
