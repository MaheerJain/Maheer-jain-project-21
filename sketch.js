
var canvas;
var engine,world;
var surface1,surface2,surface3,surface4;
var ball;

var music;




function setup(){
    canvas = createCanvas(800,600);

    
    //create 4 different surfaces

   surface1 = createSprite(100,700,75,50);
   surface1.shapeColor = "blue";
   surface2 = createSprite(200,700,75,50);
   surface2.shapeColor = "yellow";
   surface3 = createSprite(300,700,75,50);
   surface3.shapeColor = "red";
   surface4 = createSprite(400,700,75,50);
   surface4.shapeColor = "orange";
   

   
   ball = createSprite(Math.round(random(20,250)),200,15);
   ball.shapeColor = "white";
   ball.velocityY = 8;
   ball.velocity = 3;




}

function draw() {
    background(rgb(169,169,169));
    music.playSound();
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }
    if(surface2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = rgb(153,0,76);
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = rgb(0,100,0);
    }
    drawSprites();


}
