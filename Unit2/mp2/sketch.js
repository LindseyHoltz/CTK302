let state = 0;
let mic;
let vol = 0;
let approachingVol = 0;
let x = 0;
let t = 0; 
let r = 0; 
let v = 2;
let y = 0;
let timer = 0; 
let i1, i2, i3, i4, i5, i6, i7, i8;
let bi, b2, b3, b4, b5, b6; 
let s1, s2, s3; 
let f1; 

let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 1.00; // how responsive do you want this? Higher numbers mean faster response.

function preload() {
  s1 = loadSound("assets/8bit.mp3"); 
  s2 = loadSound("assets/watermelon.mp3"); 
  s3 = loadSound("assets/sad.mp3"); 
}

function setup() {
  createCanvas(1100, 700); 
  i1 = loadImage("assets/grass.png");
  i2 = loadImage("assets/tree.png");
  i3 = loadImage("assets/straw.png");
  i4 = loadImage("assets/turtle.png"); 
  i5 = loadImage("assets/runningrabbit.png");
  i6 = loadImage("assets/sadturtle.png");
  i7 = loadImage("assets/turtlestretch.png");
  i8 = loadImage("assets/happyturtle.png");

  b1 = loadImage("assets/fulltitlescreen.png");
  b2 = loadImage("assets/start.png");
  b3 = loadImage("assets/startgame.png");
  b4 = loadImage("assets/playagain.png");
  b5 = loadImage("assets/tryagain.png");
  b6 = loadImage("assets/titlescreen.png");
  b7 = loadImage("assets/instructions.png"); 

  f1 = loadFont("assets/bubbly.otf");
  

  // code for initializing mic in.
	mic = new p5.AudioIn(); // what does "new" mean?
	mic.start();

  rectMode(CENTER); 

  angleMode(DEGREES);

  textAlign(CENTER); 

  textSize(20); 

}

function draw() {

  background(100);
    
  switch (state) {

    case 0: //start screen
    background("lightblue"); 
     image(b1, 0, 0, 1100, 700); 
     image(b2, width/2 - 195, height/2 + 50, 390, 250); 

     if (!s1.isPlaying()){
      s1.play();
    }

      reset(); 
      break;

    case 1: //instructions

      s3.stop();

      if (!s1.isPlaying()){
        s1.play();
      }

      image(b7, 0, 0, 1100, 700);
      image(b3, 870, 560, 220, 130);

      reset(); 
      
      break;

    case 2: //gameplay

      s1.pause(); 

      background("lightblue"); 
      image(i1, 0, 600, 1100, 100);
      image(i2, -115, -10, 380, 690); 
      image(i3, 195, 220, 80, 120); 

      timer++;
        if (timer > 15 * 60) {
        timer = 0;
        state = 5;
      }
      push(); 
      textFont(f1, 50);
      fill(226, 144, 144); 
      text("Cheer on the turtle!", 700, 300); 
      pop(); 

      push();
      fill(226, 144, 144); 
      textSize(30);
      text("Time: " + Math.trunc(15-timer / 60), 1015, 50);
      pop();

      // get the sound input
	    vol = mic.getLevel(); // returned level is between 0 and 1

	    // make a "gradual" easing variable that approaches the original vol
	    approachingVol += (vol - approachingVol) * ease;

	    // text on the screen for debugging
	    //textSize(18);
	    //text(
	  	//"Click the screen first to give\npermission for mic input.\nThe more noise you make, the faster the dino can run!\nMy volume is " +
			//vol.toFixed(3) +
			//"\nApproaching Vol = " +
			//approachingVol.toFixed(3),
		  //10,
		  //60
	    //);

      // this moves that first box
      //  x = vol*200 ;
      // x = map(vol, 0, theLoudestItGets, 0, width);

      x = x + vol * 35;
      if (x > width) x = -200 ; 

      if (x >= 800 && x <= 1200) {
        mic.stop();
        state = 3;   
      }

      image(i4, 1100 - x, 425, 400, 250);

      //push();
        //translate(r, 0);
        //rabbit();
        //r = r + v; 
        //r += 5;
        //if (r >= 800 && r <= 1050) {
         // state = 5;
       // }
        //v = 4; 
      //pop();

      break;
    
    case 3: //gameplay continued

      background("lightblue"); 
      image(i1, 0, 600, 1100, 100);
      image(i2, -115, -10, 380, 690); 
      image(i7, 300, 375, 400, 300); 
      image(i3, 195, 220, 80, 120);

      if (!s1.isPlaying()){
        s1.play();
      }

      push(); 
      textFont(f1, 50);
      fill(226, 144, 144); 
      text("Shake the branch!", 700, 300); 
      pop(); 

      //rect(140, 150, 200, 300); 

      break;

    case 4: //gameplay continued

      background("lightblue"); 
      image(i1, 0, 600, 1100, 100);
      image(i2, -115, -10, 380, 690); 
      image(i7, 300, 375, 400, 300); 
      
      image(i3, 195, 220 + y, 80, 120);
      y += 5;
      y = y + 5;
      
      if (y >= 350 && y <= 470 + v) {
        y = 350; 
      }

      push(); 
      textFont(f1, 50);
      fill(226, 144, 144); 
      text("Grab the strawberry!", 700, 300); 
      pop(); 

      //rect(235, 630, 80, 120); 
      
      break;

    case 5: //game over(lose screen)

      s1.pause(); 

      if (!s3.isPlaying()){
        s3.play();
      }
      
      background("lightblue"); 
      image(i1, 0, 400, 1600, 300);
      image(i6, 255, 90, 850, 600);
      image(b5, 50, 200, 250, 150); 

      push(); 
      textFont(f1, 50);
      fill("red"); 
      text("You failed to grab the strawberry", 450, 150, 400, 200); 
      pop(); 

      reset(); 
      
      break;

    case 6: //win screen

    s1.pause(); 

    if (!s2.isPlaying()){
      s2.play();
    }  

      background("lightblue"); 
      image(i1, 0, 400, 1600, 300);
      image(i8, 500, 50, 850, 600);
      image(b4, 50, 150, 200, 100);
      image(b6, 250, 250, 200, 100); 

      push();
      imageMode(CENTER); 
      translate(250, 500); 
      rotate(45); 
      translate(-250, -500); 
      image(i3, 250, 500, 240, 320);
      pop(); 
    
      push(); 
      textFont(f1, 50);
      fill(255, 144, 144); 
      text("You win!!!", 450, 150); 
      pop(); 

      reset(); 
        
      break;

  }


}

