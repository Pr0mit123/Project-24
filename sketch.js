
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


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1 = new paper (100, 50, 70);
  
  binBase = new dustbinBase (400, 25, 100, 20);

  binSide1 = new dustbinSide (420,125, 20, 100);

  binSide2 = new dustbinSide (380, 125, 20, 100)
  drawSprites();
 
}

paper1.display();
binBase.display();
binSide1.display();
binSide2.display();



