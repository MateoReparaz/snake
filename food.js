function Apple(game) {
  this.game = game;
  this.height = 32;
  this.width = 32;
  this.x = (Math.floor(Math.random() * (25 - 1)) + 1)*32;
  this.y = (Math.floor(Math.random() * (25 - 1)) + 1)*32;
  this.img = new Image();
  this.img.src = "images/food.png";
  
}
Apple.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

function GreenApple(game){
  this.game = game;
  this.height = 32;
  this.width = 32;
  this.x = (Math.floor(Math.random() * (25 - 1)) + 1)*32;
  this.y = (Math.floor(Math.random() * (25 - 1)) + 1)*32;
  this.img = new Image();
  this.img.src = "images/Green_Apple.png";
  
}
GreenApple.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};