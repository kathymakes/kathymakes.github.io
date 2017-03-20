//Blinking LED

const int LED = 13;
const int BUTTON = 7; //val used to store state of input pin
int val = 0;
int old_val = 0; //store previous val of button
int state = 0; //toggle bt 1 and 0 to alter state of button
int i = 0;

void setup() {
pinMode (LED, OUTPUT); //tell Arduino LED is output
pinMode(BUTTON, INPUT);//sets BUTTON as input

}

void loop() {
  
val= digitalRead(BUTTON); //read input and store it 

 
//check if there's a transition
if ((val == HIGH) && (old_val == LOW)){
  state = 1-state; //toggle state
  delay(10);
}

old_val = val; // value is now old, let's store it


if (state == 0) {
  //turn LED on
  for (i = 0; i < 254; i++) { //loop from 0 to 254
    analogWrite(LED, i);
    delay(100);
    }

 } else {
  for (i = 255; i > 0; i--) {
    analogWrite(LED, i);
    delay(100);

  }
 }

  
}
