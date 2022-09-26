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
      text("This is George. He has had many professions throughout his lifetime including...", width/2 - 150, height/2 + 150, 300, 300);
      fill("black");
      textSize(20);
      image(i1, width/2, height/2 - 50, 300, 350) ;
      timer++ ;
      if (timer > 4*60){
        timer = 0; 
        state = 1;
      }
      break; 
      
    case 1:
      //images and text
      text("An elf in Santa's work shop.", width/2 - 150, height/2 + 150, 300, 300);
      fill("black");
      textSize(20);
      image(i2, width/2, height/2 - 50, 300, 350) ;
      timer++ ;
      if (timer > 3*60){
        timer = 0; 
        state = 2;
      }
      break; 
      
    case 2:
      //images and text
      text("A baseball player for the Chicago Cubs.", width/2 - 150, height/2 + 150, 300, 300);
      fill("black");
      textSize(20);
      image(i3, width/2, height/2 - 50, 300, 350) ;
      timer++ ;
      if (timer > 5*60){
        timer = 0; 
        state = 3;
      }
      break; 

    case 3:
      //images and text
      text("A Dunkin' Donuts worker.", width/2 - 150, height/2 + 150, 300, 300);
      fill("black");
      textSize(20);
      image(i4, width/2, height/2 - 50, 300, 350) ;
      timer++ ;
      if (timer > 6*60){
        timer = 0; 
        state = 4;
       }
       break; 

    case 4:
      //images and text
      text("A magician in Vegas. He goes by the name Mr. Lop when he performs.", width/2 - 150, height/2 + 150, 300, 300);
      fill("black");
      textSize(20);
      image(i5, width/2, height/2 - 50, 300, 350) ;
      timer++ ;
      if (timer > 7*60){
        timer = 0; 
        state = 5;
      }
      break; 

    case 5:
      //images and text
      text("And finally the King of Rabbits (and other small creatures).", width/2 - 150, height/2 + 100, 300, 300);
      fill("black");
      textSize(20);
      image(i6, width/2, height/2 - 50, 350, 280) ;
      timer++ ;
      if (timer > 8*60){
        timer = 0; 
        state = 6;
      }
      break; 
  }

  if (state > 5) {
    state = 0; 
  }
}

