function Background(game, config) {
  this.game = game;
  this.img = new Image();
  if (config == 1) {
    this.img.src = "images/sand.jpg";
  } else if (config == 2) {
    this.img.src = "images/water.png";
  } else {
    this.img.src = "images/dessert_low.jpg";
  }
  this.x = 0;
  this.y = 0;
}
Background.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.game.canvas.width,
    this.game.canvas.height
  );
};
