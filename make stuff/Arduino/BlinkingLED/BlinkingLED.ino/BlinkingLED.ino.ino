//Blinking LED

const int LED = 13;
const int BUTTON = 7; //val used to store state of input pin
int val = 0;
int old_val = 0; //store previous val of button
int state = 0; //toggle bt 1 and 0 to alter state of button

void setup() {
pinMode (LED, OUTPUT); //tell Arduino LED is output
pinMode(BUTTON, INPUT);//sets BUTTON as input

}

void loop() {
val= digitalRead(BUTTON); //read input and store it 
// make it blinky (turned off)
digitalWrite(LED,HIGH);
delay(1000);
digitalWrite(LED,LOW);
delay(1000);


//check if there's a transition
if ((val == HIGH) && (old_val == LOW)){
  state = 1-state; //toggle state
  delay(10);
}

old_val = val; // value is now old, let's store it


if (state == 1) {
  digitalWrite(LED,HIGH); //turn LED on
  //turn LED on

 } else {
  digitalWrite(LED,LOW);
 }


////this is just to test the button...
//if (val == HIGH) {
//  digitalWrite(LED,HIGH);
//  
//} else {
//  digitalWrite(LED,LOW);
//
//}

}

