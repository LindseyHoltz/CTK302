let cars = [];
let i1; 

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER); 
  i1 = loadImage("assets/witch.jpg");

}

function draw() {
  //image(i1, 300, 300, 600, 600);
  
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    
    if (cars[i].opacity < 0) {
      cars.splice(i,1); 
    }
  }

  fill("black");
  //text(cars.length, 40, 40); 
}

class Car {
  constructor() {
    this.pos = createVector(random(350, 530), height - 200);
    this.vel = createVector(random(-.3, .3), random(-7, -1));
    this.r = random(1,100); 
    this.g = random(255); 
    this.b = random(255); 
    this.opacity = random(200,255); 
    this.size = random(48, 128); 
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.opacity); 
    textSize(this.size); 
    ellipse(this.pos.x, this.pos.y, random(1, 40)); 
  }

  move() {
    this.pos.add(this.vel); 
    this.opacity -= 5; 
    
  }

}
