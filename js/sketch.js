let div;
let h1;
let p;
let x, y;
let img;
let thing;
let button;
let positions = [];
let buttonX = 40;
let buttonY = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  thing = new Thing();
  background(255, 255, 255, 0);
  buttons();
  img = loadImage("sheep.png"); // Load the image
}

function buttons() {
  bg = createButton(['<a class = "plain">clear bg</a>']);
  bg.position(buttonX, buttonY);
  bg.mousePressed(resetBg);

}

function resetBg() {
  background(255, 232, 66);
}



function draw() {
  noStroke();
  thing.exist();
}

function mouseFun() {
  positions.push({
    x: mouseX,
    y: mouseY
  });

  if (positions.length > 20) {
    positions.shift();
  }

  for (let i = 0; i < positions.length; i++) {
    let x = positions[i].x;
    let y = positions[i].y;
    noStroke();
    image(img, mouseX, mouseY, 40, 40);
  }

}


function mousePressed() {
  image(img, mouseX, mouseY, 40, 40);
}

class Thing {

  constructor() {
    this.d = 300;

    this.x = random(this.d / 2, width - this.d / 2);
    this.y = random(this.d / 2, height - this.d / 2);
    this.speedY = 2;
    this.speedX = 1.5;

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.speedR = -0.5;
    this.speedG = 0.5;
    this.speedB = 0.2;
    this.c = color(this.r, this.g, this.b, 10);

  }


  exist() {
    fill(this.c);
    // stroke(255);
    ellipse(this.x, this.y, this.d, this.d);
    this.move();
    this.bounce();
    this.colorFun();

    // this.sizeChange();
  }


  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }


  bounce() {
    if (this.x > width - this.d / 2 || this.x < 0 + this.d / 2) {
      this.speedX *= -1;
    }

    if (this.y > height - this.d / 2 || this.y < 0 + this.d / 2) {
      this.speedY *= -1;
    }
  }

  colorFun() {

    //argh! redundant code!

    this.speedR = this.bounceColor(this.r, this.speedR);
    this.speedG = this.bounceColor(this.g, this.speedG);
    this.speedB = this.bounceColor(this.b, this.speedB);

    this.r = this.moveColor(this.r, this.speedR);
    this.g = this.moveColor(this.g, this.speedG);
    this.b = this.moveColor(this.b, this.speedB);

    this.c = color(this.r, this.g, this.b, 80);
    fill(this.c);


  }

  moveColor(rgb, speedRGB) {
    rgb += speedRGB;
    return (rgb);
  }

  bounceColor(rgb, speedRGB) {

    if (rgb >= 255 || rgb <= 0) {
      speedRGB *= -1;
    }
    return speedRGB;

  }

  //   sizeChange(){ 
  //     while(this.d < 500){
  //     this.d += mouseY/1000;
  //     }
  //     }



}