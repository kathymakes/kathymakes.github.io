var y = 100;

// var fontRegular;
var cnv;


function preload() {
   // fontRegular = loadFont("assets/Circular-Book.otf");

}

// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }


function setup() {
cnv = createCanvas(window.innerWidth, window.innerHeight);
cnv.parent('splash');
stroke(255);
frameRate(30);
// background(0,76,255);
background(255);

for (var i = 10 - 1; i >= 0; i--) {
var s = createSprite(random(windowWidth), random(40,windowHeight*.8), 400, 400);
  
  s.shapeColor = color(random(240,255), random(240,255), random(240,255));
  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-2, 2);
  s.velocity.y = random(-2, 2);

}
};



// function windowResized() {
//   centerCanvas();
// }

function draw() {
// background(122);
var blue = 255-mouseX/10;
var green = 255-mouseX/10;
var red = 255-mouseY/10;




y = y-1;
if (y < 0) {
	y = height/5;
}
stroke(0);
// line(0, 5*y, width, 5*y);
strokeWeight(0.5); 
textSize(80);
// textFont(fontRegular);
noStroke();
fill(red,green,blue);
// text("Kathy designs stuff.", 100, height/2);
// ellipse(mouseX, mouseY, 100,100);

// background(255, 255,255, 30);
drawSprites();

// if(isMousePressed){


//   //create a sprite at the mouse position and store it in a temporary variable
//   var s = createSprite(mouseX, mouseY, 500, 500);
//   //if no image or animation is associated it will be a rectancle of the specified size
//   //and a random color

  
// s.shapeColor = color(random(200,255), random(200,255), random(200,255));
//   //now you can use the variable to set properties
//   //e.g. a random velocity on the x and y coordinates
//   s.velocity.x = random(-2, 2);
//   s.velocity.y = random(-2, 2);
// }

}

function mousePressed() {
  
  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 400, 400);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  
// s.shapeColor = color(random(240,255), random(200,255), random(0,250));

s.shapeColor = color(random(100,255), random(160,255), random(160,255));
  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-1, 1);
  s.velocity.y = random(-1, 1);

}