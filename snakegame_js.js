//SNAKE GAME CREATED BY TUSHAR BANSAL
var s;
var scl = 20;              //scl stands for scale.

var food;

function setup() {                //setup function executes only once .
  createCanvas(600, 600);
  s = new Snake();                 //creating object snake
  frameRate(10);
  pickLocation();              // places food at random location 

}

function pickLocation() {               //this function puts snake food on random location by using random function which is in built.
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));            // radom function gives random values from 1 to decided number.
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {             //draw fuction executes repeatedly.
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {            //keycode is an in=built function.
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}