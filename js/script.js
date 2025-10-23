
/* fetch('/jsonDir/jsonFile.json')
    .then(response => response.json())
    .then(user => alert(user.name));
*/



const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const portfolioItem = document.querySelectorAll(".portfolio__item"); 
const portfolioDescr = document.querySelectorAll('.portfolio__descr');
portfolioItem.forEach((element, index) => {
    element.addEventListener('mouseover', function (params) {
        console.log(portfolioDescr[index]);
        
        portfolioDescr[index].classList.add('show');
    });
    element.addEventListener('mouseout', function (params) {
        console.log(portfolioDescr[index]);
        
        portfolioDescr[index].classList.remove('show');
    });

});