const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(450, 390, 900, 20);
  platform1 = new Ground(400, 300, 250, 10);
  platform2 = new Ground(700, 150, 200, 10);
  block1 = new Block(200, 10, 30, 40);
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  platform1.display();
  platform2.display();
  block1.display();


  drawSprites();
}