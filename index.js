window.onload = function() {
  document.getElementById("easy").onclick = function() {
    new Game("canvas",1);
  };
  document.getElementById("medium").onclick = function() {
    new Game("canvas",2);
  };
  document.getElementById("hard").onclick = function() {
    new Game("canvas",3);
  };
};
