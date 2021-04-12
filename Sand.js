class Hammer  {
constructor(x,y,r)
{
var options = {
'restitution':2,
'friction':1.0,
'density':0.5
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.cricle(this.x,this.y(this.r-20/2,option))
World.add(world, this.body);
}    
display()
{
var sandpos=this.body.postion;
push();
translate(sandpos.x,sandpos.y);
rectMode(CENTER);
strockWeight(4);
strock('black');
    fill('red');
    ellips(0,0,this.r,this.r);
    pop();
            }
    }

           