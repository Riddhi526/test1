
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBody;
var dustbin1,dustbin2,dustbin3;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
   paperBody = new Paper(200,400,40);
   dustbin1 = new Dustbin(990, 380, 150, 200);
 
   ground1 = new Ground(700,490,1400,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paperBody.display();
  dustbin1.display();
  
  ground1.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:3,y:-4});
  }
}


