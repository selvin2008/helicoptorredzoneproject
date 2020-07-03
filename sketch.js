var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var brick1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	brick1=createSprite(350,620,10,90)
	brick1.shapeColor=color("red")
	brick2=createSprite(260,660,170,10)
	brick2.shapeColor=color("red")
	brick3=createSprite(180,620,10,90)
	brick3.shapeColor=color("red")

	packageSprite=createSprite(width/2, 80, 20,20);	
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	
	helicopterSprite=createSprite(width/3, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue")

	engine = Engine.create();
	world = engine.world;
		
	packageBody = Bodies.circle(width/3 , 200 , 5 , {restitution:0,density:6.5, isStatic:true});
	World.add(world, packageBody);
  	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);

}
}