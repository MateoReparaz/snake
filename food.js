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
  this.images = ["images/banana.png","images/Green_Apple.png","images/fly.png"];
  this.img = new Image();
  this.img.src = this.images[Math.floor(Math.random()*3)]
  
  
}
GreenApple.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  this.game.ctx.fillStyle = 'white';
  this.game.ctx.font = "20px 'Press Start 2P'";
  this.game.ctx.fillText(this.game.foodTimer,40,40);
};