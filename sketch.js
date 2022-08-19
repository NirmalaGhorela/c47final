var bgImage, bike1Img, bike2Img;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, bike1, bike2, obstacles;
var roadImg,resetbutton;
var broken,brokenImg;
var bikes = [];
var bgsound,hitSound,winSound,gameOverSound,bikeStartSound;

function preload() {
 // backgroundImage = loadImage("assets/bgImg1.png");
  bike1Img = loadImage("assets/bike1.png");
  bike2Img = loadImage("assets/bike2.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  roadImg = loadImage("assets/background.png");
  resetbutton = loadImage("assets/reset.png");
  brokenImg = loadImage("assets/brokenBike.png");
 // bgsound= loadSound("assets/bgSound.wav");
 // hitSound= loadSound("assets/hitsound.wav");
 // winSound= loadSound("assets/winSound.mp3");
 // gameOverSound= loadSound("assets/gameoverSound.mp3");
 // bikeStartSound= loadSound("assets/bikeStartSound.wav");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(roadImg);
  //if(!bgsound.isPlaying()){
   // bgsound.play();
   // bgsound.setVolume(0.1);
 // }
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
