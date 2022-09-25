let state = 0; 
let timer = 0;
let i1, i2, i3, i4, i5, i6;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/george.jpg") ;
  i2 = loadImage("assets/elf.jpg") ;
  i3 = loadImage("assets/cubs.jpg") ;
  i4 = loadImage("assets/coffee.JPG") ;
  i5 = loadImage("assets/tophat.jpg") ;
  i6 = loadImage("assets/king.JPG") ;
  imageMode(CENTER);
}

function draw() {
  background(220);
  
  switch(state){
    case 0:
      //images go here, text here
      image(i1, width/2, height/2 - 130, 200, 100) ;
      timer++ ;
      if (timer > 3*60){
        timer = 0; 
        state = 1;
      }
      break; 
      
    case 1:
      //images and text
      image(i2, width/2, height/2 - 130, 200, 100) ;
      timer++ ;
      if (timer > 4*60){
        timer = 0; 
        state = 2;
      }
      break; 
      
    case 2:
      //images and text
      image(i3, width/2, height/2 - 130, 200, 100) ;
      timer++ ;
      if (timer > 5*60){
        timer = 5; 
        state = 3;
      }
      break; 

    case 3:
      //images and text
      image(i4, width/2, height/2 - 130, 200, 100) ;
      timer++ ;
      if (timer > 6*60){
        timer = 6; 
        state = 4;
       }
       break; 

    case 4:
      //images and text
      image(i5, width/2, height/2 - 130, 200, 100) ;
      timer++ ;
      if (timer > 7*60){
        timer = 7; 
        state = 5;
      }
      break; 

    case 5:
      //images and text
      image(i6, width/2, height/2 - 130, 200, 100) ;
      timer++ ;
      if (timer > 8*60){
        timer = 8; 
        state = 6;
      }
      break; 
  }

  if (state > 5) {
    state = 0; 
  }
}

