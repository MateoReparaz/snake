function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 120;
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
      this.snake.grow();
    }.bind(this),
    this.fps
  );
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.reset = function() {
  this.score = 0;
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

Game.prototype.colision = function() {
  this.eat();
  if (
    this.snake.cobra.x[0] < 0 ||
    this.snake.cobra.x[0] > 768 ||
    this.snake.cobra.y[0] < 0 ||
    this.snake.cobra.y[0] > 768
  ) {
    this.reset();
  }
};

Game.prototype.eat = function() {
  if (
    this.snake.cobra.x[0] < this.apple.x + 32 &&
    this.snake.cobra.x[0] + 32 > this.apple.x &&
    this.snake.cobra.y[0] < this.apple.y + 32 &&
    this.snake.cobra.y[0] + 32 > this.apple.y
  ) {
    this.updateScore();
    this.apple = new Apple(this);
  }
};

Game.prototype.updateScore = function() {
  this.score += 7;
  this.snake.cobra.length++;

};
