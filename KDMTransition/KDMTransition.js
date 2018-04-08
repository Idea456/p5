var letter;
var preset; 
var letters = [];
let spacing = 80;
let x = 300 - spacing;
let y = 200;
let selection = 0;

//preset libraries
function presetLibrary(n) {
	switch(n) {
		case 0 :
			preset = ['H','@','L','L','O'];
			break;
		case 1 :
			preset = ['<','o','_','o','>'];
			break;
		case 2 :
			preset = ['☆','★','☆','★','☆'];
			break;
		case 3 :
			preset = ['f','o','r','{','}'];
			break;
		case 4 :
			preset = ['K','A','N','N','A'];
			break;
		case 5 :
			preset = ['o','カ','ン','ナ','o'];
			break;
		case 6 :
			preset = ['←','↑','→','↓','→'];
			break;
		case 7 :
			preset = ['1','+','1','=','?'];
			break;
		case 8 :
			preset = ['.','n','a','m','e'];
			break;
		case 9 :
			preset = ['Δ','Д','π','α','β'];
		case 10 :
			preset = ['=','=','=','=','>'];
	}
}
//choose preset here

function setup() {
	selection = random([0,1,2,3,4,5,6,7,8,9]);
	presetLibrary(selection);
  textSize(50);
  sound = loadSound("soundEffect.mp3");
  createCanvas(800,400);
  for(i = 0;i <= 4;i++) {
    letter = new Letter(x,y);
    letters.push(letter);
    x += spacing;
  }

  setTimeout(transition1,500);
  setTimeout(playEffect,500);
  setTimeout(transition2,1000);
  setTimeout(playEffect,1000);
  setTimeout(transition3,1500);
  setTimeout(playEffect,1500);
  setTimeout(transition4,2010);
  setTimeout(playEffect,2000);
  setTimeout(transition5,2500);
  setTimeout(playEffect,2500);
}

function draw() {
  background(252,242,50);
  for(i = 0;i < letters.length;i++) {
    letters[i].show();
  }
  //frameRate(1);
  noStroke();
}


function Letter(x,y) {
  this.x = x;
  this.y = y;
  this.adjustx = 5;
  this.size = 30;
  this.symbol = '●';
  this.transparency = 255;

  this.show = function() {
    textSize(this.size);
    text(this.symbol,this.x,this.y-this.adjustx);
  }
}

function playEffect() {
  sound.play();
}

function transition1() {
  letters[0].size = 50;
  letters[0].symbol = preset[0];
  letters[0].adjustx = 0;
  // letters[0].transparency = 0;
  // letters[0].letters();
}
function transition2() {
  letters[1].size = 50;
  letters[1].symbol = preset[1];
  letters[1].adjustx = 0;
}
function transition3() {
  letters[2].size = 50;
  letters[2].symbol = preset[2];
  letters[2].adjustx = 0;
}
function transition4() {
  letters[3].size = 50;
  letters[3].symbol = preset[3];
  letters[3].adjustx = 0;
}
function transition5() {
  letters[4].size = 50;
  letters[4].symbol = preset[4];
  letters[4].adjustx = 0;
}
