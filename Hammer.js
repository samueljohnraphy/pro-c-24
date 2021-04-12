class Hammer  {
    constructor(x,y){
    var options = {
    'restitution':2,
    'friction':1.0,
    'density':0.5
                }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
     this.width = 150;
      this.height = 40;
      World.add(world, this.body);
            
     display()
  var pos =this.body.postion;
     pos.x = mouseX
     pos.x = mouseXY
                var angle= this.body.angle;

        push();
         translate(pos.x,pos.y);
        rotate(angle);
        strockWeight(3)
        strock('white')
         fill('orange')
        rectMode(CENTER)
         rect(0,0,this.width,this.height);
         pop();
              }
            }
    