



var c = 255
var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(c);
	

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
			this.speed = 0;
			restGame;
			bird.lift = 0;
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
function mousePressed() {
   {
    bird.up();
    //console.log("SPACE");
  }
}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 9;

  this.show = function() {
   
		fill(500,0,500);  
    rect(this.x, this.y,20,50 )
		rect(this.x-30, this.y,20,50 )
		ellipse(this.x, this.y, 75,50);
		ellipse(this.x+40, this.y-20, 45  , 45);
		
		fill(0,0,0)
		ellipse(this.x+50,this.y-25, 10,10)
		triangle(this.x,this.y, 10,10,10)
		
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 15;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    
		}
		
    this.highlight = false;
    return false;
  }
var lives = 3;
  this.show = function() {
    fill(0,500,0);
    if (this.highlight) {
      fill(255, 0, 0);
		
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}


