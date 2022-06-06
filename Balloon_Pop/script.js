//CONSTANTS
let maxSize = 400;
let minSize = 90;

//VARIABLES
let size = 200;

//FUNCTIONS

function inflate() {
  size = (size * 1.10)
  document.querySelector(".imgBalloon").height = (size)
  
  if (size >= maxSize){
    document.querySelector(".imgBalloon").src="Balloon_Images/popped_balloon.png"
    
    document.querySelector(".btnInflate").removeEventListener("click", inflate)
    document.querySelector(".btnDeflate").removeEventListener("click", deflate)
  }
  //increase size/height by 10%
  //if size exceeds a maximum, 
    //change to popped balloon
    //remove the ability for the user to inflate or deflate a popped balloon.
}

function deflate() {
   if (size >= minSize){
    size = size * 0.9
    document.querySelector(".imgBalloon").height = size
  }
  //decrease size/height by 10%
  //do not decrease the size below the minimum
}

function newBalloon() {
  size = 200
  document.querySelector(".imgBalloon").src = "Balloon_Images/blue_balloon.png"
  document.querySelector(".imgBalloon").height = size
  
  document.querySelector(".btnInflate").addEventListener("click", inflate);
  document.querySelector(".btnDeflate").addEventListener("click", deflate);
  
  
  
  
  //change any popped balloon back to blue balloon
  //return balloon back to default/initial size
  //restore event listeners
}


//INITIAL EVENT LISTENERS
document.querySelector(".btnInflate").addEventListener("click", inflate)
document.querySelector(".btnDeflate").addEventListener("click", deflate)
document.querySelector(".btnReset").addEventListener("click", newBalloon)