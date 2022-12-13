// Spring 2019 Curtis Stieger's group worked on this, then our group in Fall 2022

var fence;
var locationData;
var num;
var distance;
var places = [];
var images = [];
var state = 0;
var catsCollected = 0;
var canvasVariable;
var clues = ["Not so fur away", "Purrfessor's workspace", "Wire did the cat go?", "The soothing sound of mewsic", "Plenty of boxes", "Fixes something as good as mew"]; 
var cluesindex = 0;

let bubbly; 

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  images[0] = loadImage('assets/catStart.png');
  images[1] = loadImage('assets/catRules.png');
  images[2] = loadImage('assets/catClues.png');
  images[3] = loadImage('assets/cat1.png');
  images[4] = loadImage('assets/cat2.png');
  images[5] = loadImage('assets/cat3.png');
  images[6] = loadImage('assets/cat4.png');
  images[7] = loadImage('assets/cat5.png');
  images[8] = loadImage('assets/cat6.png');
  images[9] = loadImage('assets/catWin.png');
  canvasVariable = createCanvas(displayWidth, displayHeight);
  //canvasVariable = createCanvas(1080, 1920);
  //canvasVariable.touchStarted();
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  places.push(new Place(40.50985450, -88.98914693, "Julian Hall 064", .0002)); // Starting area in Julian - 0 
  places.push(new Place(40.50931521, -88.98866339, "Rose's Office", .0002)); // Professor's office in Julian - 1
  places.push(new Place(40.50979896, -88.98923233, "Electrical Room", .0002)); // Electrical Room of Julian - 2 
  places.push(new Place(40.50946499, -88.98911583, "Music Therapy Room", .0002)); // Music Therapy Room of Julian - 3 
  places.push(new Place(40.50978191, -88.98909065, "Storage Room", .0002)); // Storage Room of Julian -4 
  places.push(new Place(40.50949390, -88.98887783, "Mechanical Room", .0002)); // Mechanical Room of Julian -5 
  
  //places.push(new Place(40.47860923186, -88.96824420, "Roses room", .0002)); // Mechanical Room of Julian - 4 
  //places.push(new Place(40.50795058179, -88.925113390, "Lindseys room", .0002)); // Mechanical Room of Julian -5 
  
  bubbly = loadFont("assets/bubbly.otf"); 
  
  textAlign(CENTER); 
}

function draw() {
  switch(state) {
    case 0: // TITLE
      background(images[0]);
      break;
    case 1: // RULES
      background(images[1]);
      push(); 
      textFont(bubbly, 70); 
      text("Six cats have been set loose in Julian Hall!\n With the help of the given clues, walk around the building to locate and find the cats.\n Collect all six cats to win!", 250, 190, displayWidth, displayHeight);
      pop(); 
      break;
    case 2: // CLUES
      background(images[2]);
      push(); 
      textFont(bubbly); 
      textSize(75); 
      text(clues[cluesindex], 250, height/2, displayWidth, displayHeight); 
      pop(); 
      break;
    case 3: // Max - 0 
      background(images[3]);
      places[state-3].found = true;
      cluesindex = 1; 
      break;
    case 4: // Fancypants - 1 
      background(images[4]);
      places[state-3].found = true;
      cluesindex = 2; 
      break;
    case 5: // Lucy - 2 
      background(images[5]);
      places[state-3].found = true;
      cluesindex = 3; 
      break;
    case 6: // Luna - 3 
      background(images[6]);
      places[state-3].found = true;
      cluesindex = 4; 
      break;
    case 7: // Floof - 4 
      background(images[7]);
      places[state-3].found = true;
      cluesindex = 5; 
      break;
    case 8: // Grumps - 5 
      background(images[8]);
      places[state-3].found = true;
      //cluesindex = 6; 
      break;
    case 9: // WIN
      background(images[9]);
      break;
  }
  push(); 
  catsCollected = 0; 
  
  for (var i = 0; i < places.length; i++) {
  if (places[i].found == true) {
      catsCollected++; 
     if (catsCollected == 6) state = 9; 
  }
  }

  fill("pink"); 
  textSize(25); 
  text("Cats Collected "+catsCollected, 145, 70); 
  pop(); 
  
}

function positionPing(position) {
  textSize(24);
  num++;
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  state = 2; 
  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      state = i + 3; //places[i];
      //places[i].display();
      break;
    }
  }
}

function Place(lat, long, desc, radius) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.found = false; 
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates

  this.display = function() {
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}

function mouseReleased() {
  switch(state) {
    case 0:
      state = 1; // Moves to Rules
      break;
    case 1:
      state = 2; // Moves to Clues
      break;
    case 2:
      state = 2; // Redundent, but whatever
      break;
    case 3:
      if(catsCollected > 5) {
        state = 9; // Moves to Win
      } else {
        state = 2; // Returns to Clues
      }
      break;
    case 4:
      if(catsCollected > 5) {
        state = 9; // Moves to Win
      } else {
        state = 2; // Returns to Clues
      }
      break;
    case 5:
      if(catsCollected > 5) {
        state = 9; // Moves to Win
      } else {
        state = 2; // Returns to Clues
      }
      break;
    case 6:
      if(catsCollected > 5) {
        state = 9; // Moves to Win
      } else {
        state = 2; // Returns to Clues
      }
      break;
    case 7:
      if(catsCollected > 5) {
        state = 9; // Moves to Win
      } else {
        state = 2; // Returns to Clues
      }
      break;
    case 8:
      if(catsCollected > 5) {
        state = 9; // Moves to Win
      } else {
        state = 2; // Returns to Clues
      }
      break;
    case 9:
      state = 0; // Returns to Title
      catsCollected = 0;
      break;
  }
}
