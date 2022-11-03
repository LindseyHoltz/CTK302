let cars = [];
let tails = []; 
let x = 0; 
let frogPos;
let state = 0; 
let timer = 0; 
let i1, i2, i3, i4, i5, i6, i7, i8, i9;
let gif; 
var bird; 
var birds = []; 
var mouse; 
var mice = []; 
var gif_loadImg, gif_createImg; 
let f1;

function preload() {
  //gif_loadImg = loadImage("assets/cat.gif");
  //gif_createImg = createImg("assets/cat.gif");
  //gif = loadImage("assets/cat.gif"); 
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES); 
  //textAlign(CENTER); 

  //gif_loadImg = loadImage("assets/cat.gif");
  gif_createImg = createImg("assets/cat.gif");

  birds[0] = loadImage("assets/whitemouseright.png");
  birds[1] = loadImage("assets/whitemouseleft.png");

  bird = loadImage("assets/whitemouseright.png"); 

  mice [0] = loadImage("assets/greymouseright.png");
  mice [1] = loadImage("assets/greymouseleft.png");

  mouse = loadImage("assets/greymouseleft.png");

  i1 = loadImage("assets/menu.jpg");
  i2 = loadImage("assets/cat.gif");
  i3 = loadImage("assets/greymouse.gif");
  i4 = loadImage("assets/whitemouse.gif");
  i5 = loadImage("assets/whitemouseright.png");
  i6 = loadImage("assets/whitemouseleft.png");
  i7 = loadImage("assets/woodfloor.jpg");
  i8 = loadImage("assets/win.jpg");
  i9 = loadImage("assets/lose.jpg");


  f1 = loadFont("assets/mario.ttf");

  // Spawn objects

  for (let i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  for (let i = 0; i < 5; i++) {
    tails.push(new Tail ());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height / 2);
}

function draw() {
  
  switch(state) {
    case 0: //menu
      image(i1, 400, 400);
      push(); 
      fill("#61a06e"); 
      textFont(f1, 50); 
      text("click to start", x, height/2 - 80);
      x += 5; 

      if (x > width) {
        x = -450;
      }
      pop(); 

    gif_createImg.size(100, 215);
    gif_createImg.position(-100, -100, 100, 215);
      break;
      
    case 1: 
      image(i7, 400, 400, 800, 800); 
      game();
      timer++; 
      push();
      textFont(f1); 
      fill("black"); 
      textSize(30);
      text("Time: " + Math.trunc(20-timer / 60), 640, 50);
      pop();
      if(timer > 20*60) {
        timer = 0; 
        state = 3; 
      }
      break; 
      
    case 2: //win
      image(i8, 400, 400, 800, 800);
      gif_createImg.size(100, 215);
      gif_createImg.position(-100, -100, 100, 215);
      break;
      
    case 3: //lose
      image(i9, 400, 400, 800, 800);
      gif_createImg.size(100, 215);
      gif_createImg.position(-100, -100, 100, 215); 
      break;
      
      
  }
  
  
  
}

function resetTheGame() {
  
  cars = []; 
  
   for (let i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  timer = 0;

  tails = []; 
  
  for (let i = 0; i < 5; i++) {
   tails.push(new Tail());
 }

 timer = 0;
}




function mouseReleased() {
  switch(state) {
    case 0: // menu screen
      state = 1; 
      break;
    
    case 2: // win screen
      resetTheGame();
      state = 0; 
      break; 
      
    case 3: // lose screen
      resetTheGame();
      state = 0; 
      break; 
  }
}





function game() {
  //background("white");

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }

  for (let i = 0; i < tails.length; i++) {
    tails [i].display();
    tails [i].move();
    if (tails[i].pos.dist(frogPos) < 30) {
      tails.splice(i, 1);
    }
  }
  
  
  if ((cars.length == 0) && (tails.length ==0)) {
    state = 2; 
 }
  
  

  // add a "frog"
  gif_createImg.position(frogPos.x - 50 , frogPos.y - 50, 100, 215);
  //fill("red"); 
  //ellipse(frogPos.x, frogPos.y, 50, 50); 
  //image(i2, frogPos.x, frogPos.y, 100, 215); 
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 7;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 7;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 7;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 7;
  
  if (frogPos.x > width - 50) frogPos.x = 749; 
  if (frogPos.x < 0) frogPos.x = 0 ; 
  if (frogPos.y > height - 100) frogPos.y = 699; 
  if (frogPos.y < 0) frogPos.y = 0 ; 
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.place = createVector(random(width), random(height));
    this.velocity = createVector(random (-6, 6), random(1, 6));
    this.width = random(10, 50);
    this.height = random(90, 130); 
    this.rotate = random(0, 360);
    this.birdNum = floor(random(birds.length-1)); 
    this.mouseNum = floor(random(mice.length-1)); 
    this.timer = 0; 
    this.maxTimer = random(10,60); 
    //this.type = random(1);

    if(random(2) > 1) {
      this.birdNum; 
    } else {
      this.mouseNum; 
    }
  }
  // methods

  display() {
    // this can be text, images, or shapes
    //image (this.img, this.pos.x, this.pos.y, 50, this.height);

    image(birds[this.birdNum], this.pos.x, this.pos.y, 50, this.height);

    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0 ;
    }
  }


  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

class Tail {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.velocity = createVector(random (-6, 6), random(1, 6));
    this.width = random(10, 50);
    this.height = random(90, 130); 
    this.rotate = random(0, 360);
    this.mouseNum = floor(random(mice.length-1)); 
    this.timer = 0; 
    this.maxTimer = random(10,60); 
    //this.type = random(1);

    //if(random(2) > 1) {
      //this.birdNum; 
    //} else {
     // this.mouseNum; 
    //}
  }
  // methods

  display() {
    // this can be text, images, or shapes
    //image (this.img, this.pos.x, this.pos.y, 50, this.height);

    image(mice[this.mouseNum], this.pos.x, this.pos.y, 50, this.height);

    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.mouseNum = this.mouseNum + 1;
      if (this.mouseNum > mice.length - 1) this.mouseNum = 0;
      this.timer = 0 ;
    }
  }
  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}