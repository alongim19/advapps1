
function setup() { 
  createCanvas(800, 800);	
r = random(255);
g = random(255);
b = random(255);
	background(r,b,g);
	frameRate(120)
} 

function draw() { 
}

function mouseDragged(){
	  noStroke();
	ellipse(mouseX,mouseY,40,40)
	fill(g,r,b)
}

function mouseWheel(){
	r = random(255);
g = random(255);
b = random(255);
	background(r,b,g)
	
}





