class Snow {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction':0.001,
          'density':0.5,
      }
      this.image = loadImage("snow4.webp");
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 25;
      
      World.add(world, this.body);
    }
    update(){
      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,1200),y:10});
      }
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  }