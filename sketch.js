const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;

function setup()
{
   createCanvas(400,400);
   engine = Engine.create();
   world=engine.world;
   
   groundoptions= { isStatic : true }
   ground = Bodies.rectangle(200,390,200,20,groundoptions);
   World.add(world,ground);

   objectoptions= { 'restitution' : 1.0 }
   object = Bodies.rectangle(200,200,50,50,objectoptions);
   World.add(world,object);

   balloptions= { 'restitution' : 1.2 }
   ball = Bodies.circle(200,200,20,balloptions);
   World.add(world,ball);

   
   
}


function draw()
{
  background("gold");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}