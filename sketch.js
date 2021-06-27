var garden,rabbit,apple,carrot;
var gardenImg,rabbitImg,appleImg,carrotImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("Apple1.jpg");
  carrotImg=loadImage("carrot1.jpg");
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
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);


createApples();
createCarrot();


if(mouseIsOver(apple)){
  apple.destroy();
}


if(mouseIsOver(carrot)){
  carrot.destroy();
}


  drawSprites();

  
}

function createApples(){
  if(frameCount % 80===0){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=4;
  if(apple.y>375){
    apple.destroy();
  }
}
}

function createCarrot(){
  if(frameCount % 100===0){
    carrot=createSprite(random(50,350),40,10,10);
    carrot.addImage(carrotImg);
    carrot.scale=0.04;
    carrot.velocityY=4;
    if(carrot.y>375){
      carrot.destroy;
    }
  }
}