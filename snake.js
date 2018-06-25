function Snake() {
  this.x = 350;
  this.y = 350;
  this.height = 32;
  this.width = 32;
  this.direction = right;
}
Snake.prototype.moveRight = function() {

};
Snake.prototype.moveLeft = function() {

};
Snake.prototype.moveUp = function() {

};
Snake.prototype.moveDown = function() {

 
  
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

