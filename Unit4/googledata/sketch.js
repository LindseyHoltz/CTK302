var bubbles = [];
let url = "";
let x = 0; 
let f1, f2; 
let turtle; 
let rabbit; 
let grump; 
let lucy; 
let clouds; 
let s1;

function preload() {
  s1 = loadSound("assets/lion.mp3"); 
}

function setup() {
  let key = "1idT9q1ur35kSE8R7iUl8b1VU9LoAnb3B8c3tAVmJ518"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(900, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  turtle = loadImage("assets/happyturtle.png");
  rabbit = loadImage("assets/rabbit.png");
  grump = loadImage("assets/cat3.png");
  lucy = loadImage("assets/cat2.png");
  clouds = loadImage("assets/clouds.png"); 

  f1 = loadFont("assets/fridaybeach.ttf");
  f2 = loadFont("assets/star.ttf");

  s1.play();
  s1.loop(); 

}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your name?"],
        data[i]["What is your favorite animal?"],
        data[i]["DC or Marvel?"],
        data[i]["Best SpongeBob Character?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  //image(clouds, 600, 900, 300, 450);
  background(212, 234, 250);
  
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(name, animal, hero, spongebob) {
    // only the order of these parameters matters!
    this.name = name;
    this.animal = animal;
    this.hero = hero;
    this.spongebob = spongebob; 
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.color = color(random(255), random(255), random(255)); 
    this.width = random(200, 240); 
    this.height = random(140, 180); 
  }

  display() {
    image(lucy, this.pos.x, this.pos.y - 100, 125, 100); 
    //image(grump, 100, 100, 125, 200); 
    //image(turtle, 100, 100, 100, 100); 
    image(rabbit, x - 350, 250, 140, 115); 

    push(); 
    fill("black"); 
    textFont(f2, 50); 
    text("CTK 302 Survey!", x, 300 ); 
    x += 0.5;

    if (x > width + 400) {
      x = -1000;
    }
    pop(); 
    push(); 
    //stroke("lightblue");
    fill(this.color);
    ellipse(this.pos.x, this.pos.y+10, this.width, this.height);
    pop(); 
    fill("black");
    textFont(f1, 25); 
    text(
      this.name + "\n" + this.animal + "\n" + this.hero + "\n" + this.spongebob,
      this.pos.x,
      this.pos.y - 30
    );
    
    //this.pos.add(this.vel);
    //if (this.pos.x > width) this.pos.x = -10; 
  
    this.pos.add(this.vel);
    if (this.pos.x > width + 100) this.pos.x = 0 - 100;
    if (this.pos.x < 0 - 100) this.pos.x = width + 100;
    if (this.pos.y > height + 100) this.pos.y = 0 - 100;
    if (this.pos.y < 0 - 100) this.pos.y = height + 100;
    
  }
  
  
}
