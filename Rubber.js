class Hammer  {
    constructor(x,y){
    var options = {
    restitution:0.3,
    friction :5,
    density:1
                }
    this.x=x
     this.y=y
      this.r=r
      this.body=Bodies.cricle(this.x,this.y(this.r-20/2,option))
      World.add(world, this.body);
     }    
     display()
     {
        var pos =this.body.postion;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strockWeight(4);
        strock('black');
         fill('blue');
        
        ellips(0,0,this.r,this.r);
         pop();
              }
            }
    
