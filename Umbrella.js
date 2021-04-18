class Umbrella
{
    constructor(x, y)
    {
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 0.3
        }

        this.x = x;
        this.y = y;
        //this.r = r;
        this.body = Bodies.circle(this.x, this.y, 92, options);
        World.add(world, this.body);
    }

    display()
    {
        push(); 
        //translate(this.body.position.x, this.body.position.y); 
        rectMode(CENTER) 
        fill("black"); 
        ellipse(this.body.position.x, this.body.position.y, 92); 
        pop();
    }
}
