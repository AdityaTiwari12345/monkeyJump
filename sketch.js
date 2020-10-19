
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime = 0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
   ground = createSprite(200,350,900,10);
   ground.velocityX = -4;
 
      monkey = createSprite(100,200,10,10);
      monkey.addAnimation("moving",monkey_running);
      monkey.scale = 0.1;
  
  
  
  
     
 
  
  survivalTime = 0;
  
}


function draw() {
  background("white");
  
    stroke("black");
    textSize(20);
    fill("black");  
    survivalTime=Math.ceil(frameCount/frameRate());
    text("survaival Time:  "+ survivalTime,100,50);

  
  
  
  
  
  if (ground.x<0){
      
     ground.x = ground.width/2;

   }
  
  
  
  monkey.collide(ground);

  
  if (keyWentDown("space")){
      
      monkey.velocityY = -12;
      
      
      }
  
  
  
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
 
  
   
  spawnObstacle();
  spawnBanana();
  drawSprites();
}

function spawnObstacle(){
  
  if (frameCount % 100 === 0){
      
      obstacle = createSprite(400,330,10,10);
      obstacle.addImage("Image",obstacleImage);
      obstacle.scale = 0.1;
      obstacle.velocityX = -4;
      obstacle.lifetime = -0.01;
      

      
      }
}

function spawnBanana(){
  
  if(frameCount % 60 === 0){
     
     banana = createSprite(400,200,10,10);
     banana.addImage("Image",bananaImage);
     banana.scale = 0.050;
     banana.velocityX = -4;
     banana.lifetime = -0.01;
     
     }
  
  
  
}


