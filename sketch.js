var myEngine , myWorld ;

var ground ;

var paper;

var log1 , log2 , log3 ;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	log1 = createSprite (550,600,200,15);
	log1.shapeColor = color ("white");

	log2 = createSprite (550,300,15,200);
	log2.shapeColor = color ("white");

	log3 = createSprite (550,600,15,200);
	log3.shapeColor = color ("white");


	groundSprite = createSprite (width/2, 650, width, 10);
	groundSprite.shapeColor = color ("yellow");


	paper = createSprite (width/2, 650, width, 10);
	paper.shapeColor = color ("red");



	engine = Engine.create();
	world = engine.world;


	paper = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, paper);

	//Create the Bodies Here.



	bottomBody = Bodies.rectangle (550,600,200,15, {isStatic:true} );
	World.add (world , log1);

       leftBody = Bodies.rectangle (550,300,15,200, {isStatic:true} );
	World.add (world , log2);

       rightBody= Bodies.rectangle ( 550,600,15,200, {isStatic:true} );
 	World.add (world , log3);


	ground = Bodies.rectangle ( 550,600,15,200, {isStatic:true} );
	World.add (world , groundSprite);




	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  Engine.update (myEngine);

  function keyPressed (){

	if (keyCode === UP_ARROW ) {

	 Matter.Body.applyForcen (paperObject.body , paperObjact.body , position , { x:85 , y:-85});

 
	}
  }
  
 
}



