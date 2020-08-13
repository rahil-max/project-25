class lidd{
    constructor(x,y,width,height){
    var options = {
        isStatic: true,
        restitution:0.3,
        friction: 0.5,
        density:1.2
    }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image = loadImage("wood2.png");
     World.add(world,this.body);

     function close(){
         if(paperball.body.position.x>=695){
             Matter.Bodies.setStatic(this.body,false);
         }
    
    }

}

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    imageMode(CENTER);

  image(this.image,0,0, this.width,this.height);
  pop();

    
}


  }