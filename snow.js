class snow
{
    constructor(x,y)
    {
        
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(this.x,this.y,20,20)
         var img
        var rand=Math.round(random(1,2))
        World.add(world,this.body)
        if(rand===1)
        {
           img="snow4.webp"
        }
        else{
            img="snow5.webp"
        }
        this.image=loadImage(img)
    }
    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,10,10)
        
    }
}