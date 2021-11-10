const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;
var engine , world;


function setup() {
  canvas=createCanvas(windowWidth/2,windowHeight/1.5);
  engine = Engine.create();    
  world = engine.world;

  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  };
  mConstraint=MouseConstraint.create(engine,options)
  World.add(world,mConstraint)

  pendulum1=new Pendulum(300,450,'#000')
  pendulum2=new Pendulum(360,450,'#000')
  pendulum3=new Pendulum(420,450,'#000')
  pendulum4=new Pendulum(480,450,'#000')
  pendulum5=new Pendulum(540,450,'#000')

  sling1=new Sling(pendulum1.body,{x:300,y:200})
  sling2=new Sling(pendulum2.body,{x:360,y:200})
  sling3=new Sling(pendulum3.body,{x:420,y:200})
  sling4=new Sling(pendulum4.body,{x:480,y:200})
  sling5=new Sling(pendulum5.body,{x:540,y:200})
}

function draw() {
  background(180); 
  Engine.update(engine);

  pendulum1.display()
  pendulum2.display()
  pendulum3.display()
  pendulum4.display()
  pendulum5.display()

  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x: mouseX,y: mouseY});
}