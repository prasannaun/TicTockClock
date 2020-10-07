var hr,mn,sc;
var scAngle;
var clock;

function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90); 

  hr = hour();
  mn = minute();
  sc = second();
  
 

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr %12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("orange");
  strokeWeight(7)
  line(0,0,110,0); 
  pop();

   
  push();
  rotate(mnAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,90,0);
  pop();


   
  push();
  rotate(hrAngle);
  stroke("cyan");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  stroke("orange");
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,scAngle);

 
  stroke("lime");
  strokeWeight(7);
  noFill();
  arc(0,0,260,265,0,mnAngle);

  
  stroke("cyan");
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,hrAngle);


  if(hour() === 12){
    textSize(20);
    fill("black");
    text("It is 12:00:00 am !!!!. Collect the key!",350,150);
  }

  point (0,0);

  drawSprites();
}