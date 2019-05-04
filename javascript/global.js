let hamburgerMenu = document.querySelector(".hamburgerMenu");
let links = document.querySelector(".bottom__links");
let navigation__bottom = document.querySelector(".navigation__bottom");
let offerLink = document.querySelector(".links__offer");
let offerMenu = document.querySelector(".offer__menu");
let offerMenuRespons = document.querySelector(".offer__menu--mobile");
let offerMenuLinks = document.querySelectorAll('.offer__menu a')
let logos = document.querySelectorAll('.footer__logo img, .bottom__logo')


logos.forEach(function(e){
    e.style.cursor = 'pointer'
    e.addEventListener('click', function(){
        window.location= '/index.html'
    })
})






toggleOfferMenuListener();
addOfferMenuToHamburger()




window.addEventListener("resize", function() {
    toggleOfferMenuListener();
    addOfferMenuToHamburger()
  });
  


hamburgerMenu.addEventListener("click", function() {
  let navigationPositionY = navigation__bottom.getBoundingClientRect().y;
  let navigationHeight = navigation__bottom.clientHeight;

  links.classList.toggle("activeMenu");
  links.style.top = navigationPositionY + navigationHeight + "px";
});

function addOfferMenuToHamburger(){
    if(window.innerWidth < 600){
        offerMenuRespons.style.display = 'flex'
        offerMenuLinks.forEach(function(e){
            e.style.fontSize = '18px'
            e.style.fontWeight = 'normal'
            e.style.overflow = 'hidden'
            offerMenuRespons.appendChild(e)
        })
    } else{
        offerMenuRespons.style.display = 'none'
        offerMenuLinks.forEach(function(e){
            e.style.fontSize = ''
            e.style.fontWeight = ''
            offerMenu.appendChild(e)
        })
    }
}

function addHeight() {
  offerMenu.style.height = 80 + "px";
}

function removeHeight() {
  offerMenu.style.height = 0 + "px";
}

function toggleOfferMenuListener() {
  if (window.innerWidth > 600) {
    offerLink.addEventListener("mouseenter", addHeight);
    offerMenu.addEventListener("mouseenter", addHeight);
    offerLink.addEventListener("mouseleave", removeHeight);
    offerMenu.addEventListener("mouseleave", removeHeight);
  } else {
    offerLink.removeEventListener("mouseenter", addHeight);
    offerMenu.removeEventListener("mouseenter", addHeight);
    offerLink.removeEventListener("mouseleave", removeHeight);
    offerMenu.removeEventListener("mouseleave", removeHeight);
  }
}

