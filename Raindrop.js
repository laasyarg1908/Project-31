class Raindrop
{
    constructor(x, y)
    {
        var options = {
            isStatic: false,
            friction: 0.1,
            restitution: 0
         }
        this.x=x; 
        this.y=y; 
        this.rain = Bodies.circle(this.x, this.y, options);
        World.add(world, this.rain);
        
    }


    updateY()
    {
        if (this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)});
        }
    }

    display()
    {

        //console.log(drops);
        var pos = this.rain.position;
        push(); 
        translate(pos.x, pos.y); 
        rectMode(CENTER) 
        fill("blue"); 
        ellipse(pos.x, pos.y); 
        pop();


    }
}
    
