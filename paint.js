// Simple but fun painting app!

draw = function() {
  
    noStroke();
    fill(mouseY, mouseX-200, mouseX);
    
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 50, 50);
    }
};
