function Snake(game, apple) {
  this.game = game;
  this.apple = apple;
  this.x = 1 * this.apple.width;
  this.y = 1 * this.apple.height;
  this.width = this.apple.width;
  this.height = this.apple.height;
  this.vx =  this.apple.height;
  this.vy = 0;
  this.direction = "right";
  this.setListeners();
}

Snake.prototype.setListeners = function() {
  document.onkeydown = function(e) {
    var key = e.keyCode;
    if (key == 37 && this.direction != "right") {
      this.direction = "left";
    } else if (key == 39 && this.direction != "left") {
      this.direction = "right";
    } else if (key == 38 && this.direction != "down") {
      this.direction = "up";
    } else if (key == 40 && this.direction != "up") {
      this.direction = "down";
    }
  }.bind(this);
};

Snake.prototype.draw = function() {
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.game.ctx.strokeStyle = "white";
  this.game.ctx.strokeRect(this.x, this.y, this.width, this.height);
};

Snake.prototype.move = function() {
  if (this.direction == "right"){
    this.x += this.vx;   
  }else if (this.direction == "left"){
    this.x += this.vx * -1;
  }else if (this.direction == "up"){
    this.y += this.vx * -1;
  }else if (this.direction == "down"){
    this.y += this.vx;
  }
};
