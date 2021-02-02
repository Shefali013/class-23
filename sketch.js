const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1,box2;
var engine, world;
var ground;
function setup() {
 var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 ground = new Ground(200,390,400,20);
 box1 = new Box(200,100,50,70);
 box2 = new Box(200,200,50,40);

// console.log();
}

function draw() {
  background(100);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}