//function rabbit() {
  //image(i5, 1100, 425, 400, 250); 
//}

function reset() {
  timer = 0; 
  x = 0; 
  y = 0; 
}

function mouseReleased() {

  if ((state == 0) && (mouseX > 355) && (mouseX < 745) && (mouseY > 400) && (mouseY < 650)) {
    state = 1;
    //s1.pause();
    s2.pause(); 
    s3.pause(); 
    }
  if ((state == 1) && (mouseX > 870) && (mouseX < 1090) && (mouseY > 560) && (mouseY < 690)) {
    state = 2;
    mic.start(); 
    //s1.pause();
    s2.pause(); 
    s3.pause(); 
    }
  if ((state == 3) && (mouseX > 70) && (mouseX < 210) && (mouseY > 0) && (mouseY < 300)) {
    //branch pressed
    state = 4
    //s1.pause();
    s2.pause(); 
    s3.pause(); 
    }
  if ((state == 4) && (mouseX > 195) && (mouseX < 275) && (mouseY > 570) && (mouseY < 690)) {
    //strawberry pressed
    state = 6;
    //s1.pause();
    s2.pause(); 
    s3.pause(); 
    }
  if ((state == 5) && (mouseX > 50) && (mouseX < 300) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;
    s1.pause();
    s2.pause(); 
    //s3.pause(); 
    }
  if ((state == 6) && (mouseX > 50) && (mouseX < 250) && (mouseY > 150) && (mouseY < 250)) {
    state = 2;
    mic.start(); 
    s1.pause();
    s2.pause(); 
    s3.pause(); 
    }
  if ((state == 6) && (mouseX > 250) && (mouseX < 450) && (mouseY > 250) && (mouseY < 350)) {
    state = 0;
    s1.pause();
    s2.pause(); 
    //s3.pause(); 
    }
  
  if (state > 6) state = 0; 
}

function touchStarted() {
  getAudioContext().resume();
}
