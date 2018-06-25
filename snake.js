function Snake() {
  this.x = 350;
  this.y = 350;
  this.maxX = 700;
  this.minX = 0;
  this.direction = right;
}
Snake.prototype.moveRight = function() {
  this.x += 20;

};
Snake.prototype.moveLeft = function() {
  this.x -= 20;
 
};
Snake.prototype.moveUp = function() {
  this.x += 20;

};
Snake.prototype.moveDown = function() {
  this.x -= 20;
 
  
};
var directin;
document.onkeydown = function(e) {
    var key= (e.keyCode) 
      if(key == 37 && direction != right){
        this.direction = left;
      }
      else if (key == 39 && direction != left){
        this.direction = right;
      }
      else if (key == 38 && direction != down){
        this.direction = up;
      }
      else if (key == 40 && direction != up){
        this.direction = down;
      }
  };

