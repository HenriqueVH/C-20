
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Brick
var Brick2
var Brick3
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options={ isStatic: true}

	ground= Bodies.rectangle(600,580,1200,2,ground_options);
	World.add(world,ground)

	//Crie os Corpos Aqui.
	Brick = Bodies.circle ( 100, 60, 40, Brick_options)
	World.add(world,Brick)

	Brick2 = Bodies.circle( 140, 60, 40, Brick2_options)
	World.add(world,Brick2)

	Brick3 = Bodies.circle( 180, 60, 40, Brick3_options)
	World.add(world,Brick3)


	var Brick_options = {
		restitution:3,
	}
	
	var Brick2_options = {
		restitution:2,
		friction:0,
		frictionAir:0.45
	}
	
	var Brick3_options = {
		restitution:3000,
		friction: 0.45,
		frictionAir:0.00783
	}

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Black");
  rect(ground.position.x,ground.position.y,1200, 2);
  ellipse(Brick.position.x, Brick.position.y, 40 );
  ellipse(Brick2.position.x, Brick2.position.y, 40 );
  ellipse(Brick3.position.x, Brick3.position.y, 40 );
  drawSprites();
 
}



