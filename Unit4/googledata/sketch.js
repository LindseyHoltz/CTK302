var bubbles = [];
let url = "";
let x = 0; 

function setup() {
  let key = "1Vkk1BuFus4oCddL6CYJx8KtHDsCqyxUO0Xddgt7kt-A"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your name?"],
        data[i]["What is your favorite animal? "],
        data[i]["DC or Marvel? "],
        data[i]["Best SpongeBob Character? "])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("lightgreen");

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
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    push(); 
    stroke("lightblue");
    fill("pink");
    rect(this.pos.x, this.pos.y+10, 180, 120);
    pop(); 
    fill("black");
    text(
      this.name + "\n" + this.animal + "\n" + this.hero + "\n" + this.spongebob,
      this.pos.x,
      this.pos.y
    );
    
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = -10; 
  
  
    
  }
  
  
}
