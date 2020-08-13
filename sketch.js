
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground;
var bar1,bar2,bar3;
var bin,binimg,lid;
function preload()
{
	binimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);

	paperball = new paper(20,50,20);
	
	bar1 = new bar(600,648,200,20);
	bar2 = new bar(500,510,20,310);
	bar3 = new bar(700,480,20,360);

	lid = new lidd(710,250,20,220);

	bin = createSprite(600,500,20,20);
	bin.addImage(binimg);
  

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
  //lid.display();

  bar1.display();
  bar2.display();
  bar3.display();

  ground.display();
  paperball.display();

  

  //close();
  

 drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
	}
}

function close(){
	if(paperball.body.position.x>=695&&paperball.body.position.y>=695){
		Matter.Bodies.setStatic(paperball.body,true);
	}

}



