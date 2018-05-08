var x, y;
var nX, nY;

float radius = 50.0;


void setup() {
  width(600, 600);
  frameRate(30);
}

void mouseMoved() {
  x = mouseX;
  y = mouseY;
  }


void draw() {
  ellipse(x, y, radius, radius)
}

