class Game {
    constructor(){


    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    
   async start(){
      if(gameState === 0){
          
        player = new Player();
        var playerCountRef= await database.ref('playerCount').once("value")
        if(playerCountRef.exists ()){
          playerCount=playerCountRef.val();
          player.getCount();
        }
        
        form = new Form()
        form.display();
      }
  
      Ron1=createSprite(200,200 , 20 , 20)
      Ron1.shapeColor = "grey"
      //Ron1.addImage(belatrix)
      //Ron1.scale = 0.1
        //car1.addImage(car1Img)
      Ron2=createSprite(200,200 , 20 , 20)
      Ron2.shapeColor = "yellow"
      //Ron2.addImage(hermoine)
      //Ron2.scale = 0.1

      ronsGroup.add(Ron1)
      ronsGroup.add(Ron2)
      bg();    

      rons = [Ron1 , Ron2]
      //make rons in a for loop according to the player count 

      //make bullets in a for loop according to the number of rons

      ron1bullet = createSprite(2000 , 2000, 15 , 5)
      /*ron1bullet.addImage(curse)
      ron1bullet.scale = 0.1*/
      ron1bullet.shapeColor = "green"

      ron2bullet = createSprite(2000 , 2000, 15 , 5)
      ron2bullet.shapeColor = "green"
      //ron2bullet.addImage(curse)
      //ron2bullet.scale = 0.1

      bullets = [ron1bullet , ron2bullet]

      bulletGroup.add(ron1bullet)
      bulletGroup.add(ron2bullet)

    }
  
    play(){
      form.hideForm();
      drawSprites();

        
      //text ("GAME STARTED" , width/2 , height/2);
      Player.getPlayerInfo();
      player.getFinishedPlayers();
      
      if(allPlayers !== undefined){
        //background ("red")
        //image (trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
          var yPosition = 0
          var xPosition = 0
          var x = 0
          var test
          var velocityy
          //var re
          index = 0
          
          
        for(var plr in allPlayers){
          index=index+1
          x=x+200;
        //y= displayHeight-allPlayers[plr].distance
            xPosition = x+allPlayers[plr].distanceX
            yPosition = -20+allPlayers[plr].distanceY
            bulletsY = allPlayers[plr].bulletY
            bulletsX = allPlayers[plr].bulletX
            velocityy = allPlayers[plr].bulletVelocity
            //re = allPlayers[plr].returnBullet

            rons[index-1].x=xPosition;
            rons[index-1].y=yPosition;

                     
            bullets[index-1].x = bulletsX
            bullets[index-1].y = bulletsY 
              

            bullets[index-1].velocityX += velocityy

            if(index===player.index){
              
              
              camera.position.x = rons[index-1].x
              camera.position.y = rons[index-1].y
              camera.zoom = 5
            }

            fill ("red")
            textSize(10)
            text(allPlayers[plr].name ,rons[index-1].x , rons[index-1].y -10 )
            

            //bullets[index-1].velocityX = bullets[index-1].velocityX - re
            
            /*player.returnBullet = 0
            player.update();*/
            
            //this.resetVelocity(0)

            /*function velocity(){

              bullets[index-1].getSpeed(velocityy)

            }*/

          //ron1bullet.x = xPosition
         // ron1bullet.y = yPosition

        }
      }
      
      
      //console.log("Butllet" + ron2bullet.y + "x-axis" + ron2bullet.x )
      console.log("ron1: " +  Ron1.x)
      console.log("bullet: " + (ron2bullet.x + bullets[player.index-1].velocityX))

      var Mock = (ron2bullet.x + ron2bullet.velocityX)
      var Mock2 = (ron1bullet.x + ron1bullet.velocityX)

      if ((Mock - Ron1.x < Ron1.width/2 + ron2bullet.width/2
        && Ron1.x - Mock < Ron1.width/2 + ron2bullet.width/2
        && ron2bullet.y - Ron1.y < Ron1.height/2 + ron2bullet.height/2
        && Ron1.y - Ron1.y < Ron1.height/2 + ron2bullet.height/2)){
          
          gameState = 2
          //this.gameEnd1();
          
          /*if(rons[index-1] === Ron1){
            text("hello world"  , 200 , 200)
          }
          else{
            text("hello"  , 200 , 200)
          }*/
          
      }
      else if ((Mock2 - Ron2.x < Ron2.width/2 + ron1bullet.width/2
        && Ron2.x - Mock2 < Ron2.width/2 + ron1bullet.width/2
        && ron1bullet.y - Ron2.y < Ron2.height/2 + ron1bullet.height/2
        && Ron2.y - Ron2.y < Ron2.height/2 + ron1bullet.height/2)){

          gameState = 3

      }
      else {
        console.log(player.index);
      }

      console.log(ron2bullet.x)
//Ron1.debug = true
//ron2bullet.debug = true


      if (rons[player.index-1].isTouching(bgGroup) && dir === 180){
        test = true
        player.distanceX += 1
        player.update();
        console.log(dir)
      }
      else if (rons[player.index-1].isTouching(bgGroup) && dir === 0){
        test = true
        player.distanceX -= 1
        player.update();
        console.log(dir)
      }
      else if (rons[player.index-1].isTouching(bgGroup) && dir === -90){
        test = true
        player.distanceY += 1
        player.update();
        console.log(dir)
      }
      else if (rons[player.index-1].isTouching(bgGroup) && dir === 90){
        test = true
        player.distanceY -= 1
        player.update();
        console.log(dir)
      }
      else{
        test = false
        //console.log(dir)
      }

      //console.log(test)

      if(keyIsDown(LEFT_ARROW ) && test === false /*and it should not be colliding with the bg sprites*/){
        dir = 180        
        player.distanceX -= 1
        player.update();
    }
    else if(keyIsDown(RIGHT_ARROW)&& test === false){
      dir = 0
      player.distanceX += 1
        player.update();
    }
    else if(keyIsDown(UP_ARROW)&& test === false){
      dir = -90
      player.distanceY -= 1
        player.update();
    }
    else if(keyIsDown(DOWN_ARROW)&& test === false){
      dir = 90
      player.distanceY += 1
        player.update();
    }





    //player bullets
    if(keyWentDown(65)){

      this.createBullet();
      //bullet.x -= 20
      //ron1bullet.x = rons[index-1].x
      //ron1bullet.y = rons[index-1].y
      //ron1bullet.setSpeed(3,dir);
      //player.update();
     // this.createBullet();
     
    }

    if(keyWentDown(32)) {

      this.resetVelocity();
      
    }

  
     /* if(bullets[player.index-1].collide(bgGroup)){

        player.bulletX = rons[player.index-1].x
        player.bulletY = rons[player.index-1].y
        player.update();
        console.log("hi")

      }*/

    /*bulletGroup.overlap(Ron2 , function(bg , bu){
      bu.visible = false;
    })
    bulletGroup.overlap(Ron1 , function(bg , bu){
      bu.visible = false;
    })

    bgGroup.overlap(bulletGroup , function(bg , bu){
      bu.destroy();
      
    })*/

    
    
  }

createBullet(){

  //player.returnBullet = bullets[index-1].velocityX
  player.bulletX = rons[player.index-1].x + 25
  player.bulletY = rons[player.index-1].y
  player.update();

  player.bulletVelocity = 1
  player.update();
  
  /*velocity();*/
  //bullets[player.index-1].getDirection(dir);
  
  /*bullet = createSprite(rons[player.index-1].x , rons[player.index-1].y , 20 , 20) 
  bullet.shapeColor="red"
  //bullet.velocityX=3; 
  bullet.setSpeed(3,dir)
  
  bullet.lifetime = 300
  bulletGroup.add(bullet)*/

}

resetVelocity(){

  player.bulletX = rons[player.index-1].x - bullets[player.index-1].velocityX + 15
  player.bulletY = rons[player.index-1].y
  player.update()

}

gameEnd1(){
  camera.off();
  textSize(100)
  fill("yellow")
  text(allPlayers.player2.name + ", WINS !!!!" , 0 , height/2)
}
gameEnd2(){
  camera.off();
  textSize(100)
  fill("yellow")
  text(allPlayers.player1.name + ", WINS !!!!" , 0 , height/2)
}


}
