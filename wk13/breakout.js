/* ..:: B R E A K O U T   G A M E ::..
 * breakout.js
 * Author: Minty Allred
 * Date: 11/13/26
 * Project for COSC 1350
 */

// get the canvas element from the DOM.
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//drawing a ball requires the x position, y position, and radius
let ballRadius = 15, xPos = canvas.width / 2, yPos = canvas.height / 2;

//xy move distance. These values are used to move the ball around.
let xMoveDist = 3, yMoveDist = 3;

//function that draws the ball on the canvas
ballRender=()=>{
  ctx.beginPath();
  //arc creates circular arc starting at 0, ending at 2pi (360 degrees)
  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}

paddleRender=()=>{
  ctx.beginPath();
  ctx.fillStyle = "#3c2f5f";
  ctx.fillRect(xPaddle, 385, 100, 15);
  if (moveRight === true) {
    xPaddle += 3;
  }
  else if (moveLeft === true) {
    xPaddle -= 3;
  }
}

const brickPadding = 10;
const brickWidth = 90;
const brickHeight = 25;
const brickRows = 4;
const brickColumns = 6;
const brickOffsetTop = 40;
const brickOffsetLeft = 5;
const bricks = [];

for (let row = 0; row < brickRows; row++) {
  for (let col = 0; col < brickColumns; col++) {

    bricks[row][col] = {
      x: brickOffsetLeft + (brickWidth + brickPadding) * col,
      y: brickOffsetTop + (brickHeight + brickPadding) * row,
      width: brickWidth,
      height: brickHeight
    };
  }
}

bricksRender=()=>{
  for (let i = 0; i < bricks.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = "#3c2f5f";
    ctx.fillRect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
    ctx.closePath();
  }
}

document.addEventListener('keydown', function(e) {
  if (e === 37) {
    moveLeft = true;
  }
  else if (e === 39) {
    moveRight = true;
  }
})

document.addEventListener('keyup', function(e) {
  if (e === 37) {
    moveLeft = false;
  }
  else if (e === 39) {
    moveRight = false;
  }
});

/*
* draw() can be thought of as our main function.
* We execute draw every few milliseconds to give our
* canvas the appearance of being animated. Notice how in the draw function
* the first thing done is ctx.clearRect(), which clears the whole canvas
* before drawing the next frame of animation.
*
* Right now, it only calls ballRender() over and over again.
* Changing the xPos and yPos will cause the ball to be drawn somewhere else
* next time the function is called.
*/
draw=()=> {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  xPos += xMoveDist;
  yPos += yMoveDist;
  if(xPos > canvas.width - ballRadius) xMoveDist = -xMoveDist;
  if(yPos > canvas.height - ballRadius) yMoveDist = -yMoveDist;
  paddleRender();
  bricksRender();
};

/*
 * setInterval(func, delay)
 * this built-in global JavaScript function executes 'func' function every
 * 'delay' milliseconds, and returns an interval ID. We won't really use intervalID
 * so don't worry to much about that for now.
 *
 * Try playing around with the refreshRate value.
 */
const refreshRate = 40;
const intervalID = setInterval(draw, refreshRate);
