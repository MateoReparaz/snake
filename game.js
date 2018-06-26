function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.reset();
  this.score = 0;
}

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      this.draw();
      this.move();
      this.colision();
      this.eat();
    }.bind(this),
     this.fps
  );
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.apple = new Apple(this);
  this.snake = new Snake(this, this.apple);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.apple.draw();
  this.snake.draw();
};

Game.prototype.move = function() {
  this.snake.move();
};

Game.prototype.colision = function(){
  if (this.snake.x <0 || this.snake.x > 768 || this.snake.y < 0 || this.snake.y > 768){
    this.reset();
    this.score =0;
  } 
}
Game.prototype.eat = function(){
  if (this.snake.x  < (this.apple.x+ 32) && (this.snake.x +32)> this.apple.x && this.snake.y < (this.apple.y+ 32)&& (this.snake.y +32)>this.apple.y){
    this.score +=7;
    this.apple = new Apple(this);
    console.log(this.score)
  }
}
