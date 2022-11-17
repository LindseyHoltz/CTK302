// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let f1; 
let dells; 

function setup() {
  createCanvas(900, 700);

  textAlign(CENTER); 

  f1 = loadFont("assets/fridaybeach.ttf");
  dells = loadImage("assets/dells.jpeg"); 

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Wisconsin Dells, WI,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US

  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=3ab217ab399fbfb77d8c470e0db3a8a1";

  let myTotalString = myCityString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  
}

function draw() {
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      //background(hour() * 10);
      image(dells, 0, 0, 900, 700); 

      fill("white");
      textFont(f1, 25); 
      push(); 
      textSize(50); 
      text("Current weather for " + weather.name + ", WI", width/2, 50);
      pop(); 
      push(); 
      fill("white"); 
      stroke(10); 
      text("Windspeed is " + windspeed, 10 + x, 310);
      pop(); 
      text("Temperature is " + temperature, 105, 620);
      text("Humidity is " + humidity + " %", 90, 650);
      text("Weather Description is: " + weather.weather[0].description, 195, 680);

      // cloud 
      fill("white");
      noStroke();
      fill("rgb(248,243,243)");
      ellipse(180 + x, 299, 80, 80);

      fill("rgb(248,243,243)");
      ellipse(216 + x, 315, 75, 75);

      fill("rgb(248,243,243)");
      ellipse(149 + x, 307, 75, 75);

      fill("rgb(248,243,243)");
      ellipse(190 + x, 320, 75, 75);
      
      //149
      fill("rgb(248,243,243)");
      ellipse(31 + x, 199, 80, 80);

      fill("rgb(248,243,243)");
      ellipse(67 + x, 215, 75, 75);

      fill("rgb(248,243,243)");
      ellipse(0 + x, 207, 75, 75);

      fill("rgb(248,243,243)");
      ellipse(41 + x, 220, 75, 75);
      //ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;

      if (x > width + 30) x = -300;

      break;
  }
}
