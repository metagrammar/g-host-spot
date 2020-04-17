/* , 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a' */
const keySecret = ['g', 's', 'p', 'o', 't'];
const keySequence = [];
const ghostThing = document.getElementById('ghost');

window.addEventListener('keydown', keyPressed);

console.log(keySecret + ' this is the secret');

function keyPressed(e){
  keySequence.push(e.key);
  if(keySequence.length >= keySecret.length){
    let stringSequence = keySequence.toString('');
    let stringSecret = keySecret.toString('');
    if (stringSequence.search(stringSecret) >= 0){
      document.bgColor = ('#000000');
      ghostThing.style.display = ('block');
      window.removeEventListener('keydown', keyPressed);
      window.addEventListener('keydown', ghostMove);

    } 
  }
};

function ghostMove(e){
    switch(e.key){
      case 'ArrowUp':
        var ghostPosY = parseInt(ghostThing.style.top)
        if(ghostPosY > 0){
              ghostThing.style.top = (ghostPosY -20) + 'px';
              ghostThing.style.transform = ('rotate(360deg)')
        } else if(ghostPosY <= 0){
          ghostThing.style.top = (ghostPosY +20) + 'px';
          } break;
        
        case 'ArrowDown':
          var ghostPosY = parseInt(ghostThing.style.top)
          if(ghostPosY <= window.innerHeight - 50){
                ghostThing.style.top = (ghostPosY +20) + 'px';
                ghostThing.style.transform = ('rotate(360deg)')
        } else if(ghostPosY >= window.innerHeight -80){
          // console.log(window.innerHeight)
          ghostThing.style.top = (ghostPosY -20) + 'px';
          ghostThing.style.transform = ('rotate(180deg)')
          } break;

        case 'ArrowLeft':
        var ghostPosX = parseInt(ghostThing.style.left)
        if(ghostPosX > 0){
              ghostThing.style.left = (ghostPosX -20) + 'px'
              ghostThing.style.transform = ('rotate(360deg)');
        } else if(ghostPosX <= 0){
          ghostThing.style.left = (ghostPosX +20) + 'px';
          ghostThing.style.transform = ('rotate(270deg)')
          } break;

        case 'ArrowRight':
          var ghostPosX = parseInt(ghostThing.style.left)
          if(ghostPosX < window.innerWidth - 60){
                ghostThing.style.left = (ghostPosX +20) + 'px';
                ghostThing.style.transform = ('rotate(360deg)')
        } else if(ghostPosX >= window.innerWidth -80){
          // console.log(window.innerWidth)
          ghostThing.style.left = (ghostPosX -20) + 'px';
          ghostThing.style.transform = ('rotate(90deg)')
          } break;
  }
}