var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, bird1, bird2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

bird1 = loadImage("assets/bird1.png")
bird2 = loadImage("assets/bird2.png")

// obsBottom1 = loadImage("assets/obsBottom1.png")
// obsBottom2 = loadImage("assets/obsBottom2.png")
// obsBottom3 = loadImage("assets/obsBottom3.png")

}

function setup(){

  createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.5;

           
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      balloonGroup =new Group()
      birdsGroup =new Group()
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        bird1 = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    bird1.scale = 0.1;
    bird1.velocityX = -4;

    //random y positions for top obstacles
    bird1.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(bird1);
              break;
      case 2: obstacleTop.addImage(bird2);
              break;
      default:
     break;

    }

     //assign lifetime to the variable
   bird1.lifetime = 100;
    
   balloon.depth = balloon.depth + 1;
   birdsGroup.add(bird1);
      }
}
 
 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}
