var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var ball;
var divisionHeight = 300;

// create a score,count variable and give a value as 0

//create a gamestate var with value "start"

//create a var ball;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  Engine.update(engine);
  ground.display();
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  // Create a if block to check gameState value ==="end" - then display Text as "Game Over"
  

  if (ball != null) {
    //display ball

    if (ball.body.position.y > 760) {
      if (ball.body.position.x < 300) {
        score = score + 500;
        ball = null;
        if (count >= 5) gameState = "end";
      }

      //Use else if() to check the postion of ball between 301 and 600. -- And the statements inside the block same as above.




      //Use else if() to check the postion of ball between 601 and 900. -- And the statements inside the block same as above.


    }

  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}
//mousePressed() - when clicking on screen create a new Particle
function mousePressed() {

  if (gameState !== "end") {
    //increment count by +1

    //create a new Particle with x -axis as mouseX, y-ais as 10 and width&height as 10,10
    //then assign it to a variable ball

  }
}