var Zenia , Tourus , Cyclap;
var wall1 , wall2 , wall3;
var border1 , border2 , border3;
var speed , weight;
var Deformation;
function setup()
{
  createCanvas(1500 , 500);
  Zenia = createSprite(200 , 80 , 30 ,30);
  Zenia.shapeColor = "white";

  Tourus = createSprite(200 , 235 , 30 , 30);
  Tourus.shapeColor = "white";

  Cyclap = createSprite(200 ,390 ,30 ,30);
  Cyclap.shapeColor = "white";

  
  wall1 = createSprite(1430 , 60 , 20 , 100);
  wall1.shapeColor = "white";

  wall2 = createSprite(1430 , 215 , 20 , 100);
  wall2.shapeColor = "white";

  wall3 = createSprite(1430 , 370 , 20 ,100);
  wall3.shapeColor = "white";


  border1 = createSprite(750 , 137 , 1500 , 5);
  border1.shapeColor = "white";

  border2 = createSprite(750 , 293 , 1500 , 5);
  border2.shapeColor = "white";

  border3 = createSprite(750 , 458  , 1500 , 5);
  border3.shapeColor = "white";

 speed = Math.round(random(55 , 90));
 weight = Math.round(random(400 , 1500));

 Zenia.velocityX = speed;
 Tourus.velocityX = speed;
 Cyclap.velocityX = speed;

 Zenia.weight = weight;
 Tourus.weight = weight;
 Cyclap.weight = weight;

Deformation = 0.5 *weight * speed * speed / 22500;

}

function draw()
{
  background("black");

 if(wall1.x - Zenia.x < wall1.width / 2 + Zenia.width / 2 || 
    wall2.x - Tourus.x < wall2.width / 2 + Tourus.width / 2||
    wall3.x - Cyclap.x < wall3.width / 2 + Cyclap.width / 2)
 {
   if(Deformation < 80)
   {
    Zenia.shapeColor = "green";
    Tourus.shapeColor = "green";
    Cyclap.shapeColor = "green";

    Zenia.velocityX = 0;
    Tourus.velocityX = 0;
    Cyclap.velocityX = 0;

   }
   else if(Deformation > 80 && Deformation < 180)
   {
    Zenia.shapeColor = "yellow";
    Tourus.shapeColor = "yellow";
    Cyclap.shapeColor = "yellow";

    Zenia.velocityX = 0;
    Tourus.velocityX = 0;
    Cyclap.velocityX = 0;
   }
   else if(Deformation > 180)
   {
    Zenia.shapeColor = "red";
    Tourus.shapeColor = "red";
    Cyclap.shapeColor = "red";

    Zenia.velocityX = 0;
    Tourus.velocityX = 0;
    Cyclap.velocityX = 0;
   }
 }


  drawSprites();
}