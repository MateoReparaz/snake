function Snake(game, apple) {
  this.cobra = [{ x: 32, y: 32, height: 32, width: 32 }];
  this.game = game;
  this.apple = apple;
  this.vx = this.apple.height;
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
  this.cobra.forEach(
    function(e) {
      this.game.ctx.fillStyle = "black";
      this.game.ctx.fillRect(e.x, e.y, e.width, e.width);
      this.game.ctx.strokeStyle = "white";
      this.game.ctx.strokeRect(e.x, e.y, e.width, e.width);
    }.bind(this)
  );
};

Snake.prototype.move = function() {
  this.cobra.forEach(
    function(e) {
      if (this.direction == "right") {
        e.x += 32;
      } else if (this.direction == "left") {
        e.x += 32 * -1;
      } else if (this.direction == "up") {
        e.y += 32 * -1;
      } else if (this.direction == "down") {
        e.y += 32;
      }
    }.bind(this)
  );
};

Snake.prototype.grow = function() {
  this.segment = {
    x: this.cobra[0]["x"]-this.cobra.length*32,
    y: this.cobra[0]["y"]-this.cobra.length*32,
    height: 32,
    width: 32
  };
  this.cobra.push(this.segment);
  console.log(this.cobra)
};
