function Game(canvas, config) {
  document.getElementById("cover").style.display = "none";
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.audioEat = new Audio("audio/eat.mp3");
  this.audioDead = new Audio("audio/dead.mp3");
  this.audioFood = new Audio("audio/left.mp3")
  this.reset(config);
  this.start(config);
  this.score = 0;
  this.appleExists = false;
  this.foodTimer = parseInt(4500/this.fps);
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
      if (this.score != 0 && this.score % 5 == 0 && !this.greenApple && !this.appleExists){  //! es hacer falsy this.greenapple envez de usar this.greenApple == undefined
        this.greenApple = new GreenApple(this);
        this.eraseTimer()
        this.appleExists = true;
        } 
      if (this.appleExists){
        this.foodTimer--
      }
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
  if(this.greenApple != undefined){
  this.greenApple.draw();
  }
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
  if (this.greenApple != undefined &&
    this.snake.cobra.x[0] < this.greenApple.x + 32 &&
    this.snake.cobra.x[0] + 32 > this.greenApple.x &&
    this.snake.cobra.y[0] < this.greenApple.y + 32 &&
    this.snake.cobra.y[0] + 32 > this.greenApple.y
  ) {
    this.audioEat.play();
    this.score += 23;
    this.snake.cobra.length --;
    this.greenApple = undefined;
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
  document.getElementById("game-over").style.display = "flex";
  this.audioDead.play();
  this.resetEvent();
};
Game.prototype.resetEvent = function() {
  this.snake.cobra.x = [];
  this.snake.cobra.y = [];
  window.onkeydown = function(event) {
    if (event.key == "Enter") {
      window.location.reload();
    }
  };
};

Game.prototype.eraseTimer = function(){
  setTimeout(function(){
    this.greenApple = undefined;
    this.foodTimer = parseInt(4500/this.fps);
    this.appleExists = false;
    this.score -=1;
    this.audioFood.pause()
  }.bind(this),4500)

}    
