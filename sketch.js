var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

   block3 = createSprite(510,580,200,30);
   block3.shapeColor = "green";

   block4 = createSprite(800,580,360,30);
   block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 10;
    ball.velocityX = 10;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
     ball.bounceOff(edges);
      bounceOff(ball,block4);
      bounceOff(ball,block3);
      bounceOff(ball,block2);
      bounceOff(ball,block1);
    //write code to bounce off ball from the block1 
    
    if (istouching(ball,block1)){
        ball.shapeColor = "blue";
    }
    if (istouching(ball,block2)){
        ball.shapeColor = "orange";
    }
    if (istouching(ball,block3)){
        ball.shapeColor = "green";
    }
    if (istouching(ball,block4)){
        ball.shapeColor = "red";
    }

     

    
       
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}

