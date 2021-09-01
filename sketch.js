var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  rabbit.x = World.mouseX

  var randomSprite = Math.round(random(1, 2));

  if (frameCount % 80 == 0)
  {
    if (randomSprite == 1){
      spawnApples()
    }
    else
    {
      spawnLeaf()
    }
  }
}

function spawnApples()
{
  var apple = createSprite(random(50, 350), 50, 10, 10)
  apple.velocityY = 1.5
  apple.addImage("apple", appleImg)
  apple.scale = random(0.03, 0.05)
}

function spawnLeaf()
{
  var leaf = createSprite(random(50, 350), 50, 10, 10)
  leaf.velocityY = 1.3
  leaf.addImage("leaf", leafImg)
  leaf.scale = random(0.03, 0.05)
}