// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

// // adding variables
// var ball;
// var ground;
// var bin;
// var paper;

// function preload()
// {
// 	bin = loadImage('images/dustbin.png');
// }

// function setup() {
// 	createCanvas(1400, 650);

// 	engine = Engine.create();
// 	world = engine.world;

// 	// creating the ball
// 	ball = new Paper(400,300,40);

// 	//creating the ground
// 	ground = new Ground(800,620,1600,20);

// 	bin = new Bin(800, 625);

	
// 	Engine.run(engine);
  
// }


// function draw() {
// 	background("skyblue");
	
// 	rectMode(CENTER);
	

// 	// calling the function
// 	keyPressed();

//     //display function
// 	ball.display();
// 	ground.display();
// 	bin.display();
	
// 	// display the sprites
//     drawSprites();

 
// }

// function keyPressed(){
// 	if(keyCode === UP_ARROW){
// 		Matter.Body.applyForce(ball.body,ball.body.position,{x:130, y:-140});
// 	}
// }

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;


function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	
	
	paperObject=new Paper(200,200,40);
	groundObject=new Ground(width/2,470,width,20);
	dustbinObj=new Bin(600,300);
	Engine.run(engine);
  
}


function draw() {
 
  background("");
   rectMode(CENTER);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-60});
    
	}
}