const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ball, ground;


function setup() {
  createCanvas(400,400);

engine=Engine.create();
world=engine.world;

var Goptions={
isStatic:true

}

ground=Bodies.rectangle(200,380,400,20,Goptions);
World.add(world,ground);


var b_options={
  restitution:1
}


ball=Bodies.circle(100,100,30,b_options);
World.add(world,ball);

}

function draw() {
  background("lightblue");  

Engine.update(engine);
fill("brown");
stroke("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

fill("red")
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,30,30);


}

