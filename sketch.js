const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Render=Matter.Render;

var paper;
var dustbin, ground;
var world,engine;

function setup() {
  createCanvas(1600, 700);
  engine=Engine.create();
  world=engine.world;

  paper= new Paper(200,640);
  dustbin= new Dustbin(800,650);
  ground = new Ground(800,680,1600,20);
  
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
}
function draw() {
  background(0);
  paper.display();
  dustbin.display();
  ground.display();

}

function keyPressed(){ 
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}