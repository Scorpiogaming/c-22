 const Engine=Matter.Engine;
 const Bodies=Matter.Bodies;
 const World=Matter.World;

  var engine,world,object,ball;
 function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var ball_options={
   restitution:0.6
 }
 ball=Bodies.circle(200,100,50,ball_options);
 World.add (world,ball);
 var options={
   isStatic:true
 }
 object=Bodies.rectangle(200,390,50,50,options);
 World.add(world,object);
 console.log(object);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill("red");
 // rect(200,200,50,50);
rect(object.position.x,object.position.y,400,50);
 ellipse(ball.position.x,ball.position.y,20,20);
}