class Plane  {
    constructor(x,y,width,hight){
    var options = {
         isStatic: true
                }
            this.body = Bodies.rectangle(x, y, width,hight, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
            }

            display(){
            var pos =this.body.postion;
            rectMode(CENTER)
            fill("brown")
            rect(pos.x,pos.y,this.width,this.height);
              }
            }
    