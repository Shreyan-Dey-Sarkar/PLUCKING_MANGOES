
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var boy;
var chain;
var boyImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

 
  

	
	
	mango1 = new Mango(900,350,30);
  mango2 = new Mango(750,300,30);
	mango3 = new Mango(800,340,30);
	mango4 = new Mango(860,400,30);
	mango5 = new Mango(840,290,30);
	mango6 = new Mango(730,410,30);
	mango7 = new Mango(680,350,30);
  tree = new Tree(750,750);
  ground = new Ground(400,683,988,10);
  stone = new Stone(235,420,20);
  
  chain = new Slingshot(stone.body,{x:235,y:535});
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")

  image(boyImg,200,450,200,300);

 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  ground.display();
  stone.display();
  chain.display();
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango7,stone);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly();    
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:200,y:530})
    chain.attach(stone.body);
  }
}

function detectCollision(lmango,lstone){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance <= lmango.radius + lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
}


