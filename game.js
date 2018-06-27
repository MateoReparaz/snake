function Game(canvas, config) {
  document.getElementById("cover").style.display = "none"
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.audioEat = new Audio("audio/eat.mp3");
  this.audioDead = new Audio("audio/dead.mp3");
  this.reset(config);
  this.start(config);
  this.score = 0;
}

Game.prototype.start = function(config) {
  this.interval = setInterval(
    function() {
      this.clear();
      this.draw();
      this.move();
      this.colisionLimits();
      this.colisionSelf();
      this.eat(config);
      this.snake.grow();
    }.bind(this),
    this.fps
  );
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.reset = function(config) {
  if (config == 1) {
    this.fps = 110;
  } else if (config == 2) {
    this.fps = 80;
  } else {
    this.fps = 60;
  }
  this.background = new Background(this, config);
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

Game.prototype.eat = function(config) {
  if (
    this.snake.cobra.x[0] < this.apple.x + 32 &&
    this.snake.cobra.x[0] + 32 > this.apple.x &&
    this.snake.cobra.y[0] < this.apple.y + 32 &&
    this.snake.cobra.y[0] + 32 > this.apple.y
  ) {
    this.audioEat.play();
    this.updateScore(config);
    this.apple = new Apple(this);
  }
};

Game.prototype.updateScore = function(config) {
  if (config == 1) {
    this.score += 7;
  } else if (config == 2) {
    this.score += 11;
  } else {
    this.score += 17;
  }

  document.getElementById("score").innerText = this.score;
  this.snake.cobra.length++;
};

Game.prototype.gameOver = function() {
  this.audioDead.play();
  document.getElementById("game-over").style.display = "flex"
};
