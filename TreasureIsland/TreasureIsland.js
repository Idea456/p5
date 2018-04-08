//Project from A level Computer Science
//By Adrian Rio

var island = [];
var count = 0;
var img;
var position;
var answer;

function setup() {
  createCanvas(1500,800);
	background(220);
  //randomize treasure positio
  position = byte(random(63));
	interface = new Interface();
  for(i = 0;i <= 7;i++) {
    for(j = 0;j <= 7;j++) {
      sand = new Sand(j * 75,i * 75);
			sand.addPosition(count);
      island.push(sand);
      count += 1;
    }
  }
  island[position].placeTreasure();
  console.log(island);
  console.log(position);

}
function draw() {
  for(i = 0;i < 64;i++) {
    island[i].show();
  }
	interface.show();
}

function preload() {
  img = loadImage('images/label.jpg');
}

function Sand(x,y) {
  this.x = x + 75;
  this.y = y + 75;
	this.position = 0;
  this.treasure = false;
  this.label = count;
  this.colour = [219,209,180];

  this.show = function() {
    fill(this.colour);
    strokeWeight(2);
    ellipse(this.x,this.y,75,75);
    textFont("Quicksand");
    fill(0);
    text(this.position,this.x,this.y+10);
    textAlign(CENTER);
    textSize(30);
  }

  this.placeTreasure = function() {
    this.treasure = true;
  }

  //dont modify this
	this.addPosition = function(pos) {
		this.position += pos;
	}

  this.showSand = function() {
    if(this.treasure == true) {
      this.position = "T";
      this.colour = [180,210,219];
    } else if(this.treasure == false){
      this.position = "E";
      this.colour = [219,190,180];
    }
  }
}


function Interface() {
  this.input = createInput();
	this.button = createButton("Submit");
  this.button2 = createButton("Show Treasure");
  this.button3 = createButton("Reset Game");

  //dont fcking modify this already
  this.show = function() {
    image(img,650,-30,800,377);
    this.input.position(700,250);
		this.button.position(860,252);
    this.button2.position(940,252);
    this.button3.position(1060,252);
		this.button.mousePressed(submit);
    this.button2.mousePressed(showTreasure);
    this.button3.mousePressed(resetGame);
  }
}

function submit() {
	answer = parseInt(interface.input.value());
  island[answer].showSand();
  interface.input.value('');
}

function showTreasure() {
  for(i = 0;i < island.length;i++) {
    island[i].showSand();
  }
}

function resetGame() {
  count = 0;
  position = byte(random(63));
  for(i = 0;i < island.length;i++) {
    island[i].colour = [219,209,180];
    island[i].position = count;
    island[i].treasure = false;
    count += 1;
  }
  island[position].placeTreasure();
}
