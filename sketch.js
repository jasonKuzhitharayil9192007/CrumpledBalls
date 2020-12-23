// this is my crumpled balls project
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var dustbin;
var paper;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
  dustbin = new DustBin(720, 370, 100, 10);
  
  paper = new Paper(100, 300, 24);
  
  ground = new Ground(400,380,width,10)
}

function draw() {
     background("black");
       rectMode(CENTER);
    background(0);

    dustbin.display();
	paper.display();
	ground.display();

  }


//making the ball go up when up arrow key is pressed
function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}


// Thankyou for looking at my code for the crumpled balls 1 project.