class Person {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':20,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("reealPerson2-removebg-preview.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }