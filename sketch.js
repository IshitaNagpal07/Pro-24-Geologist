var hammer;
var iron;
var plane;
var rubber;
var stone;
var sand1,sand2,sand3,sand4,sand5,sand6;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   plane = new Plane(800,height,1600,20);

   hammer = new Hammer(600,200,200,50);
   rubber = new Rubber(500,200,100);
   stone = new Stone(400,200,100,100);
   iron =  new Iron(300,100,100,40);
   sand1 = new Sand(400,200,3);
   sand2 = new Sand(400,200,3);
   sand3 = new Sand(400,200,3);
   sand4 = new Sand(400,200,3);
   sand5 = new Sand(400,200,3);
   sand6 = new Sand(400,200,3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  plane.display();
  hammer.display();
  iron.display();
  rubber.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
 
  
  drawSprites();
 
}



