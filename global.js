let hamburgerMenu = document.querySelector('.hamburgerMenu')
let links = document.querySelector('.bottom__links')
let navigation__bottom = document.querySelector('.navigation__bottom')

hamburgerMenu.addEventListener('click', function(){
let navigationPositionY = navigation__bottom.getBoundingClientRect().y
let navigationHeight = navigation__bottom.clientHeight;

   links.style.height = '400px'
   links.style.top = navigationPositionY + navigationHeight +'px'
})