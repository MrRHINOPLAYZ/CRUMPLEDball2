class Bin {
    constructor(x, y) {
      var options = {
          'isStatic': false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }

      var boxPosition = width/2 + 50;
      var boxY = height-50;
  
      this.image = loadImage('images/dustbin.png');
      this.leftBody = Bodies.rectangle(boxPosition, boxY, 20,100,{isStatic:true});
	  this.rightBody = Bodies.rectangle(boxPosition+200, boxY, 20,100,{isStatic:true});
	  this.baseBody = Bodies.rectangle(boxPosition+100, boxY+45, 200,20,{isStatic:true});
      
      
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
      World.add(world, this.baseBody);
    }
    display(){
      var leftpos = this.leftBody.position;
      var rightpos =this.rightBody.position;
      var basepos =this.baseBody.position;

      

      rectMode(CENTER);
      
    rect(leftpos.x, leftpos.y - 50, 20, 100);
    rect(rightpos.x, rightpos.y - 50, 20, 100);
    rect(basepos.x, basepos.y - 45, 200, 20);

    image(this.image,basepos.x - 100, basepos.y - 230, 200,200);
	
       }
  };
  