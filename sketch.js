var bk,bkImg;
var ship,shipImg;
var danger,dangerImg,dangerGroup;
var danger2,danger2Img,danger2Group;
var score = 0;
var diamond = 0;
var blast,blastImg;
var getReady,getReadyImg;
var PLAY = 1;
var END = 0;
var gameState = "PLAY";
var power,powerImg,powergroup;
var ship2,ship2Img;
var logo,logoImg;
var restart,restartImg;
var gameOver,gameOverImg;
var star,starImg,starGroup;






function preload(){
bk = loadImage("space/space.jpg");
shipImg = loadImage("battleship2.png");
dangerImg = loadImage("alienballs.png");
danger2Img = loadImage("enemy2.png");
blastImg = loadImage("explosion.png");
getReadyImg = loadImage("getready.png");
powerImg = loadImage("energy.png");
winsound = loadSound("goal1.mp3");
blastSound = loadSound("failure.mp3");
bgmusic = loadSound("bgMusic.mp3")
ship2Img = loadImage("bs4.png");
logoImg = loadImage("logo3.png");
restartImg = loadImage("restart.png");
gameOverImg = loadImage("gameover2.png");
starImg = loadImage("dimond.png")
}



function setup(){
createCanvas(1536,753);

ship2 = createSprite(750,400);
ship2.addImage("ship2",ship2Img);
ship2.scale = 0.7;
ship2.visible = false;

getReady = createSprite(800,600);
getReady.addImage("getReady",getReadyImg);
getReady.scale = 1;
getReady.visible = true;

gameOver = createSprite(800,300);
gameOver.addImage("gameOver",gameOverImg);
gameOver.scale = 2.5;
gameOver.visible = false;

logo = createSprite(800,400);
logo.addImage("logo",logoImg);
logo.scale = 1;
logo.visible = true;

score = 0;
diamond = 0;


restart = createSprite(300,140);
  restart.addImage(restartImg);
  restart.visible = false;

blast = createSprite(750,400);
  blast.addImage(blastImg);
  blast.scale = 2;
  blast.visible = false;

  dangerGroup = new Group();
  powergroup = new Group();
  starGroup = new Group();
  danger2Group = new Group();
}






function draw(){
background(bk);
if (gameState==="PLAY"){
  bgmusic.play();

  textSize(30);
  fill("orange");
  text("**Your Mission is completed while returning you were attacked by Aliens ** ",22 ,50,);
  text("**You do not have any Weapons you just have to escape from there and Save your self ALL THE BEST  **",22,80);
  text("**press space to play*",22,110);
  text("# Score #: "+ score, 90,700);
  text("# Diamonds #: "+ diamond, 90,660);

  

  var select_danger = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_danger == 1) {
      danger();
    
    }
  }  

  
  var select_power = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_power == 1) {
      power1();
    
    }
  }  

  var select_star = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_star == 1) {
      stars();
    
    }
  }  

  var select_danger2 = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_danger2 == 1) {
      dangerr2();
    
    }
  }  

  

  edges= createEdgeSprites();
  ship2.collide(edges);

  
  
  if(keyDown("LEFT_ARROW")){
    ship2.addImage(shipImg);
    ship2.x = ship2.x-20;
  }
  
  if(keyDown("RIGHT_ARROW")){
    ship2.x = ship2.x+20;
    ship2.addImage(shipImg);

  }
  
  if(keyDown("UP_ARROW")){
    ship2.y = ship2.y-20;
    ship2.addImage(shipImg);

  }
  
  if(keyDown("DOWN_ARROW")){
    ship2.y = ship2.y+20;
    ship2.addImage(shipImg);

  }
  
  if(keyDown("space")){
    ship2.visible = true;
    getReady.visible = false;
    logo.visible = false;

    

    gameState = "PLAY";
  }

  
  
  if(powergroup.isTouching(ship2)){
    score = score + 1;
    power.visible = false;
    winsound.play();

    
}

if(starGroup.isTouching(ship2)){
  diamond = diamond + 1;
  star.visible = false;
  winsound.play();

  
}


  if(dangerGroup.isTouching(ship2)){
    gameState = "END";
    blastSound.play();
}

if(danger2Group.isTouching(ship2)){
  gameState = "END";
  blastSound.play();
}
  
}
else if (gameState === "END") {
  bgmusic.stop();
  blast.x = ship2.x;
  blast.y = ship2.y;
  blast.visible = true;
  ship2.velocity = 0;
  gameOver.visible = true;
  



  dangerGroup.setVelocityXEach(0);
  dangerGroup.setLifetimeEach(-1);
  danger.visible = false;
  textSize(35);
  text("# Score #: "+ score, 90,700);
  text("# Diamonds #: "+ diamond, 90,660);



  }

  

drawSprites();

}

function danger() {
  var danger = createSprite(Math.round(random(200, 2000)),5, 10, 10);
  danger.addImage(dangerImg);
  danger.velocityY = 20;
  danger.visible = true;
  danger.lifetime = 150;
  danger.scale = 0.3;
  dangerGroup.add(danger);
  


  
}

function power1() {
   power = createSprite(Math.round(random(333, 2000)),3, 60, 60);
  power.addImage(powerImg);
  power.velocityY = 20;
  power.visible = true;
  power.lifetime = 150;
  power.scale = 2;
  powergroup.add(power);



  
}

function stars() {
  star = createSprite(Math.round(random(333, 2000)),3, 60, 60);
  star.addImage(starImg);
  star.velocityY = 20;
  star.visible = true;
  star.lifetime = 150;
  star.scale = 0.3;
 starGroup.add(star);



 
}

 
function dangerr2() {
  danger2 = createSprite(Math.round(random(500, 2000)),0, 50, 50);
  danger2.addImage(danger2Img);
  danger2.velocityY = 25;
  danger2.visible = true;
  danger2.lifetime = 150;
  danger2.scale = 0.4;
 danger2Group.add(danger2);



 
}

