var animals = []
//change the animal count here
var animalCount = 20;
var score = 0;
 
function setup() {
  createCanvas(2000,2000);
  board = new Board();
  food = new Food();
  for (i = 0; i <= animalCount; i++) {
    animal = new Animal();
    animals.push(animal);
  }
}
 
function draw() {
  //change the speed here
  frameRate(30);
  background(255);
  board.show();
  food.show();
  for (i = 0; i < animals.length; i++) {
    animals[i].show();
    animals[i].move();
    food.generateFood(animals[i].x,animals[i].y);
    animals[i].displayScore();
  }
 
}

function Board() {
  this.size = 40;
 
  this.show = function() {
    for (i = 0; i <= 1601; i++) {
      for (j = 0; j <= 1601; j++) {
        fill(255);
        rect(i, j, this.size, this.size);
        j += this.size - 1;
      }
      i += this.size - 1;
    }
  }
}
  
function Animal() {
  //generate a pair of random numbers between 0 and 39
  this.x = byte(random(39)) * 40;
  this.y = byte(random(39)) * 40;
  this.xspeed = 40;
  this.score = 0;
 
  //place animal at that random position
  this.show = function() {
    fill(255, 0, 0);
    rect(this.x, this.y, 40, 40);
    textSize(30);
    fill(0);
    text("A", this.x + 10, this.y + 30);
  }
 
  this.move = function() {
    //GenerateChangeInCoordinate function 
    this.xspeed = byte(random([-1,0,1]) * 40);
    this.yspeed = byte(random([-1,0,1]) * 40);
    check = false;
    while(check != true) {
      if((this.x + this.xspeed >= 1601) || (this.y + this.yspeed >= 1601)) {
        this.xspeed = byte(random([-1,0,1]) * 40);
        this.yspeed = byte(random([-1,0,1]) * 40);
      } else if((this.x + this.xspeed <= 0) || (this.y + this.yspeed <= 0)) {
				this.xspeed = byte(random([-1,0,1]) * 40);
        this.yspeed = byte(random([-1,0,1]) * 40);
			} else {
        check = true;
      }
    }
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
	
  this.displayScore = function() {
    text("Animal Score",1700,40);
    text(score,1780,80);
  }
}
 
function Food() {
  this.x = byte(random(39)) * 40;
  this.y = byte(random(39)) * 40;
	
  this.show = function() {
    fill(255, 0, 255);
    rect(this.x, this.y, 40, 40);
    textSize(30);
    fill(0);
    text("F", this.x + 10, this.y + 30);
  }

  this.generateFood = function(x,y) {
    if((x == this.x) && (y == this.y)) {
    this.x = byte(random(39)) * 40;
    this.y = byte(random(39)) * 40;
    score += 1;
    console.log("Food eaten!");
    }
  }
}
