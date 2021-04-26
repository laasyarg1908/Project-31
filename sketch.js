const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var maxDrops = 100;
var umbrella, umbrellaImg;
var lightning;
var lightning1, lightning2, lightning3, lightning4;
var thunderCreatedFrame, rand;
drops = [];

function preload()
{
    umbrellaImg = loadImage("images/walking_1.png");

    lightning1  = loadImage("images/1.png");
    lightning2  = loadImage("images/2.png");
    lightning3  = loadImage("images/3.png");
    lightning4  = loadImage("images/4.png");
}

function setup()
{
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(256, 288, 92);
}

function draw()
{
    background(0);
    Engine.update(engine);

    
   createThunder();

   
   if(thunderCreatedFrame + 10 === frameCount && lightning)
   { 
       lightning.destroy();
   }

   umbrella.display();
   image(umbrellaImg, 150, 220, 200, 200);

   if (frameCount % 150 === 0)
   {
        for(var i = 0; i<maxDrops; i++)
        { 
            drops[i].showDrop();
            drops[i].updateY();
        }
   }
 

    drawSprites();

}


function createThunder()
{
    rand = Math.round(random(1, 4));
   if (frameCount % 100 === 0)
   {
        
       thunderCreatedFrame = frameCount;
       lightning = createSprite(random(10, 370), random(10, 30), 10, 10);
       switch(rand){
           case 1: lightning.addImage(lightning1);
           break;
           case 2: lightning.addImage(lightning2);
           break;
           case 3: lightning.addImage(lightning3);
           break;
           case 4: lightning.addImage(lightning4);
           break;
           default: break;
       }
       lightning.scale = random(0.3, 0.6);
   }
}

function showDrop()
{
    if (frameCount % 50 === 0)
    {
        for (var i = 0; i< maxDrops; i++)
            {
                drops.push(new Raindrop(random(0,400),random(0,400)));
            }
    }
}
   
