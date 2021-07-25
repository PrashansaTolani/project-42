var iss,spacecraft,hasDocked;
var issImage,spacecraft1Image,spacecraft2Image,spacecraft3,spacecraft4Image;


function preload(){
  spacebgImage = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  spacecraftImage1 = loadImage("spacecraft1.png");
  spacecraftImage2 = loadImage("spacecraft2.png");
  spacecraftImage3 = loadImage("spacecraft3.png");
  spacecraftImage4 = loadImage("spacecraft4.png");
  
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
hasDocked = false;
  iss = createSprite(500,100);
  iss.addImage("iss",issImage);
  iss.scale = 0.5;

  spacecraft=createSprite(500,300);
  spacecraft.addImage("normal",spacecraftImage1);
  spacecraft.scale=0.2;

}
function draw() {
  background(spacebgImage);  
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2);
    }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("blue")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}

