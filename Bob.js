class Bob{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            density : 2,
            friction : 1.0,
            restitution : 0.5,
           
        }        
        this.width = width;        
        this.image = loadImage("paper.png")

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        image(this.image, pos.x -130, pos.y -140 )

      }
  
}
