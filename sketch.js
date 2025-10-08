var sandy=0;
var jim=255;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   background(150,133,112); //green background
}

//The draw function happens over and over again
function draw() {
 
  stroke(255,139,127); //orangey pink
  fill(random(100,255),mouseY,127,jim); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))

 ellipse(random(300,500),random(400,500),130,mouseX); // center of canvas, 20px dia
 strokeWeight(5);
 line(sandy,500,400,sandy);
 
 textFont('Impact');
 textSize(80);
 text("Let's Party",100, 250);
 rect(mouseX,mouseY,sandy,sandy);
  strokeWeight(0);
 fill(230,20,230);

 ellipse(mouseX,mouseY,sandy,sandy);
}

function mousePressed(){

  if (sandy>=255) {
    sandy=0;
  } else {
    sandy=sandy+5;
  }

  if (jim<=0){
    jim=255;
  }else{
    jim=jim-5;
  }
  





}