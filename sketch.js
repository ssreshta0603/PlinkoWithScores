var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var particle;
var turn = 0;

var gameState = "start";

var divisionHeight=300;

function setup() {
  createCanvas(800, 900);
  engine = Engine.create();
  world = engine.world;



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 80; j <=width-50; j=j+45) 
    {
    
       plinkos.push(new Plinko(j,100));
    }

    for (var j = 45; j <=width-5; j=j+45) 
    {
    
       plinkos.push(new Plinko(j,200));
    }

    for (var j = 80; j <=width-50; j=j+45)  
    {
    
       plinkos.push(new Plinko(j,300));
    }

     for (var j = 45; j <=width-5; j=j+45) 
    {
    
       plinkos.push(new Plinko(j,400));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   fill("lightGreen");
   text("Score :" + score , 50,50);
   fill("white");
   text("500",30,650);
   text("500",100,650);
   text("500",180,650);
   text("500",260,650);
   text("100",340,650);
   text("100",420,650);
   text("100",500,650);
   text("200",580,650);
   text("200",660,650);
   text("200",740,650);



   if (particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x<400){
        score = score + 500;
        particle = null;
        if(turn>=5){
          gameState = "end";
          
        } 
      }
      else if(particle.body.position.x<550){
        score = score + 100;
        particle = null;
        if(turn>=5){
          gameState = "end";
          
        } 
      }
      else if(particle.body.position.x<800){
        score = score + 200;
        particle = null;
        if(turn>=5){
          gameState = "end";
          
        } 
      }
    }
 } 
 if(gameState === "end"){
  textSize(50);
  fill("red");
  text("Game Over", 280, 250);
} 

  
   
}



function mousePressed(){
  if(gameState !== "end"){
    turn++;
   particle =  new Particle(mouseX, 10,10,10);
  }
}