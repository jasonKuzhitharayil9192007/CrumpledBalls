class Ground 
{

    constructor(x,y,width,height)
    {
        var options =
        {
            isStatic: true
        }

      this.x = x;
      this.y = y;
      
      this.body = Bodies.rectangle(x,y, width, height,options );
      
      this.body.width = width;
      this.body.height = height;

      World.add(world, this.body);

    }
    
    display()
    {
        push();
        fill("yellow");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.body.width, this.body.height)
        pop();

    }


}