let i1, i2, i3 ;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/jupiter.jpg") ;
  i2 = loadImage("assets/kinggeorge.jpg") ;
  i3 = loadImage("assets/spongebob.png") ;
  imageMode(CENTER);
}

function draw() {
  background("grey");
  image(i1, width/2, height/2 - 130, 200, 100) ;
  image(i2, width/2, height/2, 100, 125) ;
  image(i3, width/2, height/2 + 130, 200, 100) ;
}
