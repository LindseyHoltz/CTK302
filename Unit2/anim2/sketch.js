let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue"); 
  noStroke() ;
  push() ;
  translate(x, 50) ;
  avatar() ;
  x += 5; 
  if (x> width) {
    x = -500;
  }
  pop() ;

}

function avatar() {
  //avatar
  fill("rgb(252,133,249)");
  ellipse(308, 59, 25, 25);
  
  fill("rgb(252,133,249)");
  ellipse(328, 59, 25, 25);
  
  fill("rgb(252,133,249)");
  ellipse(307, 78, 25, 25);
  
  fill("rgb(164,115,221)");
  ellipse(385, 78, 25, 25);
  
  fill("rgb(164,115,221)");
  ellipse(385, 60, 25, 25);
  
  fill("rgb(164,115,221)");
  ellipse(365, 60, 25, 25);
  
  fill("yellow");
  rect(311, 64, 70, 115);
  
  fill("yellow");
  arc(347, 196, 100, 200, PI, TWO_PI);
  
  fill("yellow");
  ellipse(318, 69, 30, 30);
  
  fill("yellow");
  ellipse(373, 71, 30, 30);
  
  fill("yellow");
  ellipse(312, 114, 30, 30);
  
  fill("yellow");
  ellipse(290, 157, 30, 30);
  
  fill("yellow");
  ellipse(308, 198, 30, 30);
  
  fill("yellow");
  ellipse(385, 114, 30, 30);
  
  fill("yellow");
  ellipse(405, 157, 30, 30);
  
  fill("yellow");
  ellipse(347, 160, 130, 100);
    
  fill("rgb(241,215,178)");
  ellipse(346, 100, 60, 60);
  
  fill("black");
  ellipse(331, 93, 10, 10);
  
  fill("black");
  ellipse(360, 93, 10, 10);
  
  push();
  noFill();
  stroke(1);
  arc(346, 108, 20, 20, 0, PI);
  pop();
  
  fill("rgb(241,215,178)");
  rect(338, 126, 15, 20);
  
  push();
  fill("rgb(241,215,178)");
  translate(319, 152);
  rotate(30 * Math.PI / 180);
  translate(-319, -152);
  rect(315, 151, 10, 40);
  pop();
  
  push();
  fill("rgb(241,215,178)");
  translate(301, 186);
  rotate(70 * Math.PI / 180);
  translate(-301, -186);
  rect(295, 185, 10, 40);
  pop();
  
  push();
  fill("rgb(241,215,178)");
  translate(373, 152);
  rotate(350 * Math.PI / 180);
  translate(-373, -152);
  rect(368, 151, 10, 40);
  pop();
  
  push();
  fill("rgb(241,215,178)");
  translate(378, 185);
  rotate(335 * Math.PI / 180);
  translate(-379, -185);
  rect(374, 187, 10, 40);
  pop();
  
  //swordstart
  push();
  fill("grey");
  translate(259, 198);
  rotate(335 * Math.PI / 180);
  translate(-259, -198);
  rect(255, 185, 8, 30);
  pop();
  
  push();
  fill("grey");
  translate(253, 186);
  rotate(65 * Math.PI / 180);
  translate(-253, -186);
  rect(250, 170, 8, 30);
  pop();
  
  push();
  fill("rgb(255,192,203)");
  translate(263, 181);
  rotate(-24 * Math.PI / 180);
  translate(-263, -181);
  rect(243, 80, 20, 100);
  pop();
  
  push();
  fill("#ECDFDFCC");
  translate(263, 181);
  rotate(-24 * Math.PI / 180);
  translate(-263, -181);
  rect(243, 80, 10, 100);
  pop();
  
  fill("rgb(255,192,203)");
  triangle(204, 98, 212, 67, 222, 89);
  
  fill("#ECDFDFCC");
  quad(204, 98, 212, 67, 218, 80, 213, 95);
  //swordend
  
  fill("rgb(241,215,178)");
  ellipse(261, 199, 15, 15);

  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  quad(323, 146, 368, 146, 356, 191, 335, 191);
  pop();
  
  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  ellipse(323,146,25,25);
  pop();
  
  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  ellipse(368,146,25,25);
  pop();
  
  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  arc(346, 286, 100, 200, PI, TWO_PI);
  pop();
  
  push();
  noFill();
  stroke("white");
  strokeWeight(1);
  arc(347, 205, 30, 20, 0, PI);
  pop();
  
  push();
  noFill();
  stroke("white");
  strokeWeight(1);
  arc(332, 205, 30, 20, 1, PI);
  pop();
  
  push();
  noFill();
  stroke("white");
  strokeWeight(1);
  arc(347, 245, 30, 20, 0, PI);
  pop();
  
  push();
  noFill();
  stroke("white");
  strokeWeight(1);
  arc(316, 245, 30, 20, 0, PI);
  pop();
  
  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  arc(347, 286, 35, 20, 0, PI);
  pop();
  
  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  arc(314, 286, 35, 20, 0, PI);
  pop();
  
  push();
  fill("#F9AECD");
  stroke("white");
  strokeWeight(1);
  arc(378, 286, 35, 20, 0, PI);
  pop();
  
  //shield
  push();
  fill("rgb(240,127,147)");
  stroke("pink");
  strokeWeight(3);
  ellipse(396, 223, 92, 92);
  pop();
  
  fill("#EBD8E4");
  ellipse(378, 206, 40, 40);
  
  fill("#EBD8E4");
  ellipse(411, 206, 40, 40);
  
  fill("#EBD8E4");
  ellipse(414, 237, 40, 40);
  
  fill("#EBD8E4");
  ellipse(380, 239, 40, 40);
  
  fill("#D4BACB");
  ellipse(394, 195, 25, 25);
  
  fill("#D4BACB");
  ellipse(419, 222, 25, 25);
  
  fill("#D4BACB");
  ellipse(397, 246, 25, 25);
  
  fill("#D4BACB");
  ellipse(370, 223, 25, 25);
  
  fill("#D986B9");
  ellipse(382, 210, 25, 25);
  
  fill("#D986B9");
  ellipse(409, 234, 25, 25);
  
  fill("#D986B9");
  ellipse(384, 234, 25, 25);
  
  fill("#D986B9");
  ellipse(407, 210, 25, 25);
  
  fill("yellow");
  ellipse(396, 223, 25, 25);
}
