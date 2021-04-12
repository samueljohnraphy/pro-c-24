const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engin,world;
var stone1,iron1,rubber1,hammer1;
var sand1,sand2,sand3,sand4,sand5,sand6;

function setup() {  
var canvas=createCanvas(1200, 600)
	engine = Engine.create();
	world = engine.world;

	Plane = new plane(600,height,1200,20)
    
	stone1=new Stone(700,300,100,100)
    iron1 = new iron(300,350);
	rubber1=new rubber(900,450,70);
	hammer1=new hammer(10,100);

    sand1=new sand(505,450,10);
    sand2=new sand(510,450,10);
	sand3=new sand(515,450,10);
	sand4=new sand(520,450,10);
	sand5=new sand(525,450,10);
	sand6=new sand(530,455,10);
	sand7=new sand(535,455,10);
	sand8=new sand(540,455,10);
	sand9=new sand(545,455,10);
	sand10=new sand(550,455,10);
	    
  
}


function draw() {
  background(0);
  Engine.update(engine);

stone1.display();
Plane.display();
iron1 .display();
rubber1.display();

hammer1.display();


sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display();
sand10.display();
	
}



