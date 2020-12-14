var board, bunny, coin, flower, ground, heart, stair, star, tree, gi, ji;
var bunny3;
var score=0;

var SERVE=0;
var PLAY=1;
var Restart=2;
var END=3;
var gameState=SERVE;
var lives=3;
var x=50;
var visited3=false;
var visited2=false;
var visited1=false;

function preload(){
  board=loadImage("Images/board.png");
  thorn1=loadImage("Images/thorns.png");
  bunny=loadAnimation("Images/bunny1.png","Images/bunny2.png","Images/bunny3.png");
  bunny5=loadAnimation("Images/bunny1.png");
  bunny6=loadImage("Images/bunny2.png");
  coinimg=loadImage("Images/coin.png");
  flower=loadImage("Images/flower.png");
  ground=loadImage("Images/ground.png");
  ground2=loadImage("Images/groundflying.png");
  heart=loadImage("Images/heart.png");
  stair=loadImage("Images/stair.png");
  star=loadImage("Images/star.png");
  tree=loadImage("Images/tree.png");
  but=loadImage("Images/play.png");
  trophie2=loadImage("Images/Trophie.jpg");
  back2=loadImage("Images/white.jpg");
  restart1=loadImage("Images/restart.png");
  gif=loadImage("Images/repeat.png");
  life=loadImage("Images/live_0.png");
  life1=loadImage("Images/live_1.png");
  life2=loadImage("Images/live_2.png");
  re=loadImage("Images/retry.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  score = 0;

 tree0=new Group();
 flower0=new Group();
 ground3=new Group();
 invi=new Group();
 thornGroup=new Group();
 coinGroup1=new Group();
 coinGroup2=new Group();
 coinGroup3=new Group();
 heartGroup=new Group();
 button=createSprite(400,200);
 button.addImage(but);
 button.scale=0.8;
 //button.debug=true;
 button.setCollider("rectangle",0,-35,200,60)

 bunny4=createSprite(140,330);
 bunny4.scale=0.5;
 bunny4.addAnimation("running",bunny);
 bunny4.addAnimation("collided",bunny5);
 //bunny4.debug=true;
 bunny4.setCollider("circle",0,15,80);

 board1=createSprite(50,330);
 board1.addImage(board);

 ground1=createSprite(400,400,400,20);
 ground1.addImage(ground);
 ground1.scale=2.8;
 ground1.x = ground1.width/2;
 // ground1.velocityX = -(6 + 3*score/100);

  white=createSprite(400,200);
  white.addImage(back2);
  white.scale=0.6;

  trophie=createSprite(400,110);
  trophie.addImage(trophie2);
  trophie.scale=0.14;

  live2=createSprite(400,200);
  live2.addImage(life2);
  live2.scale=1.35;

  live1=createSprite(400,200);
  live1.addImage(life1);
  live1.scale=1.35;

  live0=createSprite(400,230);
  live0.addImage(life);
  live0.scale=1.5;

live2.visible=false;
live1.visible=false;
live0.visible=false;

  restart2=createSprite(400,260);
  restart2.addImage(restart1);
  restart2.scale=0.2;
 white.visible=false;
  trophie.visible=false;
 //cross.visible = false;
  restart2.visible = false;
  invisibleGround = createSprite(400,390,800,20);
  invisibleGround.visible = false;
  //invisibleGround.debug=true;



  gi=createSprite(400,310);
  gi.addImage(gif);
  gi.scale=0.15;
  gi.visible=false;

  ret=createSprite(400,245);
  ret.addImage(re);
  ret.scale=0.4;
  ret.visible=false;
}

function draw() {
   background(198,241,255); 
   text("Score: "+ score, 700,25);
   
   //gi.position(100,100);


 if(gameState===SERVE){
 ground1.velocityX=0;
  button.visible=true;
  bunny4.visible=false;
  board1.visible=true;
  bunny4.visible=true;
  bunny4.changeAnimation("collided",bunny5);
  if(mousePressedOver(button)){
     gameState=PLAY;
   }
   spawnHeart();
 }
else if(gameState===PLAY){
 //bunny4.collide(invisibleGround);
  if(keyDown("UP_ARROW")){
   bunny4.velocityY=-10;
  }

  bunny4.velocityY = bunny4.velocityY +0.8;
 bunny4.changeAnimation("running",bunny);

 if (ground1.x < 0){
   ground1.x = ground1.width/2;
      //back.x=back.width/2;
  }
 
 if(bunny4.isTouching(ground3)){
  bunny4.velocityY = 0;
 }


  bunny4.collide(invisibleGround);
 // bunny4.collide(ground3);
 
 ground1.velocityX=-(6 + 3*0/100);
  
  button.visible=false;
  
  board1.visible=false;
  spawnground();
  spawnThorns();
  spawntree();
  spawnFlower();
  spawnCoins();
  spawnHeart();
 
 bunny4.visible=true; 
 if(coinGroup1.isTouching(bunny4)){
     score=score+50;
     coinGroup1.destroyEach();
   } 

   if(coinGroup2.isTouching(bunny4)){
     score=score+100;
     coinGroup2.destroyEach();
   } 
   
   if(coinGroup3.isTouching(bunny4)){
     score=score+150;
     coinGroup3.destroyEach();
   } 
   
 if(thornGroup.isTouching(bunny4)){
      gameState=Restart;
      heartGroup.destroyEach();
      lives=lives-1;
  }
  
}

else if(gameState===Restart){
     ground1.velocityX=0;   
     bunny4.velocityY=0;
     white.visible=true;
     white.scale=0.6;
     restart2.visible=true;
   //  text("Lives: "+score,400,200);
   if(lives===2){
     
live2.visible=true;
   }
    else if(lives===1){
      

live1.visible=true;

    }
     //bunny4.visible=false;
     //thornGroup.setVisibleEach(false);
     //cloudsGroup.setVisibleEach(false);
     thornGroup.setVelocityXEach(0);
     tree0.setVelocityXEach(0);
     flower0.setVelocityXEach(0);
     ground3.setVelocityXEach(0);
     invi.setVelocityXEach(0);
     coinGroup1.destroyEach();
     coinGroup2.destroyEach();
     coinGroup3.destroyEach();

     spawnHeart();
    //change the trex animation
    bunny4.changeAnimation("collided",bunny5);
    
    //set lifetime of the game objects so that they are never destroyed
     thornGroup.setLifetimeEach(-1);
     tree0.setLifetimeEach(0);
     flower0.setLifetimeEach(0);
     ground3.setLifetimeEach(0);
     invi.setLifetimeEach(0);
   // cloudsGroup.setLifetimeEach(-1);
     if(lives===0){
    gameState=END;
    }


  if(mousePressedOver(restart2)){
        reset();
    }
      
} else if (gameState===END){
  bunny4.visible=false;   
  thornGroup.setVisibleEach(false);
     //bunny4.velocityY=0;
     white.visible=true;
     white.scale=0.85;
     trophie.visible=true;
     restart2.visible=false;
     ret.visible=true;
      gi.visible=true;
      live0.visible=true;
     //bunny4.visible=false;
     //thornGroup.setVisibleEach(false);
     //cloudsGroup.setVisibleEach(false);
     thornGroup.setVelocityXEach(0);
     tree0.setVelocityXEach(0);
     flower0.setVelocityXEach(0);
     ground3.setVelocityXEach(0);
     invi.setVelocityXEach(0);
    coinGroup1.destroyEach();
    coinGroup2.destroyEach();
    coinGroup3.destroyEach();
    heartGroup.destroyEach();
    //change the trex animation
    bunny4.changeAnimation("collided",bunny5);
    
    //set lifetime of the game objects so that they are never destroyed
     thornGroup.setLifetimeEach(-1);
     tree0.setLifetimeEach(0);
     flower0.setLifetimeEach(0);
     ground3.setLifetimeEach(0);
     invi.setLifetimeEach(0);
   // cloudsGroup.setLifetimeEach(-1);
     

  if(mousePressedOver(gi)){
        restart0();
    }
}

  drawSprites();
}

function reset(){
  gameState=PLAY;
  white.visible = false;
  trophie.visible=false;
  live2.visible = false;
  live1.visible = false;
  live0.visible = false;
  gi.visible=false;
  restart2.visible=false;

  thornGroup.destroyEach();
  tree0.destroyEach();
  flower0.destroyEach();
  ground3.destroyEach();
  invi.destroyEach();
 
  bunny4.changeAnimation("running",bunny);
  
}

function restart0(){
  gameState = SERVE;
  white.visible = false;
  trophie.visible = false;
  live0.visible=false;
  live1.visible=false;
  live2.visible=false;
  ret.visible=false;
  gi.visible=false;
  bunny4.visible=true;

 heartGroup.destroyEach();
  tree0.destroyEach();
  flower0.destroyEach();
  ground3.destroyEach();
  invi.destroyEach();
  thornGroup.destroyEach();
  coinGroup1.destroyEach();
  coinGroup2.destroyEach();
  coinGroup3.destroyEach();

  bunny4.changeAnimation("collided",bunny5);

  score = 0;
  lives=3;
  visited1=false;
  visited2=false;
  visited3=false;
  
}

function spawnground() {
  //write code here to spawn the clouds
    if (frameCount % 150 === 0) {
    var ground0 = createSprite(800,150);
    var invisible=createSprite(800,150);
    ground0.y = Math.round(random(100,200));
    ground0.addImage(ground2);
    invisible.x=ground0.x;
    invisible.y=ground0.y;
    invisible.width=ground0.width-45;
    invisible.height=10;
    invisible.velocityX=-(6 + 3*0/100);
    invisible.visible=false;
    //invisible.debug=true;
    invisible.setCollider("rectangle",0,10,ground0.width-50,65)
    ground0.scale = 0.75;
    ground0.velocityX = -(6 + 3*0/100);;
   // ground0.debug=true;
    ground0.setCollider("rectangle",0,-45,ground0.width,20)

     //assign lifetime to the variable
     ground0.lifetime = 800/3;
    
    //adjust the depth
    ground0.depth = bunny4.depth;
    bunny4.depth = bunny4.depth + 1;
    
    //add each cloud to the group
    ground3.add(ground0);
    invi.add(invisible);
  }
  
}

function spawntree() {
  
    if(frameCount % 180 === 0) {
    var tree1 = createSprite(800,280);
    //obstacle.debug = true;
    tree1.velocityX = -(6 + 3*0/100);
    tree1.addImage(tree);
    tree1.scale=0.85;

   tree1.depth=bunny4.depth;
   bunny4.depth=bunny4.depth+1;

    tree1.lifetime = 300;
    //add each obstacle to the group
    tree0.add(tree1);
  }
}

function spawnFlower() {
  
  if(frameCount % 100 === 0) {
  var flower1 = createSprite(800,350);
  //obstacle.debug = true;
  flower1.velocityX = -(6 + 3*0/100);
  flower1.addImage(flower);
  flower1.scale=0.1;

 flower1.depth=bunny4.depth;
 bunny4.depth=bunny4.depth+1;

  flower1.lifetime = 300;
  //add each obstacle to the group
  flower0.add(flower1);
}
}

function spawnThorns() {
  
    if(frameCount % 150 === 0) {
    var thorn = createSprite(800,340);
   // thorn.debug = true;
    thorn.velocityX = -(6 + 3*0/100);
    thorn.addImage(thorn1);
   // thorn.scale=0.85;
   thorn.setCollider("rectangle",0,0,150,100);

  // thorn.depth=bunny4.depth;
  // bunny4.depth=bunny4.depth+1;

    thorn.lifetime = 300;
    //add each obstacle to the group
    thornGroup.add(thorn);
  }}

function spawnHeart(){
  x=50;
  if(lives===3&&visited3===false){
    visited3=true;
    for(var i=0;i<3;i++){
      heart1=createSprite(x,50);
      heart1.addImage(heart);
      heart1.scale=0.65;
      heartGroup.add(heart1);
      x=x+60;
    }
  
  }
  if(lives===2&&visited2===false){

    visited2=true;
    for(var i=0;i<2;i++){
      heart1=createSprite(x,50);
      heart1.addImage(heart);
      heart1.scale=0.65;
      heartGroup.add(heart1);
      x=x+60;
    }
  

  }
  if(lives===1&&visited1===false){
    visited1=true;
    for(var i=0;i<1;i++){
      heart1=createSprite(x,50);
      heart1.addImage(heart);
      heart1.scale=0.65;
      heartGroup.add(heart1);
      x=x+60;
    }
  
 }


}

function spawnCoins(){
  if(frameCount%90===0){
    var rand=Math.round(random(1,3));
    var y=Math.round(random(50,150));
  if(rand===1){
        for(i=0;i<1;i++){
          
          coin=createSprite(800,y);
          coin.addImage(coinimg);
          coin.scale=0.2;
          coin.velocityX = -(6 + 3*0/100);
          coin.lifetime=200;
          coinGroup1.add(coin);
          
        }
        
    }
    else if(rand===2){
      for(i=0;i<2;i++){
          
        coin=createSprite(800,y);
        coin.addImage(coinimg);
        coin.scale=0.2;
        y=y+60;
        coin.velocityX = -(6 + 3*0/100);
        coin.lifetime=200;
        coinGroup2.add(coin);
      }

    }
    else{

      for(i=0;i<3;i++){
          
        coin=createSprite(800,y);
        coin.addImage(coinimg);
        coin.scale=0.2;
        y=y+60;
        coin.velocityX = -(6 + 3*0/100);
        coin.lifetime=200;
        coinGroup3.add(coin);
      }

    }
}
}



