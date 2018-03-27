//introduce global variables
var mirrorText;
var mirrorSplit;
var index;
var drawCount;

//runsonceinthebeginning
function setup() {
  // put setup code here
  mirrorText = "fuck you";
  //split text into units, whatever is inside of quotes will be deleted and string will be chuncked between
  mirrorSplit = mirrorText.split(" ");
  //build a canvas
  createCanvas(windowWidth, windowHeight);
  //use a font
  textFont("Helvetica", 40)
  index = 0;
  //adjust rate of run
  //frameRate(40);
  //give an initial value to draw count
  drawCount = 0;
}

//runs60timesasecond
function draw() {
	//clear screen at the beginning of each run 
	//background(0);
  // put drawing code here
  //color for text
  stroke(0);  
  fill(225,0,0);
  //insert text and center location
  translate(windowWidth/2, windowHeight/2);
  textAlign(CENTER);
  //making text placement random each time it runs 
  //text(mirrorText, random(-300, 300), random(-900, 900));
  //making new text
  text(mirrorSplit[index], 0, random(-300,300));
   //
  //drawCount = drawCount + 1;
  //modulus (if draw count divided by some number has a 0 remainder)
  //if(drawCount % 10 == 0) {
  //
  index = index + 1;
  //turn around if index goes out of range of string object length
  if(index >= mirrorSplit.length) {
  	index = 0;
  }
//}

  draw2()
}

//runs60timesasecond
function draw2() {
  // put drawing code here
  //color for text
  stroke(0,0,0);  
  fill(random(0,225), random(0,225), random(0,225));
  //insert text and center location
  
  textAlign(CENTER);
  //making text placement random each time it runs 
  text(mirrorText, random(-600, 600), random(-900, 900));
  
}