function Apple(game) {
    this.game = game;
    this.height = 32;
    this.width = 32;
    this.x = Math.floor(Math.random()*(this.game.canvas.width -this.width));
    this.y = Math.floor(Math.random()*(this.game.canvas.height - this.height));
    this.img = new Image();
    this.img.src = "images/food.png";
  }
  Apple.prototype.draw = function() {
    this.game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
  };