let state = -1;
let s1, s2, s3;
let i1, i2, i3; 

function preload() {
  s1 = loadSound("assets/allthat.mp3") ;
  s2 = loadSound("assets/dreams.mp3") ;
  s3 = loadSound("assets/ukulele.mp3") ;
  i1 = loadImage("assets/city.jpeg") ;
  i2 = loadImage("assets/dreams.jpeg") ;
  i3 = loadImage("assets/ukulele.jpeg") ;
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  imageMode(CENTER);
  textSize(20);
  
}

function draw() {

  background(100);
  
  switch (state) {
    case -1:
      background("red");
      text("please click to start", width/2, height/2); 
      break;

    case 0:
      background("yellow"); 
      image(i1, width/2, height/2, 550, 400) ;
      text('Now playing: "All That"', width/2, height/2 - 220); 
      if (!s1.isPlaying()){
        s1.play();
      }
      break;

    case 1:
      background("lightblue");
      image(i2, width/2, height/2, 500, 500) ;
      text('Now playing: "Dreams"', width/2, height/2 - 260); 
      if (!s2.isPlaying()){
        s2.play();
      }
      break;

    case 2:
      background("lightgreen");
      image(i3, width/2, height/2, 400, 600) ;
      text('Now playing: "Ukulele"', width/2, height/2 - 320); 
      if (!s3.isPlaying()){
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop(); 
  s2.stop(); 
  s3.stop();
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}