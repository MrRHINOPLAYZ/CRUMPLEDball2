  // class Paper {
  //     constructor(x, y, diameter) {
  //       var options = {
  //           'isStatic': false,
  //           'restitution':0.8,
  //           'friction':0.3,
  //           'density':1.0
  //       }
  //       this.body = Bodies.rectangle(x, y,50,50,options);
  //       this.width = 50;
  //       this.height = 50;
  //       this.x = 100;
  //       this.y = 300;
  //       this.diameter = diameter;
  //       this.image = loadImage('images/paper.png');
  //       this.body = Bodies.circle(x,y,this.diameter/2,options);

        
  //       World.add(world, this.body);
  //     }
  //     display(){
  //       var pos =this.body.position;
  //       var angle = this.body.angle;

  //       // image(this.image,200,200);
  //       push();
  //       translate(pos.x, pos.y);
  //       rotate(angle);
        
  //       imageMode(CENTER);
  //       image(this.image, this.x,this.y, this.diameter);
        
  //       pop();
  //     }
  //   };
  
  class Paper {
    constructor(x,y,diameter) {
      var options = {
       isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

      }
      this.x=x;
      this.y=y;
      this.diameter = diameter;
      this.image=loadImage("images/paper.png");
      this.body = Bodies.circle(x,y,this.diameter/2,options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      //fill("yellow");
      //ellipse(0, 0, this.diameter/2,this.diameter/2);
      imageMode(CENTER);
      image(this.image, 0,0,this.diameter, this.diameter)
      pop();
    }
  };
  