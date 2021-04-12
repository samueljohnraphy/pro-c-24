const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engin,world;
var stone,iron,rubber,hammer;
var sand1,sand2,sand3,sand4,sand5,sand6;

function setup() {  
var canvas=crateCanvas(1200, 600)
	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,hight,1200,20)
    
	stone=new Plane(700,300,100,100)
    iron = new iron(300,350);
	rubber=new rubber(900,450,70);
	hammer=new hammer(10,100);

    sand1=new Sand1(505,450,10);
    sand2=new Sand2(510,450,10);
	sand3=new Sand3(515,450,10);
	sand4=new Sand4(520,450,10);
	sand5=new Sand5(525,450,10);
	sand6=new Sand6(530,455,10);
	sand7=new Sand7(535,455,10);
	sand8=new Sand8(540,455,10);
	sand9=new Sand9(545,455,10);
	sand10=new Sand10(550,455,10);
	    
  
}


function draw() {
  background(0);
  Engine.update(engine);

stone.display();
plane.display();
iron .display();
rubber.display();

hammer.display();


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



