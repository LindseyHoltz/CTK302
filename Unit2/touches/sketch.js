let numberOfTouches ;
let i1, i2, i3; 

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/mydrink.jpeg") ;
  i2 = loadImage("assets/spongebob.webp") ;
  i3 = loadImage("assets/patrick.webp") ;
  imageMode(CENTER);
  textSize(15);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Touch the screen for a Spongebob meme.", 5, 22) ; 
      break ;
      
      case 1: 
      image(i1, width/2, height/2, 200, 200);
       text("Wow so great! Touch the screen with another finger for a new meme.", 5, 22) ; 
      // put a picture here
      break ;
      
      case 2:
      image(i2, width/2, height/2, 200, 200);
      text("This is a good one! Press the screen with another finger for a new meme.", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
      image(i3, width/2, height/2, 200, 200);
      text("Wow! This is the last meme!", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}
