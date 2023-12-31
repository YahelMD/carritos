var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1_img, car2_img;
var car1, car2;
var cars = [];
var gameState;

function preload() {
  backgroundImage = loadImage ("./assets/background.png");
  car1_img = loadImage ("./assets/car1.png");
  car2_img = loadImage ("./assets/car2.png");
};

function setup() {
   canvas = createCanvas (windowWidth, windowHeight);
   database = firebase.database ();
   game = new Game ();
   game.start ();

};

function draw() {
  background (backgroundImage);
  if(gameState === 1){
   game.play();
   };
  if(playerCount === 2 ){
    game.update (1);
  };
};

function windowResized() {
   resizeCanvas (windowWidth, windowHeight);
};
