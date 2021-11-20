function isTouching(movingRect , fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }

  /*(Mock - Ron1.x < Ron1.width/2 + ron2bullet.width/2
    && Ron1.x - Mock < Ron1.width/2 + ron2bullet.width/2
    && ron2bullet.y - Ron1.y < Ron1.height/2 + ron2bullet.height/2
    && Ron1.y - Ron1.y < Ron1.height/2 + ron2bullet.height/2)*/




