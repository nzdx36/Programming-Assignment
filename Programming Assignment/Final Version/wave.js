class Wave{
	constructor(type,constant){   
    this.type=type || 1;
    this.constant = constant || 100;
  }
    setConstant(constant){
        this.constant = constant;
    }

	draw(){               ///////Method
    var colors = [
      color(255, 0, 0),
      color(0, 255, 0),
      color(0, 0, 255)
    ];
		 blendMode(BLEND);
  
  
    if(this.type == 0) {
      background(255);
      blendMode(EXCLUSION);
    } 
    else {
      background(0);
      blendMode(SCREEN);
    }
    noFill();
  
    strokeWeight(20);
  
    for(var i = 0; i < 3; i++) {
  	
      stroke(colors[i]);
      beginShape();
      for(var w = -20; w < width + 20; w += 5) {
        var h = height / 2;
        h += this.constant * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
        curveVertex(w, h);
      }    
      endShape();
      }
		

  }
}