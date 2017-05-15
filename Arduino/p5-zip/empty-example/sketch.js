var y = 100;

// var fontRegular;
function preload() {
   // fontRegular = loadFont("assets/Circular-Book.otf");

}


function setup() {
createCanvas(window.innerWidth, window.innerHeight);
stroke(255);
frameRate(30);
background(255);


}

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

background(255, 255,255, 30);
drawSprites();

}

function mousePressed() {
  
  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  
s.shapeColor = color(random(255), random(255), random(255));
  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);

}