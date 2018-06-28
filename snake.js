function Snake(game, apple) {
  this.cobra = {
    x: [32],
    y: [32],
    height: 32,
    width: 32,
    length: 1,
    vx: 32,
    vy: 0,
    direction: "right",
    inputLocked:false
  };
  this.game = game;
  this.apple = apple;
  this.setListeners();
}

Snake.prototype.draw = function() {
  for (var i = 0; i < this.cobra.length; i++) {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(
      this.cobra.x[i],
      this.cobra.y[i],
      this.cobra.width,
      this.cobra.height
    );
    this.game.ctx.strokeStyle = "white";
    this.game.ctx.strokeRect(
      this.cobra.x[i],
      this.cobra.y[i],
      this.cobra.width,
      this.cobra.height
    );
  }
};

Snake.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if(!this.cobra.inputLocked){
    if (event.key == "ArrowLeft" && this.cobra.direction != "right") {
      this.cobra.inputLocked=true;
      this.cobra.direction = "left";
    } else if (event.key == "ArrowRight" && this.cobra.direction != "left") {
      this.cobra.inputLocked=true;
      this.cobra.direction = "right";
    } else if (event.key == "ArrowUp" && this.cobra.direction != "down") {
      this.cobra.inputLocked=true;
      this.cobra.direction = "up";
    } else if (event.key == "ArrowDown" && this.cobra.direction != "up") {
      this.cobra.inputLocked=true;
      this.cobra.direction = "down";
    }}
  }.bind(this);
};

Snake.prototype.move = function() {
  if (this.cobra.direction == "right") {
    this.cobra.vx = 1;
    this.cobra.vy = 0;
  } else if (this.cobra.direction == "left") {
    this.cobra.vx = -1;
    this.cobra.vy = 0;
  } else if (this.cobra.direction == "up") {
    this.cobra.vx = 0;
    this.cobra.vy = -1;
  } else if (this.cobra.direction == "down") {
    this.cobra.vx = 0;
    this.cobra.vy = 1;
  }
};

Snake.prototype.grow = function() {
  var newX = this.cobra.x[0] + this.cobra.vx * 32;
  var newY = this.cobra.y[0] + this.cobra.vy * 32;
  this.cobra.x.unshift(newX);
  this.cobra.y.unshift(newY);
  this.cobra.inputLocked=false;
};
