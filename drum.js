var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var n=this.innerHTML;
  makeSound(n);
  addAnimation(n);

});
}
document.addEventListener("keydown",function(){
 makeSound(event.key);
 addAnimation(n);
});
function makeSound(key) {
  switch (key) {
    case "w":
    var a1=new Audio("sounds/crash.mp3");
    a1.play();

      break;
    case "a":
       var a2=new Audio("sounds/kick-bass.mp3");
        a2.play();
      break;
    case "s":
        var a3=new Audio("sounds/snare.mp3");
        a3.play();
      break;
    case "d":
      var a4=new Audio("sounds/tom-1.mp3");
         a4.play();
    break;
    case "j":
       var a5=new Audio("sounds/tom-2.mp3");
         a5.play();
    break;
    case "k":
       var a6=new Audio("sounds/tom-3.mp3");
          a6.play();
    break;
    case "l":
       var a7=new Audio("sounds/tom-4.mp3");
         a7.play();
    break;
    default: console.log(n);

  }
}
function addAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
