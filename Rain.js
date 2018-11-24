// Rain.js
// Click to add more raindrops! Randomized colors!

var xPositions = [200, 50, 80, 333];
var yPositions = [0, -100, -25, -222];
var colors = [
    color(255, 0, 0), 
    color(255, 0, 255), 
    color(110, 121, 240), 
    color(255, 255, 13),
];

draw = function() {
    background(204, 247, 255);
    
    mouseClicked = function() {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        colors.push(color(random(0, 300), random(0, 300), random(0, 300)));
    };

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colors[i]);
    
        ellipse(xPositions[i], yPositions[i], 10, 10);
        
        if(yPositions[i] > 400)
        {
            yPositions[i] = 0;   
        }
        
        yPositions[i] += 4;
    } 
};
