 var data;
 var next = 0;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let imgDisplay;
let imgArray = [];

let thankyou;
let mainpart;


 function preload() {
 	var url = 'thankyou-2.json';
 	data = loadJSON(url);

    thankyou = createAudio('thankyou.m4a');
    mainpart = createAudio('audio1.m4a');

 	img1 = loadImage('pics/womenworking1.jpg');
	img2 = loadImage('pics/womenworking2.jpg');
 	img3 = loadImage('pics/siri.gif');
  	img4 = loadImage('pics/cvs3.gif');
  	img5 = loadImage('pics/alexa.jpeg');
  	img6 = loadImage('pics/loom.gif');

//  data=[

// "thank you for all you do.",
// "thank you for allowing.", 
// "thank you for all your work.", 
// "thank you for all the effort.", 
// "thank you for all you do meaning.", 
// "thank you for all you've done lyrics.", 
// "thank you for all of your assistance."]
//  }

}
 function setup() {
 	createCanvas(windowWidth, windowHeight);
 	background(0);
 	imgArray = [img1,img2,img3,img4,img5,img6];
  	imgDisplay = random(imgArray);

 	textSize(40);
 	textAlign(CENTER);
 	print(data.length);

 }

 function draw() {
	fill(255);
 	image(imgDisplay, 0, 0, width, height);
	text(data[10], width/2, height/2);

 	print(data[11]);
 	print(data.length);
	
 }  

function keyPressed(){
	// incrementImg();
	incrementText();


}

 function incrementText(){
 	if (next < data.length - 1) {
 			next++; 
 
 		}
 		else {
 			next = 0;
 		}
 }

  function incrementImg(){
 	imgDisplay = random(imgArray);
 }

 // function textTimer(){
 // 	var time = Math.floor(millis());
 // 	if(time % 50 == 0){
 // 		incrementNext();
 // 	}
 // 	else {

 // 	}
 // }

