var tree,tank,waterdrop,virus1,fulltank,cherrytree,bolt;

function preload() {

waterdrop  =  loadImage("Images/water.png");
tank  =  loadImage("Images/water-tank.png");
fulltank  =  loadImage("Images/water-tank (1).png");
virus1  =  loadImage("Images/virus.png");
tree =  loadImage("Images/tree.png");
cherrytree =  loadImage("Images/cherry-tree.png");
bolt=  loadImage("Images/thunder.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
 


Tree = createSprite(600,500,20,10);
Tree.addImage(tree);
Tree.scale = 0.6; 

Tank = createSprite(100,500,10,10);
Tank.addImage(tank);
Tank.scale = 0.4;

Fulltank = createSprite(150,500,20,10);
Fulltank.addImage(fulltank);
Fulltank.scale = 0.4;

Fulltank.visible = false;


Cherrytree = createSprite(500,250,20,10);
Cherrytree.addImage(cherrytree);
Cherrytree.scale = 0.6;

Cherrytree.visible = false;

Bolt = createSprite(300,50,20,10);
Bolt.addImage(bolt);
Bolt.scale = 0.3;

waterDropGroup = new Group();

}

function draw() {
  background(255,255,255);  
 for(var i=0;i<waterDropGroup.length;i++) {
   if(mousePressedOver(waterDropGroup.get(i))) {
    console.log(i);
waterDropGroup.get(i).destroy();

 }
}


  spawnVirus();
  spawnDrops();
  drawSprites();
}

function spawnDrops() {
  if(World.frameCount %30 === 0) {

    waterDrop =createSprite(200,100,20,20);
    waterDrop.addImage(waterdrop);
    waterDrop.scale = 0.12;
    waterDrop.velocityY = 5;  
    waterDrop.x = Math.round(random(75,displayWidth-15));
    waterDrop.lifetime = displayWidth/5;
  waterDropGroup.add(waterDrop);
  }

} 
function spawnVirus() {

  if(World.frameCount %100 === 0) {

    Virus = createSprite(300,100,20,10);
    Virus.addImage(virus1);
    Virus.scale = 0.1;
    Virus.velocityY = 7;
    Virus.x = Math.round(random(80,displayWidth-20));
    Virus.lifetime = displayWidth/7;
  
  }
}


