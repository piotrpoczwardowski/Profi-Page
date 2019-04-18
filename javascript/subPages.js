let backgroundImage = document.querySelector('.background__image img')
let backgroundText = document.querySelector('.background__blur')
let background = document.querySelector('.background__image')
window.onload = function(){
backgroundText.style.height = backgroundImage.height + 'px'
}

window.addEventListener("resize", function(event) {
    if(window.innerWidth > 875){
        backgroundText.style.height = backgroundImage.height + 'px'
    } 


});