let div;
let h1;
let p;
let x, y;
let img;
let thing;
let sheep;
let button;
let bg, blog, portfolio,email, nav;
let positions = [];
//let buttonX = 30;
//let buttonY = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nav = createDiv(['']).class('nav');  

  imageMode(CENTER);
  thing = new Thing();
  background(255, 255, 255, 0);
  buttons();
//  sheep = createImg('sheep.png');
}

function buttons() {
//  bg = createButton(['<a class = "plain">clear bg</a>']);
////  bg.position(buttonX, buttonY);
//  bg.mousePressed(resetBg);
    
  bg = createButton(['<a class = "plain">?</a>'])
  bg.mousePressed(resetBg);

  blog = createButton(['<a class = "plain" href= "http://blog.kaaathy.com" target="_blank">blog</a>'])

  portfolio = createButton(['<a class = "plain" href = "http://kaaathy.com/Kathy-Wu-Portfolio-2017.pdf" target="_blank">portfolio</a>']);

  email = createButton(['<a class= "plain" href="mailto:pondermake@gmail.com">e-mail</a>']);

  bg.parent(nav);
  blog.parent(nav);
  portfolio.parent(nav);
  email.parent(nav);
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
  }

}


function mousePressed() {
  if (mouseY > 100 || mouseX > 350){
  sheep = createImg('http://kaaathy.com/sheep.png');
  sheep.position(mouseX,mouseY);
  sheep.size('30','30');
  sheep.style('z-index','0');
}
}

class Thing {

  constructor() {
    this.d = width * 0.22;

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