class Stone {
    constructor(x,y,width,height){
    var options = {
    'restitution':0.8,
    'friction':0.8,
    'density':12
                }
    this.body = Bodies.rectangle(x, y,width,height, options);
     this.width = width;
      this.height =height;

      World.add(world, this.body);
            
     display()
  var pos =this.body.postion;
     var angle= this.body.angle;
         push();
         translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        strockWeight(4)
        strock('black')
         fill('black')
         rect(0,0,this.width,this.height);
         pop();
              }
            }
    