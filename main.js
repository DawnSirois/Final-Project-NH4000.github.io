//flip cards//

const flipCardContainer = document.querySelectorAll(".flip-card");
          flipCardContainer.forEach(flip =>{
          flip.addEventListener('click', function(){
          flip.classList.toggle('flip')
         })
        })

//404//

var container = document.getElementById('container404');
      window.onmousemove = function(e){
        var x =  e.clientX/15,
            y =  e.clientY/15;
        container.style.backgroundPositionX = x + 'px';
        container.style.backgroundPositionY = y + 'px';

      }

//Hamburger menu//
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

function sideMenuAppears() {
  console.log('sideMenuAppears() is active'); 
  document.getElementById('side-menu').classList.add('show-menu');

}

function sideMenuDisappears() {
  // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
  document.getElementById('side-menu').classList.remove('show-menu');
}

//links close menu

