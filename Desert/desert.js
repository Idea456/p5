//Desert program from Computer Science A level 9608_w17_qp_41 Q6
//By Adrian Rio

var animals = []
var animalCount = 10;

function setup() {
  createCanvas(1600, 1600);
  board = new Board();
  food = new Food();
  for (i = 0; i <= animalCount; i++) {
    animal = new Animal();
    animals.push(animal);
  }
}

function draw() {
  frameRate(1);
  background(255);
  board.show();
  food.show();
  for (i = 0; i < animals.length; i++) {
    animals[i].show();
    animals[i].move();
  }
}

function Board() {
  this.size = 40;

  this.show = function() {
    for (i = 0; i <= height; i++) {
      for (j = 0; j <= width; j++) {
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
    this.x += this.xspeed;
    this.y += this.yspeed;
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
}
