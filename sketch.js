const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var gameSound;
var kid1,kid1Image;
var person2,person2Image;
var maxSnow = 100;
var snowFall = [];

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  gameSound = loadSound("roa-music-snow-dancer.mp3");
  kid1Image = loadImage("kid1-removebg-preview.png");
  person2Image = loadImage("reealPerson2-removebg-preview.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  //Play the Sound
  //gameSound.play();

  //ground1 = new Ground(width/2,580);

  kid1 = createSprite(1100,460,100,180);
  kid1.addImage(kid1Image);
  kid1.scale = 0.4;

  
  person2 = createSprite(100,460,100,180);
  person2.addImage(person2Image);
  person2.scale = 0.4;

  if(frameCount%80===0){
    for(var i = 0;i<maxSnow;i++){
      snowFall.push(new Snow(random(0,1200),10));
    }
  }

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  //ground1.display();

  kid1.display();
  person2.display();

  if (keyDown("LEFT_ARROW")){
    kid1.x = kid1.x -5;
  }

  if (keyDown("RIGHT_ARROW")){
    kid1.x = kid1.x +5;
  }

  for(var i = 0;i<maxSnow;i+=70){
    snowFall[i].display();
    snowFall[1].update();
  }

  drawSprites();
}

