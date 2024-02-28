var trig1;
var trig2;
var trig3;
var trig4;
let gameIsLive = true; //bool that determines if game is running

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  trig1 = new Trigger(width * .2, height * .9, 50, 'red');
  trig2 = new Trigger(width * .4, height * .9, 50, 'blue');
  trig3 = new Trigger(width * .6, height * .9, 50, 'green');
  trig4 = new Trigger(width * .8, height * .9, 50, 'orange');


}

function draw() {
  trig1.display();
  trig2.display();
  trig3.display();
  trig4.display();
}

function keyPressed(){
  if(keyCode == 49) {
    trig1.pressed = true;
  }
  if(keyCode == 50) {
    trig2.pressed = true;
  }
  if(keyCode == 51) {
    trig3.pressed = true;
  }
  if(keyCode == 52) {
    trig4.pressed = true;
  }
}


function keyReleased () {
    if(keyCode == 49) {
    trig1.pressed = false;
  }
  if(keyCode == 50) {
    trig2.pressed = false;
  }
  if(keyCode == 51) {
    trig3.pressed = false;
  }
  if(keyCode == 52) {
    trig4.pressed = false;
  }
}


class Trigger {
  constructor(xPos, yPos, size, color){
    this.x = xPos;
    this.y = yPos;
    this.size = size;
    this.c = color;

    this.pressed = false;
  }
  


  display(){
    stroke(this.c);
    strokeWeight(4);
    if(this.pressed == true){
      fill(this.c);
    }
    if(this.pressed == false){
      fill('black');
    }
    circle(this.x, this.y, 50);
  }

  move(){

  }
}



//this is the note class

class Note {
  constructor (xPos,yPos,diameter,color,speed) {
    this.x = xPos;
    this.y = yPos;
    this.d = diameter;
    this.c = color;
    this.speed = speed;
  }
  //move to Trigger
  getHitBox(){
    let r = this.diameter/2;
    let hitBoxUpper = this.y + r;
    let hitBoxLower = this.y - r;
    const hitBox = [hitBoxUpper,hitBoxLower];
    return hitBox;
  }

  getCenter(){
    return this.yPos;
  }
  
  display(){
    stroke(this.c);
    strokeWeight(4);
    circle(this.x,this.y,this.d);
  }
  //moves the target down the screen at
  movement(){    
    this.y = this.y-this.speed;
  }
}

function checkHitBox(trigger, note){

  letmyTrigger = myTrigger.getHitBox();
  myNote = note.getCenter();
  upperLimit = myTrigger[0];
  lowerLimit = myTrigger[1];
  
  //checks if  the center of the moving Note is within the trigger's circle
  if (myNote  > upperLimit && myNote < lowerLimit ){
      if(myTrigger.getCenter() == myNote.getCenter()){
          return "Perfect";
      }else{
        return "Great";
      }
  }

  if (myNote < upperLimit || myNote > lowerLimit){
    return "Missed";
  }
}
