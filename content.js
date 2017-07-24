
function getButton() {
    var nextBtn = document.getElementsByClassName("nextBtn")
    console.log('hello')
    if (nextBtn.length == 0) {
      setTimeout(function(){
        var nextBtn = document.getElementsByClassName("nextBtn")
        addEventListener(nextBtn)
     }, 15000);
    }

function addEventListener(nextBtn) {
  console.log('the button', nextBtn)
  nextBtn[0].addEventListener('click', callSetTimeOut);
}

function callSetTimeOut() {
  setTimeout(function(){
    alert("Hello");
  }, 3000);
}
}


window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    getButton()
},false);
