//Create variables here
var database;
var img1,img2;
var dog ,happydog,foods,foodstock;
var food;
function preload()
{
  img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,350,20,20);
  dog.addImage(img1);
  dog.scale = 0.3;  
  food = new Food()
  food.getfoodstock();
}


function draw() {  
  background(46, 139, 87);
  food.display();
  drawSprites();
 /*if (keyWentDown(UP_ARROW)){
    writestock(foods);
    dog.addImage(img2);
  }*/

  //add styles here
  textSize(25);
  fill("white");
  text("Food left : "+ food.foodstock,150,100);
  
  
}



