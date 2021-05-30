 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies =Matter.Bodies;//namespace

var myengine ,myworld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld = myengine.world

  var options = {//JSON
    isStatic :true,
    
  }

  var ballOptions = {
    restitution:1
  }

  ground = Bodies.rectangle(400,390-1,800,20,options);
  World.add(myworld,ground) ;
  console.log(ground)
  
  ball = Bodies.circle(400,100,50,ballOptions)
  World.add(myworld,ball)
  console.log(ball)
  
}

function draw() {
  background(180); 
  Engine.update(myengine) 

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)

}