var trig1;
var trig2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  trig1 = new Trigger(width * .2, height * .9, color(235,20,20));
  trig1.display();

}

function draw() {
  //testing

  //testing merge
}

class Trigger {
  constructor(xPos, yPos, color){
    this.x = xPos;
    this.y = yPos;
    this.c = color
  }

  display(){
    strokeWeight(4);
    stroke(color);
    circle(this.x, this.y, 50);
  }

  move(){

  }
}
