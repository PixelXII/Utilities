var x, y;
var nX, nY;

float radius = 50.0;


void setup() {
  width(200, 200);
  frameRate(30);
}

void draw() {
  radius = radius + sin(frameCount/4);
  background(255, 255, 248);
  fill(255, 145, 255);
  ellipse(x, y, radius, radius);
}

void mouseMoved() {
  nX = mouseX;
  nY = mouseY;
  }
