/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

function setup() {
  createCanvas(720, 400);
 }
 
 function draw() {
   background("lightblue");
   noStroke();
   
   if (mouseIsPressed) {
     
   fill("lightgreen");
   rect(0, 300, 720, 400);
   
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
  
  //sun
  fill("orange");
  triangle(219, 268, 244, 267, 237, 292);
  
  fill("orange");
  triangle(243, 215, 269, 222, 255, 237 );
  
  fill("orange");
  triangle(282, 180, 305, 191, 287, 205);
  
  fill("orange");
  triangle(332, 159, 351, 177, 323, 180 );
  
  fill("orange");
  triangle(389, 153, 372, 176, 396, 183 );
  
  fill("orange");
  triangle(440, 181, 418, 191, 434, 204 );
  
  fill("orange");
  triangle(479, 223, 469, 244, 456, 225 );
  
  fill("orange");
  triangle(502, 270, 482, 287, 477, 264 );
  
  fill("#FFEB3B");
  arc(360, 300, 225, 225, PI, TWO_PI);
  
  
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
  
  //tree
  fill("rgb(119,69,69)");
  quad(570, 185, 592, 185, 604, 335, 561, 335 );
  
    //middle
  fill("rgb(19,95,19)");
  ellipse(579, 143, 90, 90);

    //leftcircle
  fill("rgb(19,90,19)");
  ellipse(531, 160, 90, 90);
  
    //rightcircle
  fill("rgb(19,95,19)");
  ellipse(629, 170, 95, 90);
  
    //upleft
  fill("rgb(19,95,19)");
  ellipse(546, 116, 90, 90);
  
    //upright
  fill("rgb(19,90,19)");
  ellipse(611, 123, 90, 90);
  
  //flower1
  fill("darkgreen");
  rect(155, 283, 5, 63); 
  
  fill("darkgreen");
  arc(154, 307, 25, 25, radians(60),  radians(240));
  
  fill("pink");
  ellipse(142, 256, 25, 25);
  
  fill("pink");
  ellipse(169, 280, 25, 25);
  
  fill("pink");
  ellipse(144, 280, 25, 25);
  
  fill("pink");
  ellipse(167, 256, 25, 25);
  
  fill("yellow");
  ellipse(156, 269, 25, 25);
  
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
  
  //tulip1
  fill("darkgreen");
  rect(651, 277, 5, 63); 
  
  fill("darkgreen");
  arc(649, 305, 25, 25, radians(60),  radians(240));
  
  fill("red");
  arc(657, 275, 30, 30, radians(300),  radians(120));
  
  fill("red");
  arc(649, 275, 30, 30, radians(60),  radians(240));
  
  fill("red");
  arc(654, 275, 30, 30, radians(360),  radians(180));
  
  //tulip2
  fill("darkgreen");
  rect(525, 285, 5, 63); 
  
  fill("darkgreen");
  arc(532, 313, 25, 25, radians(-60),  radians(-240));
  
  fill("rgb(223,57,144)");
  arc(533, 283, 30, 30, radians(300),  radians(120));
  
  fill("#DF3990");
  arc(523, 283, 30, 30, radians(60),  radians(240));
  
  fill("#DF3990");
  arc(528, 283, 30, 30, radians(360),  radians(180));
  
   
   
  
   
   
   } else {
     // when the mouse isn't pressed!
    
   background("lightgrey");
   rotate(0) ;
    
   fill("rgb(134,105,105)");
   rect(0, 300, 720, 400);
     
   //avatar
   fill("yellow");
   rect(311, 138, 70, 115);
   
   fill("yellow");
   arc(347, 270, 100, 200, PI, TWO_PI);
   
   fill("yellow");
   ellipse(318, 143, 30, 30);
   
   fill("yellow");
   ellipse(373, 145, 30, 30);
     
   fill("rgb(241,215,178)");
   ellipse(346, 174, 60, 60);
   
   fill("black");
   ellipse(331, 167, 10, 10);
   
   fill("black");
   ellipse(360, 167, 10, 10);
   
   push();
   noFill();
   stroke(1);
   arc(346, 190, 20, 20, PI, TWO_PI);
   pop();
   
   fill("blue");
   ellipse(360, 180, 5, 5);
     
   fill("blue");
   ellipse(331, 200, 5, 5);
   
   fill("rgb(241,215,178)");
   rect(338, 200, 15, 20);
   
   push();
   fill("rgb(241,215,178)");
   translate(319, 230);
   rotate(15 * Math.PI / 180);
   translate(-319, -230);
   rect(314, 225, 10, 40);
   pop();
   
   push();
   fill("rgb(241,215,178)");
   translate(311, 262);
   rotate(25 * Math.PI / 180);
   translate(-311, -262);
   rect(306, 261, 10, 40);
   pop();
   
   push();
   fill("rgb(241,215,178)");
   translate(373, 227);
   rotate(350 * Math.PI / 180);
   translate(-373, -227);
   rect(369, 225, 10, 40);
   pop();
   
   push();
   fill("rgb(241,215,178)");
   translate(380, 262);
   rotate(335 * Math.PI / 180);
   translate(-380, -262);
   rect(375, 261, 10, 40);
   pop();
   
   fill("rgb(241,215,178)");
   ellipse(292, 301, 15, 15);
     
   fill("rgb(241,215,178)");
   ellipse(400, 301, 15, 15);
 
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   quad(323, 220, 368, 220, 356, 265, 335, 265);
   pop();
   
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   ellipse(323,220,25,25);
   pop();
     
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   ellipse(368,220,25,25);
   pop();
   
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   arc(346, 360, 100, 200, PI, TWO_PI);
   pop();
     
   push();
   noFill();
   stroke("white");
   strokeWeight(1);
   arc(345, 285, 20, 15, 0, PI);
   pop();
 
   push();
   noFill();
   stroke("white");
   strokeWeight(1);
   arc(325, 285, 20, 15, 0, PI);
   pop();
   
   push();
   noFill();
   stroke("white");
   strokeWeight(1);
   arc(365, 285, 20, 15, 0, PI);
   pop();
     
   push();
   noFill();
   stroke("white");
   strokeWeight(1);
   arc(346, 322, 30, 25, 0, PI);
   pop();
     
   push();
   noFill();
   stroke("white");
   strokeWeight(1);
   arc(315, 322, 29, 24, 0, PI);
   pop();
     
   push();
   noFill();
   stroke("white");
   strokeWeight(1);
   arc(376, 322, 29, 24, 0, PI);
   pop();
     
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   arc(347, 359, 35, 20, 0, PI);
   pop();
   
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   arc(314, 359, 35, 20, 0, PI);
   pop();
   
   push();
   fill("#F9AECD");
   stroke("white");
   strokeWeight(1);
   arc(378, 359, 35, 20, 0, PI);
   pop();
   
   //cloudleft
   fill("grey");
   ellipse(180, 69, 60, 60);
   
   fill("grey");
   ellipse(216, 85, 55, 55);
   
   fill("grey");
   ellipse(149, 77, 55, 55);
   
   fill("grey");
   ellipse(190, 90, 55, 55);
   
   //cloudright
   fill("grey");
   ellipse(393, 91, 60, 60);
   
   fill("grey");
   ellipse(429, 107, 45, 55);
   
   fill("grey");
   ellipse(362, 99, 45, 55);
   
   fill("grey");
   ellipse(403, 112, 55, 35);
   
   
   //tree
   fill("rgb(119,69,69)");
   quad(570, 185, 592, 185, 604, 335, 561, 335 );
   
   push();
   fill("rgb(119,69,69)");
   translate(561,152);
   rotate(PI / -10);
   translate(-561, -152);
   rect(558, 125, 5, 63);
   pop();
     
   push();
   fill("rgb(119,69,69)");
   translate(608,161);
   rotate(PI / 4.0);
   translate(-608, -161);
   rect(610, 135, 5, 63);
   pop();
     
   push();
   fill("rgb(119,69,69)");
   rect(581, 125, 5, 63);
   pop();
     
   push();
   fill("rgb(119,69,69)");
   translate(572,187);
   rotate(290 * Math.PI / 180);
   translate(-572, -187);
   rect(572, 130, 5, 63);
   pop();
       
   //flower1
   
   fill("rgb(177,142,148)");
   ellipse(142, 327, 25, 25);
   
   fill("rgb(177,142,148)");
   ellipse(169, 351, 25, 25);
   
   fill("rgb(177,142,148)");
   ellipse(144, 351, 25, 25);
   
   fill("rgb(177,142,148)");
   ellipse(167, 327, 25, 25);
   
   fill("rgb(122,122,63)");
   ellipse(155, 340, 25, 25);
   
   //flower2
   
   fill("#AB9FC2");
   ellipse(51, 314, 25, 25);
   
   fill("#AB9FC2");
   ellipse(78, 338, 25, 25);
   
   fill("#AB9FC2");
   ellipse(53, 338, 25, 25);
   
   fill("#AB9FC2");
   ellipse(76, 314, 25, 25);
   
   fill("rgb(122,122,63)");
   ellipse(65, 327, 25, 25);
   
   //tulip1
   
   fill("rgb(134,53,53)");
   arc(657, 335, 30, 30, radians(300),  radians(120));
   
   fill("rgb(134,53,53)");
   arc(649, 335, 30, 30, radians(60),  radians(240));
   
   fill("rgb(134,53,53)");
   arc(654, 335, 30, 30, radians(360),  radians(180));
   
   //tulip2
   fill("rgb(131,32,84)");
   arc(533, 342, 30, 30, radians(300),  radians(120));
   
   fill("rgb(131,32,84)");
   arc(523, 342, 30, 30, radians(60),  radians(240));
   
   fill("rgb(131,32,84)");
   arc(528, 342, 30, 30, radians(360),  radians(180));
   
   }
   
   //fill("black") ;
   //text(mouseX + ", " + mouseY, 20, 20) ;
 }
 
 //function mouseReleased() {
   //print(mouseX + ", " + mouseY) ;
 //}
 
