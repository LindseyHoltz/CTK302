let mic;
let vol = 0;
let approachingVol = 0;
let x = 0;
let i1; 

// variables that you might want to tweak
let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 0.08; // how responsive do you want this? Higher numbers mean faster response.

function preload() {
  i1 = loadImage("assets/dinosaur.gif");
}

function setup() {
	createCanvas(600, 400);

	// code for initializing mic in.
	mic = new p5.AudioIn(); // what does "new" mean?
	mic.start();

  noStroke();
}

function draw() {
	background("lightblue");
  
  push();
  fill("lightgreen");
  rect(0, 300, 600, 100);
  pop(); 

  push();
  //cloudleft
  fill("rgb(248,243,243)");
  ellipse(180, 69, 60, 60);
  
  fill("rgb(248,243,243)");
  ellipse(216, 85, 55, 55);
  
  fill("rgb(248,243,243)");
  ellipse(149, 77, 55, 55);
  
  fill("rgb(248,243,243)");
  ellipse(190, 90, 55, 55);
  
  //cloudright
  fill("rgb(248,243,243)");
  ellipse(393, 91, 60, 60);
  
  fill("rgb(248,243,243)");
  ellipse(429, 107, 45, 55);
  
  fill("rgb(248,243,243)");
  ellipse(362, 99, 45, 55);
  
  fill("rgb(248,243,243)");
  ellipse(403, 112, 55, 35);

  //flower1
  fill("darkgreen");
  rect(463, 241, 5, 63); 
  
  fill("darkgreen");
  arc(461, 265, 25, 25, radians(60),  radians(240));
  
  fill("pink");
  ellipse(451, 214, 25, 25);
  
  fill("pink");
  ellipse(478, 238, 25, 25);
  
  fill("pink");
  ellipse(453, 238, 25, 25);
  
  fill("pink");
  ellipse(476, 214, 25, 25);
  
  fill("yellow");
  ellipse(465, 227, 25, 25);
  
  //flower2
  fill("darkgreen");
  rect(64, 241, 5, 63); 
  
  fill("darkgreen");
  arc(70, 265, 25, 25, radians(-60),  radians(-240));
  
  fill("#9F75EB");
  ellipse(51, 214, 25, 25);
  
  fill("#9F75EB");
  ellipse(78, 238, 25, 25);
  
  fill("#9F75EB");
  ellipse(53, 238, 25, 25);
  
  fill("#9F75EB");
  ellipse(76, 214, 25, 25);
  
  fill("yellow");
  ellipse(65, 227, 25, 25);
  pop();

	// get the sound input
	vol = mic.getLevel(); // returned level is between 0 and 1

	// make a "gradual" easing variable that approaches the original vol
	approachingVol += (vol - approachingVol) * ease;

	// text on the screen for debugging
	textSize(18);
	text(
		"Click the screen first to give\npermission for mic input.\nThe more noise you make, the faster the dino can run!\nMy volume is " +
			vol.toFixed(3) +
			"\nApproaching Vol = " +
			approachingVol.toFixed(3),
		10,
		60
	);

	// this moves that first box
	//  x = vol*200 ;
	// x = map(vol, 0, theLoudestItGets, 0, width);

	x = x + vol * 10;
  if (x > width) x = -200 ; 

	image(i1, x, 150, 200, 200);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
	getAudioContext().resume();
}


