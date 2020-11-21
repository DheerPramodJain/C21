var fixedrect,movingrect
var gameobject1

function setup() {

  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 60, 80);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green"
  movingrect.velocityY = +5
  fixedrect.velocityY = -5
}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (isTouching(movingrect,gameobject1)){
    movingrect.shapeColor = "blue";
    gameobject1.shapeColor = "blue";
  }
  else{
    movingrect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }
  bounceOff(movingrect,fixedrect)
  drawSprites();
}
