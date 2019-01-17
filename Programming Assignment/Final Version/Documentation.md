# Documentation
###Class
* Wave (construction class)
* Construction parameter (constant)
###Functions
* set function
`setConstant()`: Used to initialize the wave.js parameter
* draw function
`draw()`: Used to repaint animation
###Usage
```
var w;

function setup(){
    createCanvas(800,600);
    w = new Wave();
}

function draw(){
    background(255);
    w.draw();
}
```
This is the usage of two functions . Used to define object and background.
#### Reference
This [original code](https://www.openprocessing.org/sketch/402961) is from author **'aadebdeb'** from Japan.
