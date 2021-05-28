
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObj, groundObj, engine;
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObj=new paper(40, 40, 20);
	groundObject=new ground(600, 400);
	dustbinObj=new dustbin(1000, 450);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObj.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:85,y:-85})
	}
}