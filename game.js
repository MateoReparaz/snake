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
  this.snake.cobra.forEach(
    function(e) {
      if (e.x < 0 || e.x > 768 || e.y < 0 || e.y > 768) {
        this.reset();
      }
    }.bind(this)
  );
};

Game.prototype.eat = function() {
  this.snake.cobra.forEach(function(e) {
      if (
        e.x < this.apple.x + 32 &&
        e.x + 32 > this.apple.x &&
        e.y < this.apple.y + 32 &&
        e.y + 32 > this.apple.y
      ) {
        this.updateScore();
        this.apple = new Apple(this);
      }
    }.bind(this)
  );
};

Game.prototype.updateScore = function() {
  this.score += 7;
  this.snake.grow();
};

