//Create variables here
var dog,dogimg,dogimg1;
var database;
var food,foodstock;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  
  dag=createSprite(250,300,150,150);
  //dog.addImage(dogimg);
  dog.scale=0.15;

  foodStoke=database.ref('food');
  foodStoke.on("value",readStock);
  textSize(20);  
}


function draw() {  
fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,200);
textSize(13);
text("Note:Press UP_ARROW key To Feed Drago Milk!",130,10,300,20);
drawSprites();

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}


