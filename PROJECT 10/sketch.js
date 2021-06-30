var ship ;
var sea ;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(0,0,400,100);
  sea.addAnimation("moving",seaImg);
 // sea.x = sea.width/2;
  sea.velocityX = -6;
  sea.scale = 1;

  ship = createSprite(175,200,10,10);
  ship.addAnimation("sailing",shipImg);
  ship.scale = 0.2;
  
}

function draw() {
  background("blue");

  sea.velocityX = -6;
 
  if (sea.x<0){
    sea.x = sea.width/2;
  }


  drawSprites();
}