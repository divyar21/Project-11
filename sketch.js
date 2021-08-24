
var ship, ship_moving
var sea, sea_image

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,20);
  sea.addImage(sea_image);
  sea.scale = 0.4;
  
  ship = createSprite(130,250,50,50);
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.2;
  
}

function draw() {
  background("blue");

  sea.velocityX = -1;
  if(sea.x<0){
      sea.x = 350;
    }
  
  drawSprites();
}