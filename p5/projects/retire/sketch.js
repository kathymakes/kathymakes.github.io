 let data;
 let next = 0;

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
let everything;


 function preload() {
 	let url = 'thankyou-2.json';
 	data = loadJSON(url);

    thankyou = createAudio('thankyou.m4a');
    mainpart = createAudio('audio1.m4a');
    everything = createAudio('everythingmustgo.m4a');


 	// img1 = loadImage('pics/womenworking1.jpg');
	img2 = loadImage('pics/womenworking2.jpg');
 	img3 = loadImage('pics/siri.gif');
  	img4 = loadImage('pics/cvs3.gif');
  	img5 = loadImage('pics/alexa.jpeg');
  	// img6 = loadImage('pics/loom.gif');



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
 	createCanvas(800, 600);
 	background(0);
 	imgArray = [img2,img3,img4,img5];
  	imgDisplay = random(imgArray);

 	textSize(40);
 	textAlign(CENTER);

 	mainpart.play();

 }

 function draw() {
	fill(255);
 	image(img4, 0, 0, width, height);
	text(data[next], width/2, height/2);

 	// print(data[11]);
 	// print(data.length);
	
 }  

function keyPressed(){
	// incrementImg();
	incrementText();


}

 function incrementText(){
 	if (next < 1000 - 1) {
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

