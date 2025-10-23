'use strict'


const menuSmall = document.querySelector('.menu-small');
const navMenu = document.querySelector('.nav');
const decorLine = document.querySelector('.decor-line');

menuSmall.addEventListener('click', function (event) {
  
  if (navMenu.style.left == "0%") {
    navMenu.style.left = "-100%";
  } else {
    navMenu.style.left = "0%";
  }
})



window.addEventListener('scroll', function() {
  
  if (scrollY > 100 && window.innerWidth >= 767) {
    navMenu.classList.add("nav_fixed");
    decorLine.style.marginTop = "80px";

  } 
  else if (scrollY <= 100 && window.innerWidth > 767) {
    navMenu.classList.remove("nav_fixed");
    decorLine.style.marginTop = "0px";
   }
  
});

const btnPromo = document.querySelector('.btn_promo');
const btnDark = document.querySelector('.btn_dark');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

btnPromo.addEventListener('click', function (event) {
  modal.style.display = "block";
});
modalClose.addEventListener('click', function (event) {
  modal.style.display = "none";
});


/*------------services_show-----------*/
const servicesBox = document.querySelector('.services-box');
const visible = document.querySelectorAll('.services__textbox-visible');
const invisible = document.querySelectorAll('.services__textbox-invisible');
const servicesItem = document.querySelectorAll('.services__item');
const btnMore = document.querySelectorAll('.btn_more');
const btnBack = document.querySelectorAll('.btn_back');


servicesBox.addEventListener('click', function(event) {
  const target = event.target;
  
  if (target && target.classList.contains('btn_more')) {
    btnMore.forEach((item, i) => {
      
      if (target == item) {

        invisible[i].classList.remove('services__textbox_hidden');
        visible[i].classList.add('services__textbox_hidden');
        
      }
    });
  }
  if(target && target.classList.contains('btn_back')) {
    btnBack.forEach((item, i) => {
      
      if (target == item) {

        invisible[i].classList.add('services__textbox_hidden');
        visible[i].classList.remove('services__textbox_hidden');
        
      }
    });
  }

});





/*************calc******** */
const autoCalc = document.querySelectorAll("#auto .calculating__choose-item");
const liftCalc = document.querySelectorAll("#lift .calculating__choose-item");

function dellActiveClass(obj) {
  obj.forEach(element => {
    element.classList.remove('calculating__choose-item_active');

  });
}


let forKM = 0;

let liftQuan = 0;
let autoQuan = 0;

const priceKM = 18;
const priceCargoMan = 300;





let cargoManInput = document.querySelector('#cargoman');
let kmInput = document.querySelector('#km');
let roofInput = document.querySelector('#roof');



autoCalc.forEach(element => {

  element.addEventListener('click', function (event) {
   
    dellActiveClass(autoCalc);
    autoQuan = +event.target.dataset.price;
    element.classList.add('calculating__choose-item_active');
    totalShow();
  })
});

liftCalc.forEach(element => {

  element.addEventListener('click', function (event) {
    
    dellActiveClass(liftCalc);
    liftQuan = +event.target.dataset.price;
    element.classList.add('calculating__choose-item_active');
    totalShow();

  })
});

cargoManInput.addEventListener('change', function (event) {
  totalShow();
})

kmInput.addEventListener('change', function (event) {
  
  if (+kmInput.value < 15) {
    forKM = 0;
  }
  else if (+kmInput.value >= 15) {
    forKM = kmInput.value * 2 * priceKM;
  }

  totalShow();
})

roofInput.addEventListener('change', function (event) {
  totalShow();
})


let allTotal = document.querySelector('.calculating__result span');

function totalShow(params) {
  
  if (cargoManInput.value > 0 && autoQuan > 0) {
    allTotal.innerHTML = `${cargoManInput.value * priceCargoMan + roofInput.value * liftQuan + autoQuan} за час работы, плюс за расстояние ${forKM * 1.5} `;
  }
  else if (cargoManInput.value == 0 && autoQuan > 0) {
    allTotal.innerHTML = `${autoQuan} за час работы, плюс за расстояние ${forKM} `;
  }
  else if (cargoManInput.value > 0 && autoQuan == 0) {
    allTotal.innerHTML = `${cargoManInput.value * priceCargoMan + roofInput.value * liftQuan } за час работы, плюс за расстояние ${forKM / 2} `;
  } else {
    allTotal.innerHTML = `Введите корректное значение`;
  }

}

const totalBtn = document.querySelector('.btn_total');

totalBtn.addEventListener('click', function () {
  totalShow();
})

totalShow();





