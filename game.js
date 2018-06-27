function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 120;
  this.reset();
  this.score = 0;
  this.audioEat = new Audio("audio/eat.mp3");
  this.audioDead = new Audio("audio/dead.mp3");
}

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      this.draw();
      this.move();
      this.colisionLimits();
      this.colisionSelf();
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

Game.prototype.colisionLimits = function() {
  this.eat();
  if (
    this.snake.cobra.x[0] < 0 ||
    this.snake.cobra.x[0] > 768 ||
    this.snake.cobra.y[0] < 0 ||
    this.snake.cobra.y[0] > 768
  ) {
    this.gameOver();
  }
};

Game.prototype.colisionSelf = function() {
  for (let i = 1; i < this.snake.cobra.length; i++)
    if (
      this.snake.cobra.x[0] == this.snake.cobra.x[i] &&
      this.snake.cobra.y[0] == this.snake.cobra.y[i]
    )
      this.gameOver();
};

Game.prototype.eat = function() {
  if (
    this.snake.cobra.x[0] < this.apple.x + 32 &&
    this.snake.cobra.x[0] + 32 > this.apple.x &&
    this.snake.cobra.y[0] < this.apple.y + 32 &&
    this.snake.cobra.y[0] + 32 > this.apple.y
  ) {
    this.audioEat.play();
    this.updateScore();
    this.apple = new Apple(this);
  }
};

Game.prototype.updateScore = function() {
  this.score += 7;
  document.getElementById("score").innerText = this.score
  this.snake.cobra.length++;
};

Game.prototype.gameOver = function() {
  this.audioDead.play();
  alert("Try Again");
  location.reload();
  console.log(this.snake.cobra.y, this.snake.cobra.x);
};
