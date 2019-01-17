var w;

function setup(){
    createCanvas(800,600);
    w = new Wave();
}

function draw(){
    background(255);
    w.draw();
}

//function mousePressed(){
 //   w.mousePressed();
//}

document.addEventListener("DOMContentLoaded", function(){
    var cc = document.getElementById("constant");
    function changeConstant(event){
	    let constant = document.getElementById("constant").value;
    	w.setConstant(constant);
    }

    cc.addEventListener("change", changeConstant);

    var cf = document.getElementById("constant_form");

    cf.addEventListener("submit", function (event){
	    event.preventDefault()});
});
  