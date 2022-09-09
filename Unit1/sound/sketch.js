let allthat ;

function preload() {
  allthat = loadSound("assets/allthat.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  allthat.play() ;
}

function draw() {
  background("black");
  fill("white");
  text("the name of the song is all that and I like it because it's a jazzy bop", 100, 100, 400, 400);


}

function mouseReleased() {
  if (allthat.isPlaying()) {
      allthat.pause();
  } else {
      allthat.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
