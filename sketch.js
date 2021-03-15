const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  block = new Box(300,295,30,40);
  block1 = new Box(320,295,30,40);
  block2 = new Box(280,295,30,40);
  block3 = new Box(270,295,30,40);
  block4 = new Box(290,245,30,40);
  block5 = new Box(260,245,30,40);
  block6 = new Box(320,245,30,40);
  block7 = new Box(275,200,30,40);
  block8 = new Box(305,200,30,40);

  box = new Box(500,545,30,40);
  box1 = new Box(480,545,30,40);
  box2 = new Box(520,545,30,40);
  box3 = new Box(485,480,30,40);
  box4 = new Box(515,480,30,40);
  box5 = new Box(500,435,30,40);


  ground = new Ground(300,300,100,10);
  ground1 = new Ground(500,550,100,10);

  ball = new Ball(800,350,20,20);

  sling = new SlingShot(ball.body,{x:800, y:350});
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ball.display();

  sling.display();

  ground.display();
  ground1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball.body, {x: 800, y: 350});
      ball.body.velocity.x = 0;
      ball.body.velocity.y = 0;
      sling.attach(ball.body);
  }
}