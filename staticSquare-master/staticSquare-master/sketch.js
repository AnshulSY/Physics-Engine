const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var ball;
var octagon;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var box_options = {
        //isStatic: false
        restitution: 2
    }

    var ball_options = {
        restitution: 1
    }

    var octagon_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world, ground);

    box = Bodies.rectangle(200, 300, 50, 50, box_options);
    World.add(world, box);

    ball = Bodies.circle(100, 100, 60, ball_options);
    World.add(world, ball);

    octagon = Bodies.polygon(300, 360, 8, 30, octagon_options);
    World.add(world, octagon);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x, box.position.y, 50, 50);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 30, 30);
}