var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
  createCanvas(410,410); 
  //To use angle in Degrees
  angleMode(DEGREES);   
}


function draw() {
  background("indigo");

  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();


  scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    

  push();
  rotate(scAngle)
  stroke(255,0,100);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle)
  stroke(150,150,255);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  push();
  rotate(hrAngle)
  stroke(100,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  stroke(255,0,255);
  point(0,0)

 strokeWeight(10);
 noFill();
 stroke(255,0,100);
 arc(0,0,300,300,0,scAngle);
 stroke(150,150,255);
 arc(0,0,245,245,0,mnAngle);
 stroke(150,0,255);
 arc(0,0,200,200,0,hrAngle);
}
