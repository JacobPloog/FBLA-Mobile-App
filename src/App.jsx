// src/App.jsx

import "./App.css";
export default function App() {
  var player = {
    x: 200,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump : true,
    height: 20,
    width: 20
    };
// The status of the arrow keys
var keys = {
    right: false,
    left: false,
    up: false,
    };
// The friction and gravity to show realistic movements    
var gravity = 0.6;
var friction = 0.7;
// The number of platforms
var num = 4;
// The platforms
var platforms = [];
// Function to render the canvas
function rendercanvas(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 1200, 600);
}
// Function to render the player
function renderplayer(){
    ctx.fillStyle = "#Ffffff";
    ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
    }
// Function to create platforms
function createplat(){
    for(i = 0; i < num; i++) {
        platforms.push(
            {
            x: 100 * i,
            y: 200 + (30 * i),
            width: 210,
            height: 15
            }
        );
    }
    }
// Function to render platforms
function renderplat(){
    ctx.fillStyle = "#45597E";
    ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
    ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width,platforms[1]. height);
    ctx.fillRect(platforms[2].x, platforms[2].y, platforms[2].width,platforms[2]. height);
    ctx.fillRect(platforms[3].x, platforms[3].y, platforms[3].width,platforms[3]. height)
}
// This function will be called when a key on the keyboard is pressed
function keydown(e) {
    // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }
    // 37 is the code for the up arrow key
    if(e.keyCode == 38) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
}
// This function is called when the pressed key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 38) {
        if(player.y_v < -2) {
        player.y_v = -3;
        }
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
} 
function loop() {
    // If the player is not jumping apply the effect of frictiom
    if(player.jump == false) {
        player.x_v *= friction;
    } else {
        // If the player is in the air then apply the effect of gravity
        player.y_v += gravity;
    }
    player.jump = true;
    // If the left key is pressed increase the relevant horizontal velocity
    if(keys.left) {
        player.x_v = -2.5;
    }
    if(keys.right) {
        player.x_v = 2.5;
    }
    // Updating the y and x coordinates of the player
    player.y += player.y_v;
    player.x += player.x_v;
    // A simple code that checks for collions with the platform
    let i = -1;
    if(platforms[0].x < player.x && player.x < platforms[0].x + platforms[0].width &&
    platforms[0].y < player.y && player.y < platforms[0].y + platforms[0].height){
        i = 0;
    }
    if(platforms[1].x < player.x && player.x < platforms[1].x + platforms[1].width &&
    platforms[1].y < player.y && player.y < platforms[1].y + platforms[1].height){
        i = 1;
    }
    if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
    platforms[2].y < player.y && player.y < platforms[2].y + platforms[2].height){
        i = 2;
    }
    if(platforms[3].x < player.x && player.x < platforms[3].x + platforms[3].width &&
    platforms[3].y < player.y && player.y < platforms[3].y + platforms[3].height){
        i = 3;
    }
    if (i > -1){
        player.jump = false;
        player.y = platforms[i].y;    
    }
    // Rendering the canvas, the player and the platforms
    rendercanvas();
    renderplayer();
    renderplat();
}
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 600;
ctx.canvas.width = 1200;
createplat();
// Adding the event listeners
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
setInterval(loop,22);
  return (
    <canvas id="canvas"></canvas>
  );
}
