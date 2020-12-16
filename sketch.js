const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
    world = engine.world;
 
  ground = new Ground(400,height,800,20);
stand=new Ground(400,260,300,10);
polygon=new Bird(100,200)

block1=new Box (330,235,30,40)
  block2=new Box (360,235,30,40)
  block3=new Box (390,235,30,40)
  block4=new Box (420,235,30,40)
  block5=new Box (450,235,30,40)

  block6=new Box (360,195,30,40)
  block7=new Box (390,195,30,40)
  block8=new Box (420,195,30,40)

  block9=new Box (390,155,30,40)
slingshot=new SlingShot(polygon.body,{x:100,y:200})

 
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  ground.display();
  stand.display();
  fill("red")
  block1.display();
  slingshot.display();
  block2.display();
  block3.display();
  block4.display();

  block5.display();
  fill("blue")
  block6.display();
  block7.display();
  block8.display();
  fill("pink")
  block9.display();
  
 polygon.display();
  
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()

  function KeyPressed(){
    if(keyCode === 32){
      slingshot.attach(this.polygon);
    }
  }
}