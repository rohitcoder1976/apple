var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaf,leafImage;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
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

  select_sprites=Math.round(random(1,2));

}

function draw() {
  background(0);
  console.log(frameCount);
 
  //Making rabbit move along with mouse
  rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  spawnApples();
  spawnLeaves();
  drawSprites();
}

function spawnApples() {
  if (frameCount%80===0) {
    apple=createSprite(200,50,20,20);
    apple.addImage("abc",appleImage);
    apple.velocityY=+4;
    apple.scale=0.07;
    apple.x=Math.round(random(50,350));
    apple.depth=garden.depth;
    apple.depth=apple.depth+1;
   
  }  

}

function spawnLeaves() {
  if (frameCount%100===0) {
  leaf=createSprite(200,50,20,20);
  leaf.addImage("yot",leafImage);
  leaf.velocityY=+5;
  leaf.scale=0.07;
  leaf.x=Math.round(random(50,350));
  leaf.depth=garden.depth;
  leaf.depth=leaf.depth+1;
  }



}